import { AD } from '~/lib/api/ad'
import { USER } from '~/lib/api/user'
import { SITE } from '~/lib/api/site'

const apiModules = {
  AD,
  USER,
  SITE
}
export default ({ app }, inject) => {
  function makeApis (apiObj) {
    return Object.keys(apiObj).reduce((obj, key) => {
      obj[key] = data => app.$fetch(apiObj[key], data)
      return obj
    }, {})
  }

  const apis = Object.keys(apiModules)
    .reduce((obj, moduleName) => {
      const _module = apiModules[moduleName]
      if (_module.namespaced) {
        obj[moduleName] = makeApis(_module.apis)
      } else {
        obj = Object.assign({}, obj, makeApis(_module.apis))
      }
      return obj
    }, {})
  inject('api', apis)
}
