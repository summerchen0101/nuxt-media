export default {
  async login ({ commit, dispatch }, _d) {
    const data = {
      username: _d.account,
      password: _d.pw,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      device: _d.device,
      grant_type: 'password'
    }
    const res = await this.$api.login(data)
    if (res.code === '0') {
      $.fancybox.close()
      this.$router.push({ name: 'member-profile' })
      commit('switchLoginStatus', true)
      commit('gotToken', res.data.access_token)
    }
  },
  async logout ({ commit, dispatch }) {
    const res = await this.$api.logout()
    if (res.code === '0') {
      this.$router.push({ name: 'index' })
      this.$router.app.$alert('登出成功', { type: 'success' })
      commit('switchLoginStatus', false)
      commit('clearToken')
    }
  },
  async register ({ commit, dispatch }, _d) {
    const data = {
      account: _d.account,
      password: _d.pw,
      password_confirmation: _d.pw_c,
      domain: _d.domain
    }
    const res = await this.$api.register(data)
    if (res.code === '0') {
      $.fancybox.close()
      this.$router.push({ name: 'index' })
      this.$router.app.$alert('注册成功请重新登入', { type: 'success' })
    }
  }

}
