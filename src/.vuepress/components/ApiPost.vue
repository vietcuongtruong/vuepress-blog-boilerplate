<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else v-for="item in items" v-bind:key="item.id">
      <div class="grid">
        <h1 class="title grid-item">
          {{item.title}}
        </h1>
        <span class="grid-item" v-html="item.body"/>
      </div>
      <div v-for="img in item.images" v-bind:key="img.image">
        <!-- <img :src="img.image"/> -->
        <AppImage
          :src="img.tiny"
          :lazy-src="img.image"
        />
        <h5>{{img.caption}}</h5>
      </div>
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
@import '../theme/styles/reset.styl'
@import '../theme/styles/config.styl'
@import '../theme/styles/custom-layout.styl'
section > div:nth-child(1) > .grid
  display: grid
  grid-template-columns: 1fr 1fr
  // grid-template-columns: repeat(auto-fit, minmax(600px, 1fr))
  grid-gap: 2rem
  padding: 3rem 0 6rem
// main .contain-grid > .grid ~ .grid
//     display: none
//     padding: 0
.title.grid-item
  grid-column: 1
.grid-item
  grid-column: 2
h3
  margin-block-start 2em
  margin-block-end 1em
h3:first-of-type
  margin-block-start 0
</style>