export default {
  gotToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = ''
  },
  switchLoginStatus (state, boolean) {
    state.login = boolean
  }
}
