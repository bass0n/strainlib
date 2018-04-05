<template>
  <div class="strain">
    <div class="nav">
      <router-link :to="{ name: 'Search' }">Search by effects</router-link>
      <router-link :to="{ name: 'SearchRace' }">Search by race</router-link>
      <router-link :to="{ name: 'SearchName' }">Search by name</router-link>
    </div>
    <h2>{{name}}</h2>
    <h3>{{strain.description}}</h3>
    <h3 v-if="!strain.description">Hmm, the description for this strain seems to be missing</h3>
    <div class="table">
      <div class="column">
        <p>Medical effects:</p>
        <ul>
          <li v-for="item in strain.medical" :key=item :id=item>{{item}}</li>
          <li v-if="strain.medical.length===0">None</li>
        </ul>
      </div>
      <div class="column">
        <p>Positive effects:</p>
        <ul>
          <li v-for="item in strain.positive" :key=item :id=item>{{item}}</li>
          <li v-if="strain.positive.length===0">None</li>
        </ul>
      </div>
      <div class="column">
        <p>Negative effects:</p>
        <ul>
          <li v-for="item in strain.negative" :key=item :id=item>{{item}}</li>
          <li v-if="strain.negative.length===0">None</li>
        </ul>
      </div>
      <div class="column">
        <p>Flavors:</p>
        <ul>
          <li v-for="item in strain.flavors" :key=item :id=item>{{item}}</li>
          <li v-if="strain.flavors.length===0">None</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Strain',
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    this.name = this.$route.params.name
    this.$store.dispatch('loadStrain', this.id)
  },
  computed: mapGetters({
    strain: 'getStrain'
  }),
  beforeDestroy () {
    this.$store.dispatch('eraseStrain')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.strain {
  display: block;
  margin: 1rem auto;
}
h1, h2 {
  font-weight: normal;
}
h3 {
  text-align: justify;
  font-weight: 400;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
@media (max-width: 600px) {
  .table {
    grid-template-columns: 1fr 1fr !important;
  }
  .nav a {
    margin: .1rem !important;
  }
}
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 2px solid #9ACD32;
  border-radius: .2rem;
}
.column {
  border: 1px solid #9ACD32;
}
.column p {
  background: #eee;
  border-bottom: 2px solid #9ACD32;
  padding: .5rem;
  margin: 0;
}
.nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.nav a {
  text-decoration: none;
  background: #9ACD32;
  color: #fff;
  padding: .5rem 1rem;
  margin: .5rem 1rem;
  border-radius: .2rem;
}
</style>
