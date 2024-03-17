import { debounce } from "./utils";

export default {
  init: function() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  addListener: function() {
    window.addEventListener('resize', debounce(() => this.init()));
  }
}
