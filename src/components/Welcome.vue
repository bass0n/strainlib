<template>
  <div class="hello">
    <h1>Welcome to StrainLib</h1>
    <input type="checkbox" name="censorship">
    <label>
      Are you 21yo or above and promise to use the following content strictly for research purpose?
    </label>
    <router-link :to="{ name: 'Search', params: { effects: JSON.stringify(this.effects) } }">Continue</router-link>

  </div>
</template>

<script>
// target="_blank"
import api from '../api'
export default {
  name: 'Welcome',
  data () {
    return {
      effects: []
    }
  },
  created () {
    this.loadEffects()
  },
  updated () {
    console.log(this.effects)
  },
  methods: {
    loadEffects () {
      api.getEffectsAll().then(data => {
        this.effects = data.map(item => (item.effect))
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  width: 12rem;
  border-radius: .4rem;
  display: block;
  text-decoration: none;
  margin: .5rem auto;
  padding: 1rem .5rem;
  background: #9ACD32;
  color: white;
}
</style>
