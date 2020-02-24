export default ({ app, store, $axios, redirect }, inject) => {
  const baseURL = `http://${process.env.HOST}:${process.env.PORT}`
  const nodeInstance = $axios.create({
    baseURL
  })
  inject('nFetch', nodeInstance)
}
