<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
      <div v-else v-for="item in items" v-bind:key="item.id">
        <div v-for="img in item.images" v-bind:key="img.image">
          <img :src="img.image"/>
          <h5>{{img.caption}}</h5>
        </div>
        <span v-html="item.body"/>
      </div>
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'ApiPost',
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

<style lang="stylus">
@import '../theme/styles/config.styl'
@import '../theme/styles/custom-layout.styl'
</style>