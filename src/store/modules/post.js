import api from '@/api'

const state = {
  recent: []
}
const getters = {
  recentPost: (state) => {
    return state.recent
  }
}
const actions = {
  getPosts (contex, limit = {}) {
    api.getPost(limit).then(r => {
      contex.commit('updatePost', r)
    })
  }
}
const mutations = {
  updatePost (state, posts) {
    state.recent = posts
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}