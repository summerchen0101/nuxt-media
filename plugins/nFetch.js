export default ({ app, store, $axios, redirect, isDev }, inject) => {
  const baseURL = isDev
    ? `http://${process.env.HOST}:${process.env.PORT}`
    : `http://${process.env.NODE_API_BASE_URL}`
  const nodeInstance = $axios.create({
    baseURL
  })
  inject('nFetch', nodeInstance)
}
