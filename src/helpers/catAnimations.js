import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function getIntervals(num, delta) {
  const diff = 0.25 / num;

  const a1 = Array.from({length: num}, (v, k) => +(diff + delta * (num - k - 1)).toFixed(5));
  const a2 = Array.from({length: num}, (v, k) => +(diff - delta * (k)).toFixed(5));
  const a3 = [...a2].reverse();
  const a4 = [...a1].reverse();

  return [
    ...a3,
    ...a4,
    ...a1,
    ...a2
  ];
}

export default class CatAnimation {
  constructor(items, path) {
    this.items = items;
    this.path = path;
    this.tln = null;
    this.innerTln = [];
    this.scrollTln = null;
    this.dur = 1;
    this.scT = null;
  }

  init() {
    this.tln = gsap.timeline();
    this.items.forEach((obj, i) => {
      //if (i > 0) return;

      const tl = gsap.timeline({ repeat: -1, delay: i * (this.dur / this.items.length) });

      const intervals = getIntervals(10, 0.002);

      for (let i = 1; i <= 2; i++) {
        intervals.splice(intervals.length - 1, 0, intervals.shift());
      }

      console.log(intervals.reduce((prev, next) => prev + next, 0));

      console.log(intervals);

      intervals.forEach((int, j) => {
        tl.to(obj, {
          duration: int,
          motionPath: {
            path: this.path,
            align: this.path,
            alignOrigin: [0.5, 0.5],
            start: j / intervals.length,
            end: j / intervals.length + 1 / intervals.length
          },
          ease: "none",
          // filter: j > 35 ? 'grayscale(1)' : 'grayscale(0)'
        });
      })

      tl.to(
        obj,
        { scale: 0.1, opacity: 0.1, zIndex: 1, duration: this.dur / 2, repeat: 1, yoyo: true, ease: "none" },
        0
      );
      this.tln.add(tl, 0);

      this.innerTln.push(tl);
    });

    this.tln.time(this.dur);

    this.scT = ScrollTrigger.create({
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

  killScrollTrigger() {
    this.scT.kill();
  }

  restart() {
    this.innerTln.forEach(tl => tl.seek(0).kill())
    this.innerTln = [];
    this.tln && this.tln.seek(0).kill();
    this.tln = null;
    this.init();
  }
}
