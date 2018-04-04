<template>
  <div class="search">
    <h1>Search by type</h1>
    <div class="nav">
      <router-link :to="{ name: 'SearchRace' }">Want to search by race?</router-link>
      <router-link :to="{ name: 'SearchName' }">Want to search by name?</router-link>
    </div>
    <span>Select an effect </span>
    <select id="example-1" v-model="selected">
      <option v-for="item in effectsAll" :key=item :id=item>
        {{ item }}
      </option>
    </select>
    <button v-bind:disabled="!selected" v-on:click="searchByEffect(selected)">Search</button>
    <p v-if="results.length===0">No results</p>
    <div class="results">
      <router-link v-for="item in results" :key=item.id :id=item.id :to="{ name: 'Strain', params: { id: item.id, name: item.name } }">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      selected: ''
    }
  },
  created () {
    this.$store.dispatch('loadEffects')
  },
  mounted () {
    // console.log(this.$store.effects)
  },
  computed: mapGetters({
    effectsAll: 'getEffectsAll',
    results: 'getResults'
  }),
  updated () {
    console.log(this.$store)
  },
  beforeDestroy () {
    this.$store.dispatch('eraseResults')
  },
  methods: {
    searchByEffect (effect) {
      this.$store.dispatch('searchByEffect', effect)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
}
a {
  background: #eee;
  padding: .5rem 1rem;
  margin: 1rem 2rem;
  border-radius: .2rem;
  cursor: pointer;
  text-decoration: none;
  color: #222;
}
a:hover, a:active, a:focus {
  background: #9ACD32;
  color: #fff;
  font-weight: 600;
}
.search {
  max-width: 900px;
  display: block;
  margin: 0 auto;
}
@media (max-width: 600px) {
  .nav a {
    margin: .5rem 1rem !important;
  }
  .results {
    grid-template-columns: 1fr !important;
  }
}
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.nav a {
  background: #9ACD32;
  color: #fff;
  padding: .5rem 1rem;
  margin: 1rem 4rem;
  border-radius: .2rem;
}
</style>
