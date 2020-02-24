const apiModules = {
  ...require('~/lib/api/user')
}

export default ({ app }, inject) => {
  const api = Object.keys(apiModules).reduce((obj, key) => {
    obj[key] = data => app.$fetch(apiModules[key], data)
    return obj
  }, {})
  inject('api', api)
}
