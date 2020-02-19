// import user from '~/lib/user'

// export default ({ app, $http }, inject) => {
//   const api = {
//     register: data => $http(user.register, data),
//     login: data => $http(user.login, data)
//   }
//   inject('api', api)
// }

import user from '~/lib/user'

export default ({ app }, inject) => {
  const api = Object.keys(user).reduce((obj, key) => {
    obj[key] = data => app.$http(user[key], data)
    return obj
  }, {})
  inject('api', api)
}
