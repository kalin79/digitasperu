import Scene from "../Scene";
import Texture2D from "nanogl/texture-2d";
import Settings, { COLORS } from "../settings";
import { ParseCSS, MakeFromHex } from "../lib/color";
/// #if DEVELOPMENT
import { CreatePane, Presetpane } from "../dev/Tweak";
import { Pane } from "tweakpane";
/// #endif


class GradientStruct {

  cvs: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  gradient: CanvasGradient;

  startColor: string;
  endColor: string;

  constructor(start: string, end: string) {

    this.startColor = start;
    this.endColor = end;

    const cvs = document.createElement("canvas");
    cvs.width = 128;
    cvs.height = 1;
    cvs.style.display = "block";
    cvs.style.height = "20px";
    cvs.style.width = "calc(100% - 20px)";
    cvs.style.marginLeft = "10px";
    cvs.style.marginTop = "10px";
    cvs.style.marginBottom = "10px";

    this.cvs = cvs;
    this.ctx = cvs.getContext("2d");

    this.draw();

  }

  draw() {
    var gradient = this.ctx.createLinearGradient(0, 0, 128, 0);
    gradient.addColorStop(0, this.startColor);
    gradient.addColorStop(1, this.endColor);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, 128, 1);
  }

  get(): HTMLCanvasElement {
    return this.cvs;
  }

}



export default class GradientModel {

  _texs: Texture2D[];
  _grads: GradientStruct[];
  _currentSetting: number = 0;

  get settings() {
    return Settings.GRADIENTS[this._currentSetting];
  }

  get whiteNoise(): Texture2D {
    return this.scene.texlib.get("white-noise");
  }


  pane: Pane;
  opts: any;

  constructor(
    public readonly scene: Scene
  ) {

    const gl = scene.gl;
    this.scene = scene

    this._texs = [
      this.createTexture(gl),
      this.createTexture(gl)
    ];

    this._grads = [
      new GradientStruct(this.settings.cl1, this.settings.cl2),
      new GradientStruct(this.settings.cr1, this.settings.cr2)
    ];

    this.attach(0, this._grads[0].get());
    this.attach(1, this._grads[1].get());

    this.scene.texlib.add("white-noise", "white_noise.png", {
      smooth: true,
      mipmap: false,
      miplinear: false
    });

    const opts = this.opts = {
      "cl1": this._grads[0].startColor,
      "cl2": this._grads[0].endColor,
      "cr1": this._grads[1].startColor,
      "cr2": this._grads[1].endColor,
    }

    /// #if DEVELOPMENT
    const el = document.querySelector('.tweakpane-container');

    el.appendChild(this._grads[0].cvs);
    el.appendChild(this._grads[1].cvs);

    const pane = this.pane = CreatePane("Gradients", true);

    var update = () => {
      this._grads[0].startColor = opts.cl1;
      this._grads[0].endColor = opts.cl2;
      this._grads[1].startColor = opts.cr1;
      this._grads[1].endColor = opts.cr2;
      this._grads[0].draw();
      this._grads[1].draw();
      this.attach(0, this._grads[0].get());
      this.attach(1, this._grads[1].get());
    }

    let fld = pane.addFolder({ title: "Gradient Left" });
    fld.addInput(opts, "cl1", { label: "Start" }).on("change", () => update());
    fld.addInput(opts, "cl2", { label: "End" }).on("change", () => update());

    fld = pane.addFolder({ title: "Gradient Right" });
    fld.addInput(opts, "cr1", { label: "Start" }).on("change", () => update());
    fld.addInput(opts, "cr2", { label: "End" }).on("change", () => update());

    fld.addInput(this, "_currentSetting", {

      label: "Preset",

      options: {
        gradient_1: 0,
        gradient_2: 1,
        gradient_3: 2,
        gradient_4: 3,
        gradient_5: 4,
        gradient_6: 5
      },

    }).on("change", () => {

      this.applySettings();
      this.updateOpts(pane, opts);

    });

    fld.addButton({ title: "Randomize" }).on("click", () => {
      this.randomize();
      this.updateOpts(pane, opts);
    });

    pane.element.appendChild(this._grads[0].cvs);
    pane.element.appendChild(this._grads[1].cvs);

    pane.element.style.paddingBottom = "1px";
    Presetpane(pane, "gradient-settings");

    /// #endif

  }

  setCurrentSettings(idx: number) {
    this._currentSetting = idx;
    this.applySettings();
  }

  updateOpts(pane, opts) {
    opts.cl1 = this._grads[0].startColor;
    opts.cl2 = this._grads[0].endColor;
    opts.cr1 = this._grads[1].startColor;
    opts.cr2 = this._grads[1].endColor;
    pane && pane.refresh();
  }

  applySettings() {
    this._grads[0].startColor = this.settings.cl1;
    this._grads[0].endColor = this.settings.cl2;
    this._grads[1].startColor = this.settings.cr1;
    this._grads[1].endColor = this.settings.cr2;

    const bgColor = MakeFromHex(ParseCSS(this.settings.cl2));
    this.scene.gl.clearColor(bgColor[0], bgColor[1], bgColor[2], 1);
    this.scene.gl.clear(this.scene.gl.COLOR_BUFFER_BIT);

    this._grads[0].draw();
    this._grads[1].draw();

    this.attach(0, this._grads[0].get());
    this.attach(1, this._grads[1].get());
    
    this.updateOpts(this.pane, this.opts);
  }

  randomize() {
    let g1 = COLORS[Math.floor(Math.random() * COLORS.length)];
    let g2 = COLORS[Math.floor(Math.random() * COLORS.length)];
    this._grads[0].startColor = g1[0];
    this._grads[0].endColor = g1[1];
    this._grads[1].startColor = g2[0];
    this._grads[1].endColor = g2[1];
    this._grads[0].draw();
    this._grads[1].draw();
  }

  createCVS() {
    const cvs = document.createElement("canvas");
    cvs.width = 128;
    cvs.height = 1;
    document.body.appendChild(cvs);
    cvs.style.position = "absolute";
    cvs.style.top = "20px";
    cvs.style.left = "10px";
    cvs.style.height = "10px";
    cvs.style.width = "128px";
    return cvs;
  }

  createTexture(gl) {
    const tex = new Texture2D(gl, gl.RGB);
    tex.setFilter(true, false, false);
    tex.clamp();
    return tex;
  }

  getGradient(idx: number) {
    return this._texs[idx];
  }


  attach(idx: number, img: TexImageSource) {
    this._texs[idx].fromImage(img);
  }



}
