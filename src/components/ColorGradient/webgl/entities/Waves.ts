import Scene from "../Scene";
import Node from "nanogl-node";
import Program from "nanogl/program";
import { GLContext } from "nanogl/types";
import vertexWave from "./gradient-wave.vert";
import fragmentWave from "./gradient-wave.frag";
/// #if DEVELOPMENT
import { CreatePane, Presetpane } from "../dev/Tweak";
import { Pane } from "tweakpane";
/// #endif
import { LocalConfig } from "nanogl-state";
import { mat3, mat4, quat, vec2, vec3 } from "gl-matrix";
import { fromEuler } from "../lib/QuatUtils";

import Gradient from "../entities/Gradient";
import Screen from "../lib/Screen";
import PlaneGeometry from "./PlaneGeometry";
import Plane from "../math/Plane";
import Ray from "../math/Ray";
import planeIntersect from "../math/ray-plane-intersection";
import { random } from "../math/random";
import Settings from "../settings";



const MPOS = vec2.create();
const V3 = vec3.fromValues(0.0, 0.0, 1.0);
const M3 = mat3.create();
const WORLD_CAST_POSITION = vec3.create();
const LOCAL_CAST_POSITION = vec3.create();
const INV_WORLD = mat4.create();

export default class Waves {

  gl: GLContext;

  geom: PlaneGeometry;

  node: Node;
  prg: Program;
  cfg: LocalConfig;

  noiseScale: number = 4.57;
  scaleX: number = 0.6989130434782609;
  scaleY: number = 2.8;
  height: number = 0.2;
  speed: number = 0.4;

  x: number = 0;
  y: number = 0;
  z: number = 0;

  rx: number = -0.4780684472854033;
  ry: number = -0.20488647740802968;
  rz: number = 0.81954590963212;

  mplane: Plane;
  ray: Ray;

  _currentSetting: number = 0;
  pane: Pane;

  get settings() {
    return Settings.NOISE[this._currentSetting];
  }

  constructor(
    public readonly scene: Scene,
    public readonly gradient: Gradient
  ) {

    const gl = this.gl = scene.gl;

    this.geom = new PlaneGeometry(gl, 5, 5, 90, 90);

    this.node = new Node();
    this.scene.root.add(this.node);

    this.prg = this.scene.programs.create(
      "gradient",
      vertexWave(),
      fragmentWave(),
    );

    this.cfg = this.scene.glstate.config();
    this.cfg
      .enableDepthTest(true)
      .enableCullface(true)
      .cullFace(gl.FRONT)
      .depthMask(true)
      .enableBlend(true)
      .blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    this.mplane = new Plane();
    this.mplane.normal[0] = 0.0;
    this.mplane.normal[1] = 1.0;
    this.mplane.normal[2] = 0.0;

    this.ray = new Ray();

    Object.assign(this, this.settings);

    /// #if DEVELOPMENT
    const pane = this.pane = CreatePane("Noise", true);
    pane.addInput(this, "noiseScale", { min: 0, max: 10 });
    pane.addInput(this, "scaleX", { min: -5, max: 5 });
    pane.addInput(this, "scaleY", { min: -5, max: 5 });
    pane.addInput(this, "height", { min: -1, max: 1 });
    pane.addInput(this, "speed", { min: 0.01, max: 2 });
    pane.addInput(this, "x", { min: -1.0, max: 1.0 });
    pane.addInput(this, "y", { min: -1.0, max: 1.0 });
    pane.addInput(this, "z", { min: -1.0, max: 1.0 });
    pane.addInput(this, "rx", { min: -Math.PI, max: Math.PI });
    pane.addInput(this, "ry", { min: -Math.PI, max: Math.PI });
    pane.addInput(this, "rz", { min: -Math.PI, max: Math.PI });

    pane.addInput(this, "_currentSetting", {

      label: "Preset",

      options: {
        noise_0: 0,
        noise_1: 1,
        noise_2: 2,
        noise_3: 3,
        noise_4: 4,
      },

    }).on("change", () => {

      Object.assign(this, this.settings);
      pane.refresh();

    });

    pane.addButton({title: "Randomize"}).on("click", ()=> { this.randomize(); pane.refresh();});
    Presetpane(pane, "noise_config");
    /// #endif

  }

  setCurrentSettings(idx: number) {
    this._currentSetting = idx;
    Object.assign(this, this.settings);
    this.pane && this.pane.refresh();
    // this.applySettings();
  }

  randomize() {

    this.scaleX = random(-3, 3);
    this.scaleY = random(-5, 5);
    this.rx = random(-Math.PI * 0.35, Math.PI * 0.35);
    this.rz = random(-Math.PI, Math.PI );

  }

  preRender() {

    this.node.x = this.x;
    this.node.y = this.y;
    this.node.z = this.z;

    quat.identity(this.node.rotation);
    fromEuler(this.node.rotation, [this.rx, this.ry, this.rz]);

    vec3.transformMat4(this.mplane.origin, vec3.create(), this.node._wmatrix);
    vec3.transformQuat(this.mplane.normal, V3, this.node.rotation);


    MPOS.set(this.gradient.mpos);
    MPOS[1] = -MPOS[1];
    this.ray.unproject(MPOS, this.scene.camera);

    planeIntersect(WORLD_CAST_POSITION, this.ray, this.mplane);

    mat4.invert(INV_WORLD, this.node._wmatrix);
    vec3.transformMat4(LOCAL_CAST_POSITION, WORLD_CAST_POSITION, INV_WORLD);

  }

  render() {

    this.prg.use();
    this.prg.uMVP(this.scene.camera.getMVP(this.node._wmatrix));
    this.prg.uNoiseScale(this.noiseScale);
    this.prg.uHeightScale(this.height);
    this.prg.uScaleX(this.scaleX);
    this.prg.uScaleY(this.scaleY);
    this.prg.uTime(this.scene.time);
    this.prg.uSpeed(this.speed);
    this.prg.uGradient1(this.gradient.model.getGradient(0));
    this.prg.uGradient2(this.gradient.model.getGradient(1));
    this.prg.uWhiteNoise(this.gradient.model.whiteNoise);
    this.prg.uViewport([Screen.width, Screen.height, 1.0 / Screen.dpi]);
    this.prg.uMpos(this.gradient.mpos);
    this.prg.uCastPos(LOCAL_CAST_POSITION);

    this.scene.glstate.push(this.cfg);
    this.scene.glstate.apply();

    this.geom.bind(this.prg);
    this.geom.draw();

    this.scene.glstate.pop();

  }

}
