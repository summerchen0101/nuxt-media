const serverStore = require('data-store')({ path: process.cwd() + '/server-store.json' })

export default ({ app, store, $axios }, inject) => {
  inject('ss', serverStore)
}
