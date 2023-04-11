import Texture2D from "nanogl/texture-2d";
import { GLContext } from "nanogl/types";
import Config from "./Config";


interface TextureOptions {
  format?: GLenum;
  repeat?: boolean;
  smooth?: boolean;
  mipmap?: boolean;
  miplinear?: boolean;
}

const DEFAULT_OPTIONS: TextureOptions = {
  format: WebGLRenderingContext.RGB,
  repeat: true,
  smooth: true,
  mipmap: true,
  miplinear: true,
}

class TexDef {

  tex: Texture2D;
  src: string;
  img: HTMLImageElement;

  constructor(gl: GLContext, src: string, opts: TextureOptions = null) {

    let options = DEFAULT_OPTIONS;

    if (opts)
      Object.assign(options, opts);

    this.src = src;
    this.img = new Image();
    this.tex = new Texture2D(gl, options.format);

    this.tex.setFilter(options.smooth, options.mipmap, options.miplinear);
    !options.repeat ? this.tex.clamp() : this.tex.repeat();

  }

  load(): Promise<void> {

    return new Promise((resolve) => {

      this.img.onload = () => {
        this.tex.fromImage(this.img);
        resolve();
      }

      this.img.src = this.src;

    });

  }

  get() {
    return this.tex;
  }

}

export default class TextureLibrary {

  gl: GLContext;

  _lib: TexDef[];
  _libMap: Map<string, TexDef>

  constructor(scene) {

    this.gl = scene.gl;

    this._lib = [];
    this._libMap = new Map<string, TexDef>();

  }

  add(name: string, src: string, opts: TextureOptions = null) {

    const tdef = new TexDef(
      this.gl,
      Config.asset_url(src),
      opts
    );

    this._lib.push(tdef);
    this._libMap.set(name, tdef);

  }

  get(name: string): Texture2D {
    return this._libMap.get(name).get();
  }

  load(): Promise<any> {

    const _list = this._lib.map((tdef) => tdef.load());
    return Promise.all(_list);

  }

}