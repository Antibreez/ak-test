import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default class CatAnimation {
  constructor(items, path) {
    this.items = items;
    this.path = path;
    this.tln = null;
    this.innerTln = [];
    this.scrollTln = null;
    this.dur = 1;
  }

  init() {
    this.tln = gsap.timeline();
    this.items.forEach((obj, i) => {
      const tl = gsap.timeline({ repeat: -1, delay: i * (this.dur / this.items.length) });
      tl.to(obj, {
        duration: this.dur,
        motionPath: {
          path: this.path,
          align: this.path,
          alignOrigin: [0.5, 0.5]
        },
        ease: "none"
      });
      tl.to(
        obj,
        { scale: 0.1, opacity: 0.1, zIndex: 1, duration: this.dur / 2, repeat: 1, yoyo: true, ease: "sine.inOut" },
        0
      );
      this.tln.add(tl, 0);

      this.innerTln.push(tl);
    });

    this.tln.time(this.dur);

    ScrollTrigger.create({
      trigger: ".cat-screen",
      start: "top 95%",
      end: "bottom 5%",
      onUpdate: (self) => {
        this.scrollTln && this.scrollTln.kill();
        this.scrollTln = gsap
          .timeline()
          .to(this.tln, { timeScale: 0.1 * self.direction, duration: 0.1 })
          .to(this.tln, { timeScale: 0.02, duration: 1 }, "+=0");
      }
    });
  }

  killAllScrollTriggers() {
    ScrollTrigger.killAll();
  }

  restart() {
    this.innerTln.forEach(tl => tl.seek(0).kill())
    this.innerTln = [];
    this.tln && this.tln.seek(0).kill();
    this.tln = null;
    this.init();
  }
}
