import Vue from 'vue'
const pd = require('parse-domain')
const host = require('@/config/host')

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

Vue.mixin({
  computed: {
    host () {
      return pd(window.location.host) ? window.location.host : host[process.env.DEV_ENV]
    }
  },
  methods: {
    loadCSS,
    unloadCSS,
    loadScript,
    unloadScript
  }
})
