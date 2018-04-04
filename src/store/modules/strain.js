import api from '../../api'

// initial state
// shape: [{ id, quantity }]
const state = {
  strain: {}
}

// getters
const getters = {
  getStrain: state => state.strain
}

// actions
const actions = {
  loadStrain ({ commit, state }, id) {
    api.getStrain(id).then(results => {
      commit('setStrain', results)
    })
  },
  eraseStrain ({ commit }) {
    commit('setStrainNone')
  }
}

// mutations
const mutations = {
  setStrain (state, results) {
    state.strain = results
  },
  setStrainNone (state, flavors) {
    state.strain = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
