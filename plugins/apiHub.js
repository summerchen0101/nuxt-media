import { AD } from '~/lib/api/ad'
import { USER } from '~/lib/api/user'

const apiModules = {
  ...AD,
  ...USER
}

export default ({ app }, inject) => {
  const api = Object.keys(apiModules).reduce((obj, key) => {
    obj[key] = data => app.$fetch(apiModules[key], data)
    return obj
  }, {})
  inject('api', api)
}
