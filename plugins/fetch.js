import errCodes from '@/config/errCodes'

export default ({ app, store, $axios, redirect }, inject) => {
  // axios回傳值調整
  const axiosInstance = $axios.create({
    baseURL: `${process.env.PROTOCOL}://${process.env.PHP_API_BASE_URL}`,
    validateStatus (status) {
      if (status === 401) {
        store.dispatch('user/clear')
        redirect('/')
      }
      return status < 500 // Reject only if the status code is greater than or equal to 500
    }
  })
  axiosInstance.onResponse((res) => {
    handleErrorCode(app, store, res)
    return res.data
  }, (error) => {
    console.log(error)
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

function handleErrorCode (app, store, { data, config }) {
  const resCode = data.code
  // const resMsg = data.data && data.data.msg
  const url = config.url
  if (Array.isArray(resCode)) {
    const code = resCode[0]
    // 有錯誤碼的對應路徑就以其為主
    const msg = (errCodes[code] && errCodes[code][url]) || errCodes[code] || errCodes.default
    if (code === '00001-1' && url === 'client/logout') {
      app.router.push({ name: 'index' })
      store.dispatch('user/clear')
    }
    app.router.app.$alert(msg)
  }
}
