export default {
  async getList ({ commit, dispatch }, payload) {
    const list = await this.$axios.$get('users', { params: { time: payload.time } })
    commit('gotList', list)
  },
  async getItem ({ commit, dispatch }, id) {
    const item = await this.$axios.$get(`users/${id}`)
    commit('gotItem', item)
  }
}
