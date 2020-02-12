import Vue from 'vue'

const loadScript = function (path) {
  const ele = document.createElement('script')
  ele.src = path
  document.body.appendChild(ele)
}
const unloadScript = function (path) {
  // console.log('unloadScript')
  const oldEle = document.querySelector(`script[src$="${path}"]`)
  oldEle.remove()
}

Vue.prototype.$mixin = {
  loadScript,
  unloadScript
}
