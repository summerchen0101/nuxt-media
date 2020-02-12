import Vue from 'vue'

const loadScript = function (src) {
  const scr = document.createElement('script')
  scr.src = src
  document.body.appendChild(scr)
}

Vue.prototype.$mixin = {
  loadScript
}
