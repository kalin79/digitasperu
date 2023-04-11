import Gradient from "./Gradient";
import vertex from "./gradient-background.vert";
import fragment from "./gradient-background.frag";
import Rect from 'nanogl-primitives-2d/rect'
import Scene from "../Scene";
import Program from "nanogl/program";
import { GLContext } from "nanogl/types";
import Screen from "../lib/Screen";


export default class Background {

  gl: GLContext;
  quad: Rect;
  prg: Program;

  constructor(
    public readonly scene: Scene,
    public readonly gradient: Gradient
  ) {

    this.gl = scene.gl;

    this.quad = new Rect(this.gl);
    this.prg = this.scene.programs.create("gradient-bg",
      vertex(),
      fragment()
    );

  }

  render() {

    this.prg.use();
    this.prg.uGradient1(this.gradient.model.getGradient(0));
    this.prg.uGradient2(this.gradient.model.getGradient(1));
    this.prg.uWhiteNoise(this.gradient.model.whiteNoise);
    this.prg.uViewport([Screen.width, Screen.height, 1.0 / Screen.dpi]);
    this.prg.uMpos(this.gradient.mpos);
    this.prg.uTime(this.scene.time);

    this.quad.bind();
    this.quad.attribPointer(this.prg);
    this.quad.render();

  }

}