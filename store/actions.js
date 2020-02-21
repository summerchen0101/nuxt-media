export default {
  nuxtServerInit ({ commit }, { req }) {
    console.log('session', req.session)
    if (req.session && req.session.auth) {
      commit('user/switchLoginStatus', true)
      commit('user/gotToken', req.session.auth)
    }
  }
}
