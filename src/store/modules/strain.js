import api from '../../api'

// initial state
// shape: [{ id, quantity }]
const state = {
  description: '',
  strainEffects: [],
  flavors: [],
  strain: {}
}

// getters
const getters = {
  getDescription: state => state.description,
  getStrainEffects: state => state.strainEffects,
  getFlavors: state => state.flavors,
  getStrain: state => state.strain
}

// actions
const actions = {
  loadStrain ({ commit, state }, id) {
    api.getStrain(id).then(results => {
      commit('setStrain', results)
    })
  },
  loadDescription ({ commit, state }, id) {
    api.getStrainDescription(id).then(description => {
      commit('setDescription', description)
    })
  },
  loadStrainEffects ({ commit, state }, id) {
    api.getStrainEffects(id).then(effects => {
      commit('setStrainEffects', effects)
    })
  },
  loadFlavors ({ commit, state }, id) {
    api.getStrainFlavors(id).then(flavors => {
      commit('setFlavors', flavors)
    })
  }
}

// mutations
const mutations = {
  setStrain (state, results) {
    state.strain = results
  },
  setDescription (state, description) {
    state.description = description
  },
  setStrainEffects (state, effects) {
    state.strainEffects = effects
  },
  setFlavors (state, flavors) {
    state.flavors = flavors
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
