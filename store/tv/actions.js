import fetch from '@/config/fetch'

export default {
  async getList ({ commit, dispatch }, payload) {
    const { data } = await fetch.get('users', { params: { time: '999' } })
    commit('gotList', data)
  },
  async getItem ({ commit, dispatch }, id) {
    const { data } = await fetch.get(`users/${id}`, { params: { time: '999' } })
    commit('gotItem', data)
  }
}
