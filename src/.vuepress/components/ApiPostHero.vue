<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else v-for="item in items" v-bind:key="item.heroImage">
      <!-- <img :src="item.heroImage"/> -->
      <progressive-background
        v-if="item.heroImage"
        :src="item.heroImage"
        :placeholder="item.tiny"
        :blur="30"
      />
    </div>
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'ApiPostHero',
  data () {
    return {
      items: [],
      loading: true,
      errored: false
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  },
  async beforeMount () {
    axios
      .get(`https://vietcuongtruong.com/api/posts/${this.data.slug}`)
      .then(response => {
        this.items = response
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}


</script>

<style lang="stylus" scoped>
img
  width 100%
section
  margin 0 -5rem
  margin-top -3.6rem !important

</style>