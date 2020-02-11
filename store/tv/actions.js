import axios from 'axios'

export default {
  async getList ({ commit, dispatch }, payload) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users', { params: { time: '999' } })
    commit('gotList', data)
  },
  async getItem ({ commit, dispatch }, id) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, { params: { time: '999' } })
    commit('gotItem', data)
  }
}
