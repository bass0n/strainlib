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
  async getStrain (id) {
    const firstRequest = await axios.get(apiLink + 'strains/data/desc/' + id)
    const secondRequest = await axios.get(apiLink + 'strains/data/effects/' + id)
    const thirdRequest = await axios.get(apiLink + 'strains/data/flavors/' + id)
    let result = {
      description: firstRequest.data.desc,
      positive: secondRequest.data.positive,
      negative: secondRequest.data.negative,
      medical: secondRequest.data.medical,
      flavors: thirdRequest.data
    }
    return result
  }
}
