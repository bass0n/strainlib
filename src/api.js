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
    const description = await axios.get(apiLink + 'strains/data/desc/' + id)
    const effects = await axios.get(apiLink + 'strains/data/effects/' + id)
    const flavors = await axios.get(apiLink + 'strains/data/flavors/' + id)
    let result = {
      description: description.data.desc,
      positive: effects.data.positive,
      negative: effects.data.negative,
      medical: effects.data.medical,
      flavors: flavors.data
    }
    return result
  }
}
