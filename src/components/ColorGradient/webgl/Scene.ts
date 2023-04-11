// import GradientWave from "@webgl/entities/GradientWave"
import GLView from "./GLView"
import Programs from "./Programs"
import { vec3 } from "gl-matrix"
import Camera from "nanogl-camera"
import PerspectiveLens from "nanogl-camera/perspective-lens"
import Node from "nanogl-node"
import { GLContext } from "nanogl/types"
import GLState, { LocalConfig } from 'nanogl-state';
import Gradient from "./entities/Gradient"
import TextureLibrary from "./TextureLibrary"

export default class Scene {

  dt: number
  time: number
  aspect: number
  glview: GLView
  gl: GLContext
  programs: Programs
  camera: Camera;
  root: Node;
  gradient: Gradient;
  glstate: GLState;
  texlib: TextureLibrary;

  constructor() {

    this.dt = 0
    this.time = 0
    this.aspect = 1.0
  }


  init(glview: GLView) {

    this.glview = glview;
    this.gl = this.glview.gl;

    this.programs = new Programs(this);
    this.glstate = new GLState(this.gl);
    this.texlib = new TextureLibrary(this);

    const lens = new PerspectiveLens();
    lens.setAutoFov(55);
    lens.near = 0.05
    lens.far = 50

    this.camera = new Camera<PerspectiveLens>(lens);
    this.camera.z = -1;
    this.camera.lookAt(vec3.create());

    this.root = new Node();
    this.root.add(this.camera);


    this.gradient = new Gradient(this);

  }

  handleResize() {

  }

  render(dt: any) {

    this.dt = dt;
    this.time += dt;

    this.drawScene(this.camera);

  }

  setGradient(settingIdx : number){
    this.gradient.model.setCurrentSettings(settingIdx);
  }

  setNoise(settingIdx: number){
    this.gradient.waves.setCurrentSettings(settingIdx);
  }

  setConfig(configIdx: number){
    this.gradient.model.setCurrentSettings(configIdx);
    this.gradient.waves.setCurrentSettings(configIdx);
  }
  
  // // PRE RENDER
  // // =============
  preRender() {

    this.gradient.preRender();
    
    this.root.updateWorldMatrix();
    

  }

  // // RENDER
  // // =============
  drawScene(camera: Camera) {

    const gl = this.gl;
    const w = this.glview.width;
    const h = this.glview.height;

    this.aspect = w / h;
    camera.lens.aspect = this.aspect;

    this.preRender();

    camera.updateViewProjectionMatrix(w, h);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, w, h);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.glstate.apply();

    this.gradient.render();

  }

  async load() {

    await this.texlib.load();
    await this.compileShaders();
    this.onLoaded();
  }

  compileShaders = () => {
    this.programs.compile()
    return Promise.resolve()
  }

  onLoaded = () => {

  }



}