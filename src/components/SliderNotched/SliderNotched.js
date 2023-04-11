import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import './SliderNotched.css'

const SliderNotched = () => ({
  // data
  x: 0,
  xMin: 0,
  xMax: 0,
  downX: 0,
  startX: 0,
  slides: [],
  currentSlideIdx: 0,
  hasMoved: false,
  freeze: false,
  $listeners: {
    '@resize.window.debounce': 'onResize',
    '@mousedown.prevent': 'onDown',
    '@touchstart': 'onDown',
    '@mousemove': 'onMove',
    '@touchmove': 'onMove',
    '@mouseup': 'onUp',
    '@touchend': 'onUp',
    '@touchcancel': 'onUp',
  },

  get progress() {
    return this.x / this.xMin
  },
  get isEnabled() {
    return this.xMin < this.xMax
  },
  get threshold () {
    return this.$isTouch ? 25 : 50
  },

  init() {

    this.translate = gsap.quickSetter(this.$refs.track, 'x', 'px')

    this.$el.addEventListener("goto", this.onGoTo.bind(this))
    this.$el.addEventListener("gotonext", this.onGoToNext.bind(this));

    this.$watch('x', this.translate)
    this.slideEls = this.$refs.track.querySelectorAll('.SliderNotched__Slide');
    for (let i = 0; i < this.slideEls.length; i++) {
      this.slideEls[i].addEventListener('click', this.onSlideClick.bind(this));
    }

    this.$nextTick(() => {
      this.computeBounds()
    })
  },

  onResize() {
    this.computeBounds()
  },

  onSlideClick(evt) {
    let idx = this.slides.findIndex(v => v.el === evt.currentTarget);
    this.goTo(idx);
  },

  onDown(evt) {
    if (this.freeze)
      return;
    this.$el.dispatchEvent(
      new CustomEvent("dragstart")
    );
    this.hasMoved = false
    this.pointerActive = true
    this.downX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    this.startX = this.x;
  },

  onMove(evt) {
    if (!this.pointerActive || this.freeze)
      return;
    this.setX(this.startX + ((evt.touches ? evt.touches[0].clientX : evt.clientX) - this.downX));
    this.pointerActive && (this.hasMoved = true)
  },

  onUp() {
    if (this.freeze)
      return;
    this.$el.dispatchEvent(
      new CustomEvent("dragend")
    );
    this.pointerActive = false
    let dst = this.startX - this.x;
    let dir = Math.sign(dst);
    this.hasMoved = false;
    dir *= (Math.abs(dst) > this.threshold) ? 1 : 0;

    this.goTo(Math.max(0, Math.min(this.slides.length - 1, this.currentSlideIdx + dir)));
    // if(this.hasMoved){
    //   if
    // }
    // if (this.hasMoved)
    //   this.goTo(this.getNearestIdx());
  },

  getNearestIdx() {
    let dist = Number.MAX_VALUE;
    let idx = 0;
    for (let i = 0; i < this.slides.length; i++) {
      let tgt = Math.abs(-this.slides[i].offset - this.x);
      if (tgt < dist) {
        dist = tgt;
        idx = i;
      }
    }
    return idx;
  },

  onGoTo({ detail }) {
    this.goTo(parseInt(detail.index));
  },

  onGoToNext() {
    let tgt = this.currentSlideIdx + 1;
    if (tgt >= this.slides.length)
      tgt = 0;
    this.goTo(tgt);
  },

  goTo(idx) {
    this.freeze = true;
    let tgt = -this.slides[idx].offset;
    let o = {
      translate: this.x
    }
    let duration = Math.min(0.8, Math.max(0.2, Math.abs(this.x - tgt) / 1000));

    gsap.to(o, {
      translate: -this.slides[idx].offset,
      duration: duration,
      ease: "power2.out",
      onUpdate: (e) => {
        this.setX(o.translate);
      },
      onComplete: () => {
        this.freeze = false;
      },
    })

    this.$el.dispatchEvent(
      new CustomEvent("slidechange", {
        detail: this.slides[idx]
      })
    );

    this.currentSlideIdx = idx;

  },

  computeBounds() {

    // compute total width
    let offsetLeft = 0;
    const trackLeft = this.$refs.track.getBoundingClientRect().left
    Array.from(this.slideEls, (slide) => {
      offsetLeft = slide.getBoundingClientRect().left - trackLeft;
      this.slides.push({
        el: slide,
        offset: offsetLeft
      });
    })

    this.xMin = -offsetLeft;
    this.xMax = 0

    this.xMin = Math.min(this.xMax, this.xMin)

  },

  setX(x) {
    this.x = Math.max(this.xMin, Math.min(x, this.xMax));
  },

})

Alpine.data('SliderNotched', SliderNotched)
