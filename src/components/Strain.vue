<template>
  <div class="strain">
    <h3>{{strain.description}}</h3>
    <div class="table">
      <div class="column">
        <p>Medical effects:</p>
        <ul>
          <li v-for="item in strain.medical" :key=item :id=item>{{item}}</li>
        </ul>
      </div>
      <div class="column">
        <p>Positive effects:</p>
        <ul>
          <li v-for="item in strain.positive" :key=item :id=item>{{item}}</li>
        </ul>
      </div>
      <div class="column">
        <p>Negative effects:</p>
        <ul>
          <li v-for="item in strain.negative" :key=item :id=item>{{item}}</li>
        </ul>
      </div>
      <div class="column">
        <p>Flavors:</p>
        <ul>
          <li v-for="item in strain.flavors" :key=item :id=item>{{item}}</li>
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
    this.$store.dispatch('loadStrain', this.id)
  },
  computed: mapGetters({
    strain: 'getStrain'
  }),
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.strain {
  width: 640px;
  display: block;
  margin: 1rem auto;
}
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
ul {
  padding: 0;
}
li {
  list-style: none;
}
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
