export default {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.auth) {
      commit('user/switchLoginStatus', true)
      commit('user/gotToken', req.session.auth)
    }
  }
}
