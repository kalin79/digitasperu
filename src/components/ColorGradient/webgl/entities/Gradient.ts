import Screen from "../lib/Screen";
import GradientModel from "./GradientModel";
import Scene from "../Scene";
import { vec2 } from "gl-matrix";
import Background from "./Background";
import Waves from "./Waves";

export default class Gradient {

  waves: Waves;
  background: Background;
  model: GradientModel;
  mpos: vec2;
  _tmpos: vec2;

  constructor(
    public readonly scene: Scene
  ) {

    this.model = new GradientModel(scene);
    this.waves = new Waves(scene, this);
    this.background = new Background(scene, this);
    this.mpos = vec2.create();
    this._tmpos = vec2.create();

    document.addEventListener("mousemove", this.onMouseMove);

  }

  onMouseMove = (evt) => {
    this._tmpos[0] = (((evt.clientX - Screen.bounds.x) / Screen.width) - 0.5) * 2.0;
    this._tmpos[1] = (((evt.clientY - Screen.bounds.y) / Screen.height) - 0.5) * 2.0;
  }

  preRender() {

    this.mpos[0] += (this._tmpos[0] - this.mpos[0]) * this.scene.dt * 4.0;
    this.mpos[1] += (this._tmpos[1] - this.mpos[1]) * this.scene.dt * 4.0;

    this.waves.preRender();
  }

  render() {

    this.background.render();
    this.waves.render();

  }

}