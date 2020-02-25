export default {
  async getAds ({ commit }) {
    const res = await this.$api.getAds()
    if (res.code === '0') {
      commit('gotAds', res.data)
    }
  }
}
