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
  getEffectsAll: state => state.effects,
  getRaces: state => state.races
}

// actions
const actions = {
  searchByEffect ({ commit, state }, effect) {
    api.getStrainsByEffect(effect).then(strains => {
      commit('setSearchResults', strains)
    })
  },
  searchByRace ({ commit, state }, race) {
    api.getStrainsByRace(race).then(strains => {
      commit('setSearchResults', strains)
    })
  },
  searchByName ({ commit, state }, name) {
    api.getStrainsByName(name).then(strains => {
      commit('setSearchResults', strains)
    })
  },
  loadEffects ({ commit }) {
    api.getEffectsAll().then(data => {
      commit('setEffectsAll', data.map(item => (item.effect)))
    })
  },
  eraseResults ({ commit }) {
    commit('setResultsNone')
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
  },
  setResultsNone (state) {
    state.results = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
