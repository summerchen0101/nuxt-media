import Vue from 'vue'
import DeviceDetector from 'device-detector-js'
// const pd = require('parse-domain')
const hostConfig = require('@/config/host')
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
  return process.env.DEV_ENV === 'test' ? hostConfig[process.env.DEV_ENV] : window.location.host
}

const device = function () {
  const _deviceMap = {
    Android: 'android',
    iOS: 'ios'
  }
  return _deviceMap[dd.parse(navigator.userAgent).os.name] || 'web'
}

const isMobile = function () {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem)
  })
}

Vue.mixin({
  computed: {
    host,
    isMobile,
    device
  },
  methods: {
    loadCSS,
    unloadCSS,
    loadScript,
    unloadScript
  }
})
