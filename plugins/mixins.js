import Vue from 'vue'
import DeviceDetector from 'device-detector-js'
// const pd = require('parse-domain')
// const hostConfig = require('@/config/host')
const dd = new DeviceDetector()

const loadCSS = function (path) {
  const ele = document.createElement('link')
  ele.rel = 'stylesheet'
  ele.href = path
  document.body.appendChild(ele)
}
const unloadCSS = function (path) {
  const oldEle = document.querySelector(`link[href="${path}"]`)
  if (oldEle) {
    oldEle.remove()
  }
}
const loadScript = function (path) {
  const ele = document.createElement('script')
  ele.src = path
  document.body.appendChild(ele)
}
const unloadScript = function (path) {
  // console.log('unloadScript')
  const oldEle = document.querySelector(`script[src="${path}"]`)
  if (oldEle) {
    oldEle.remove()
  }
}

const host = function () {
  return window.location.hostname
}

const device = function () {
  const _deviceMap = {
    Android: 'android',
    iOS: 'ios'
  }
  return _deviceMap[dd.parse(navigator.userAgent).os.name] || 'web'
}

Vue.mixin({
  computed: {
    host,
    device
  },
  methods: {
    loadCSS,
    unloadCSS,
    loadScript,
    unloadScript
  }
})
