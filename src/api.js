import axios from 'axios'

const apiLink = 'https://strainapi.evanbusse.com/yrPzzCY/'

export default {

  getEffectsAll () {
    return axios.get(apiLink + 'searchdata/effects').then(res => res.data)
  },

  getStrainsByName (name) {
    return axios.get(apiLink + 'strains/search/name/' + name).then(res => res.data)
  },
  getStrainsByRace (race) {
    return axios.get(apiLink + 'strains/search/race/' + race).then(res => res.data)
  },
  getStrainsByEffect (effect) {
    return axios.get(apiLink + 'strains/search/effect/' + effect).then(res => res.data)
  },
  getStrainDescription (id) {
    return axios.get(apiLink + 'strains/data/desc/' + id).then(res => res.data)
  },
  getStrainEffects (id) {
    return axios.get(apiLink + 'strains/data/effects/' + id).then(res => res.data)
  },
  getStrainFlavors (id) {
    return axios.get(apiLink + 'strains/data/flavors/' + id).then(res => res.data)
  }
}
