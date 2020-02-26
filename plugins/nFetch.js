export default ({ app, store, $axios, redirect, isDev }, inject) => {
  const baseURL = isDev
    ? `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`
    : `${process.env.PROTOCOL}://${process.env.NODE_API_BASE_URL}`
  const nodeInstance = $axios.create({
    baseURL
  })
  inject('nFetch', nodeInstance)
}
