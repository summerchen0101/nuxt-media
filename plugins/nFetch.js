export default ({ app, store, $axios, redirect }, inject) => {
  if (process.client) {
    const nodeInstance = $axios.create({
      baseURL: `${location.protocol}//${location.host}`
    })
    inject('nFetch', nodeInstance)
  }
}
