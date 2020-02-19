export default {
  async register ({ commit, dispatch }, _d) {
    const data = {
      account: _d.account,
      password: _d.pw,
      password_confirmation: _d.pw_c,
      domain: _d.domain
    }
    await this.$api.register(data)
  }

}
