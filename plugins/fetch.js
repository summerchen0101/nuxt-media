import errCode from '@/config/errCode'

export default ({ app, store, $axios }, inject) => {
  const _http = function ({ method, url }, data, config) {
    const _url = url.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val) => data[val])
    return $axios({
      method,
      url: _url,
      data,
      ...config
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code && res.data.code.includes('00001-5')) {
            const msgs = res.data.data.msg.reduce((str, msg) => {
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
      })
      .catch((err) => {
        console.log(err)
      })
  }
  inject('http', _http)
}
