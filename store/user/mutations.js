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
      nick: _d.display_name,
      phone: _d.phone,
      phone_approve: _d.phone_approve,
      mail: _d.mail,
      mail_approve: _d.mail_approve
    })
  }
}
