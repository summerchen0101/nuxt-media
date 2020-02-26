export default {
  async getInfo ({ commit }) {
    const res = await this.$api.SITE.getInfo()
    if (res.code === '0') {
      commit('gotInfo', res.data)
    }
  }
}
