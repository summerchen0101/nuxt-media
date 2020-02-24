import { initProfile } from './state'
export default {
  gotToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = ''
  },
  clearUser (state) {
    state.profile = Object.assign({}, initProfile)
  },
  switchLoginStatus (state, boolean) {
    state.login = boolean
  },
  gotProfile (state, _d) {
    state.profile = Object.assign({}, state.profile, {
      account: _d.account,
      phone: _d.phone,
      email: _d.mail
    })
  }
}
