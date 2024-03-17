export default {
  init: function() {
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  },
  addListener: function() {

    window.addEventListener('resize', () => this.init());
  }
}
