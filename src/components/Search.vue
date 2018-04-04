<template>
  <div class="search">
    <h1>Search by type</h1>
    <select id="example-1" v-model="selected">
      <option v-for="item in effectsAll" :key=item :id=item>
        {{ item }}
      </option>
    </select>
    <button v-on:click="searchByEffect(selected)">Search</button>
    <ul>
      <li v-for="item in results" :key=item.id :id=item.id>
        <router-link :to="{ name: 'Strain', params: { id: item.id } }">{{ item.name }}</router-link>
      </li>
    </ul>
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
p {
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
