import Alpine from 'alpinejs'
import Screen from "./webgl/lib/Screen";
import GLApp from "./webgl/main";
import "./ColorGradient.css";

const ColorGradient = (settings = {}) => ({

  config: 0,
  // gradient: 0,
  // noise: 0,
  autoplay: false,
  glapp: null as GLApp,
  stopped: false,

  ...settings,

  async init() {
    this.$watch('$store.app.isBackgroundVisible', (isVisible: boolean) => isVisible ? this.play() : this.stop())

    const cvs = this.$refs.glview as HTMLCanvasElement;

    // console.log(GLApp);
    Screen.bind(cvs);

    this.glapp = new GLApp({
      assetsUrl: process.env.ASSET_PATH + "assets/webgl",
      canvas: cvs,
      ilayer: cvs,
      quality: "high"
    })

    this.glapp.scene.setConfig(this.config - 1);
    // this.glapp.scene.setGradient(this.gradient);
    // this.glapp.scene.setNoise(this.noise);

    await this.glapp.load(false);
    !this.stopped && this.autoplay && this.play();
    this.$watch('$store.app.isReady', (isReady: boolean) => isReady && this.$store.app.isBackgroundVisible && this.play())

    // let paused = false;
    // document.addEventListener("click", ()=>{
    //   paused = !paused;
    //   if(paused){
    //     this.stop();
    //   } else {
    //     this.play();
    //   }
    // });

  },

  play() {
    if (this.glapp.loaded && this.glapp && !this.glapp.glview._playing){
      this.glapp.glview.play();
    }
  },

  stop() {
    this.stopped = true;
    if (this.glapp && this.glapp.glview._playing)
      this.glapp.glview.stop();
    }

});

Alpine.data('ColorGradient', ColorGradient)
