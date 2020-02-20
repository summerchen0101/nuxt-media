import storage from 'store2'

export default ({ app, store, $axios }, inject) => {
  inject('storage', storage)
}
