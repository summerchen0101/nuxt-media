import errCode from '@/config/errCode'

export default ({ app, store, $axios, redirect }, inject) => {
  // axios回傳值調整
  $axios.onResponse((res) => {
    if (res.status === 200) {
      const resCode = res.data.code
      const resMsg = res.data.data && res.data.data.msg
      if (resCode !== '0' && resMsg) {
        if (resMsg === 'Unauthenticated.') {
          app.router.push({ name: 'index' })
          store.dispatch('user/clear')
        } else if (typeof resMsg === 'string') {
          app.router.app.$alert(errCode[resMsg] || resMsg)
        } else if (Array.isArray(resMsg)) {
          const msgs = resMsg.reduce((str, msg) => {
            str += (errCode[resMsg] || resMsg) + '\n'
            return str
          }, '')
          app.router.app.$alert(msgs)
        }
      }
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
    return $axios({
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
