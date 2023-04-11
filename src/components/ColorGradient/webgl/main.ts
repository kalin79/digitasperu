

import GLView from './GLView'
import Scene from './Scene'
import Config from './Config'

// import Quality  from 'lib/quality'
// import { CATCH_ASYNC } from '@/core/Async'

// import {gui} from './dev'
// console.log( gui );


/**
  @opts :

    REQUIRED:
    'canvas'    {HTMLCanvasElement}   :  context free canvas element in which scene will be rendered
    'assetsUrl' {string}              :  3D assets base url without trailing slash
    'model'     {Model}               :  Model instance shared with the page

    OPTIONAL:
    'ilayer'    {HTMLElement}         :  dom elemnt on which touch/mouse event are listened, default to canvas element
    'quality'   {string}              :  enum 'auto', 'hi' or 'low'

**/
export default class App {

  glview: GLView
  scene: Scene
  loaded: boolean;

  constructor({
    assetsUrl,
    canvas,
    ilayer = canvas,
    quality
  }) {

    Config.setBaseDir(assetsUrl);

    this.loaded = false;

    this.glview = new GLView(canvas);
    this.scene = new Scene();

    // Quality.setMode( quality, this.glview.gl );
    // this.glview.frameinfo = document.querySelector(".frame-info")
    this.glview.scene = this.scene;
    this.scene.init(this.glview);

  }

  /**
    start loading assets
    @return a (when.js) promise
  **/
  async load(autoplay = true) {
    await this.scene.load();
    autoplay && this.glview.play();
    this.loaded = true;
  }




}
