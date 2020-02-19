import errCode from '@/config/errCode'

export default ({ app, store, $axios }, inject) => {
  // axios回傳值調整
  $axios.onResponse((res) => {
    if (res.status === 200) {
      if (res.data.code !== '0' && res.data.data && res.data.data.msg) {
        let msgs = res.data.data.msg
        if (typeof msgs === 'string') { msgs = [msgs] }
        msgs = msgs.reduce((str, msg) => {
          str += (errCode[msg] || msg) + '\n'
          return str
        }, '')
        app.router.app.$alert(msgs)
      }
    } else if (res.status === 401) {
      app.router.push({ name: 'index' })
    } else {
      app.router.app.$alert(`操作失敗(${res.status})`)
    }
    return res.data
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
      ...config
    })
  }
  inject('fetch', fetch)
}
