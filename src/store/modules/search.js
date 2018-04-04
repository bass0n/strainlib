import api from '../../api'

// initial state
// shape: [{ id, quantity }]
const state = {
  results: [],
  effects: [],
  races: ['Sativa', 'Indica', 'Hybrid']
}

// getters
const getters = {
  getResults: state => state.results,
  getEffectsAll: state => state.effects
}

// actions
const actions = {
  searchByEffect ({ commit, state }, effect) {
    api.getStrainsByEffect(effect).then(strains => {
      commit('setSearchResults', strains)
    })
  },
  loadEffects ({ commit }) {
    api.getEffectsAll().then(data => {
      commit('setEffectsAll', data.map(item => (item.effect)))
    })
  }
}

// mutations
const mutations = {
  setSearchResults (state, strains) {
    state.results = strains
  },
  setSearchQuery (state, effect) {
    state.effect = effect
  },
  setEffectsAll (state, effects) {
    state.effects = effects
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
