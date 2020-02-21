import errMsgs from '@/config/errMsgs'
import errCodes from '@/config/errCodes'
const host = require('@/config/host')

export default ({ app, store, $axios, redirect }, inject) => {
  // axios回傳值調整
  const axiosInstance = $axios.create({
    baseURL: `http://${host.prefix}.${host[process.env.DEV_ENV]}`
  })
  axiosInstance.onResponse((res) => {
    if (res.status === 200) {
      handleErrorCode(app, store, res.data)
      return res.data
    } else if (res.status === 401) {
      redirect('/')
      store.dispatch('user/clear')
    } else {
      app.router.app.$alert(`操作失敗(${res.status})`)
    }
  }, (error) => {
    return Promise.reject(error)
  })
  const fetch = function ({ method, url }, data, config) {
    // 帶入url的變數值
    const _url = url.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val) => data[val])
    return axiosInstance({
      method,
      url: _url,
      data,
      headers: {
        Authorization: `Bearer ${store.state.user.token}`
      },
      ...config
    })
  }
  inject('fetch', fetch)
}

function handleErrorCode (app, store, data) {
  const resCode = data.code
  const resMsg = data.data && data.data.msg
  if (Array.isArray(resCode)) {
    const code = resCode[0]
    const msg = errCodes[code] || errCodes.default
    app.router.app.$alert(msg)
  } else if (resCode !== '0' && resMsg) {
    if (resMsg === 'Unauthenticated.') {
      app.router.push({ name: 'index' })
      store.dispatch('user/clear')
    } else if (typeof resMsg === 'string') {
      app.router.app.$alert(errMsgs[resMsg] || resMsg)
    } else if (Array.isArray(resMsg)) {
      const msgs = resMsg.reduce((str, msg) => {
        str += (errMsgs[resMsg] || resMsg) + '\n'
        return str
      }, '')
      app.router.app.$alert(msgs)
    }
  }
}
