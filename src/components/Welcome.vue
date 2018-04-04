<template>
  <div class="hello">
    <h1>Welcome to StrainLib</h1>
    <input type="checkbox" id="censorship" v-model="agree" />
    <label for="censorship">
      I am 21yo or above and promise to use the following content strictly for research purpose.
    </label>
    <vue-recaptcha class="recaptcha" sitekey="6LeTAFEUAAAAADxuq4-yzPBqDJSfYzC998MNserU">
    </vue-recaptcha>
    <button v-bind:disabled="agree === false" v-on:click="goTo">Continue</button>
  </div>
</template>

<script>
// :to="{ name: 'Search' }
// target="_blank"
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: 'Welcome',
  data () {
    return {
      agree: false
    }
  },
  components: { VueRecaptcha },
  methods: {
    goTo () {
      this.$router.push('/Search')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.recaptcha {
  width: 320px;
  display: block;
  margin: .5rem auto;
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
