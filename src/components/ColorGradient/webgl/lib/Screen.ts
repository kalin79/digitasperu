import Signal from "./signal";

class Screen {

  width: number = window.innerWidth;
  height: number = window.innerHeight;
  dpi: number = window.devicePixelRatio;
  resize: Signal;
  el: HTMLElement;
  bounds: DOMRect;

  bind(el: HTMLElement = null) {
    if (el) {
      this.el = el;
    } else {
      this.bounds = new DOMRect(0, 0, window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", this.onResize);
    this.resize = new Signal();
    this.onResize();
  }

  unbind() {
    window.removeEventListener("resize", this.onResize);
    this.resize.release();
  }

  onResize = () => {
    if (this.el) {
      this.bounds = this.el.getBoundingClientRect();
      this.width = this.bounds.width;
      this.height = this.bounds.height;
    } else {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.bounds = new DOMRect(0, 0, window.innerWidth, window.innerHeight);
    }
    this.resize.emit();
  }

}

export default new Screen();