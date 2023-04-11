
import now from "./vendors/right-now";
import { GLContext } from 'nanogl/types';
import Screen from './lib/Screen';

const NOOP = () => { };


class GLView {

  pixelRatio: number;
  gl: GLContext;
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  canvasWidth: number;
  canvasHeight: number;
  previousTime: number;
  _rafId: number;
  _playing: boolean;
  scene: any;
  frameinfo: HTMLElement;

  constructor(cvs: HTMLCanvasElement, {
    depth = true,
    alpha = false,
    pixelRatio = -1
  } = {}) {


    if (pixelRatio < 0) {
      this.pixelRatio = Math.min(1.0, window.devicePixelRatio);
    } else {
      this.pixelRatio = pixelRatio;
    }
    Screen.dpi = this.pixelRatio;

    const opts: WebGLContextAttributes =
    {

      depth: depth,
      antialias: this.pixelRatio < 2,
      stencil: true,
      alpha: alpha,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance"

    }

    // Workaround for Safari 12, which otherwise crashes with powerPreference set
    // to high-performance: https://github.com/TimvanScherpenzeel/detect-gpu/issues/5
    const isSafari12 = /Version\/12.+Safari/.test(window.navigator.userAgent);
    if (isSafari12) {
      delete opts.powerPreference;
    }

    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = <GLContext>(
      cvs.getContext('webgl2', opts) ||
      cvs.getContext('webgl', opts) ||
      cvs.getContext('experimental-webgl', opts) ||
      cvs.getContext('webgl'));

    this.gl.clearColor(1, 1, 1, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.canvas = cvs;

    this.width = 0;
    this.height = 0;

    this.canvasWidth = 0;
    this.canvasHeight = 0;

    this.previousTime = now();
    this._rafId = 0;
    this._playing = false;

    this.scene = null;

  }




  play() {
    // window.addEventListener('resize', this.onWindowResize)
    if (!this._playing) {
      this.onWindowResize()
      this._playing = true;
      this.frame();
      this.previousTime = now();
    }
  }


  stop() {
    // window.removeEventListener('resize', this.onWindowResize)
    this._playing = false;
    this._rafId = 0;
  }

  onWindowResize = () => {
    // this._checkSize()
  }


  updateSize() {
    const pr = this.pixelRatio;

    this.canvas.width = Math.ceil(pr * this.canvasWidth / 4.0) * 4.0;
    this.canvas.height = Math.ceil(pr * this.canvasHeight / 4.0) * 4.0;
    this.width = this.gl.drawingBufferWidth;
    this.height = this.gl.drawingBufferHeight;
    this.resize();
  }



  _checkSize() {

    // const w = window.innerWidth;
    // const h = window.innerHeight;
    const w = Screen.width;
    const h = Screen.height;

    // const w = window.innerWidth;
    // const h = window.innerHeight;
    // const w = this.canvas.clientWidth;
    // const h = this.canvas.clientHeight;

    //console.log( w, h )

    if (isNaN(w) || isNaN(h) || w === 0 || h === 0) {
      return false;
    }
    if (w !== this.canvasWidth || h !== this.canvasHeight) {

      this.canvasWidth = w;
      this.canvasHeight = h;
      this.updateSize();
    }
    return true;
  }


  _requestFrame() {
    // window.cancelAnimationFrame(this._rafId);
    this._rafId = window.requestAnimationFrame(this.frame);
  }


  frame = () => {
    if (!this._playing) {
      return;
    }
    const time = now();
    let dt = (time - this.previousTime) / 1000;
    this.previousTime = time;
    if (dt > 1 / 5 || dt < 1 / 180) {
      dt = 1 / 60;
    }

    // if(this.frameinfo){
    //   this.frameinfo.innerHTML = (dt * 1000).toString();
    // }

    if (this._checkSize()) {
      this.render(dt);
    }

    if(this.frameinfo){
      this.frameinfo.innerHTML = Math.trunc((1 / dt)).toString();
    }

    
    if (this._playing) {
      this._requestFrame();
    }
  }


  render(dt) {
    if (this.scene)
      this.scene.render(dt);
  }


  resize() {

    if (this.scene)
      this.scene.handleResize();
  }


}



export default GLView;