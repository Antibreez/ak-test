export default {
  init: function() {
    const vd = Math.atan(window.innerHeight / window.innerWidth);
    document.documentElement.style.setProperty('--vd', `${vd}rad`);
  },
  addListener: function() {
    window.addEventListener('resize', () => this.init());
  }
}
