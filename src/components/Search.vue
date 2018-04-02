<template>
  <div class="search">
    <h1>Search by type</h1>
    <select id="example-1" v-model="selected">
      <option v-for="item in effects" :key=item :id=item>
        {{ item }}
      </option>
    </select>
    <button v-on:click="search(selected)">Search</button>
    <ul>
      <li v-for="item in results" :key=item :id=item>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'Search',
  data () {
    return {
      effects: [],
      selected: '',
      races: ['Sativa', 'Indica', 'Hybrid'],
      results: []
    }
  },
  created () {
    this.effects = JSON.parse(this.$route.params.effects)
  },
  updated () {
    console.log('updated', this.results)
  },
  mounted () {
    console.log('mounted', this.results)
  },
  methods: {
    search: (selected) => {
      api.getStrainsByEffect(selected).then(data => {
        this.results = data.map(item => (item.name))
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
