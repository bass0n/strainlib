<template>
  <div class="search">
    <h1>Search by race</h1>
    <div class="nav">
      <router-link :to="{ name: 'Search' }">Want to search by effects?</router-link>
      <router-link :to="{ name: 'SearchName' }">Want to search by name?</router-link>
    </div>
    <span>Select a race </span>
    <select id="example-1" v-model="selected">
      <option v-for="item in races" :key=item :id=item>
        {{ item }}
      </option>
    </select>
    <button v-bind:disabled="!selected" v-on:click="searchByRace(selected)">Search</button>
    <p v-if="results.length===0">No results</p>
    <div class="results">
      <router-link v-for="item in results" :key=item.id :id=item.id :to="{ name: 'Strain', params: { id: item.id, name: item.name } }">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchRace',
  data () {
    return {
      selected: ''
    }
  },
  mounted () {
    // console.log(this.$store.effects)
  },
  computed: mapGetters({
    races: 'getRaces',
    results: 'getResults'
  }),
  updated () {
    console.log(this.$store)
  },
  beforeDestroy () {
    this.$store.dispatch('eraseResults')
  },
  methods: {
    searchByRace (race) {
      this.$store.dispatch('searchByRace', race)
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
  text-decoration: none;
  background: #9ACD32;
  color: #fff;
  padding: .5rem 1rem;
  margin: 1rem 4rem;
  border-radius: .2rem;
}
</style>
