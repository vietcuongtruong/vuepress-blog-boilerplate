<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
  <section v-else>
    <main class="grid">
      <div v-if="loading">Loading...</div>
      <article v-else v-for="project in projects" v-bind:key="project.id">
        <router-link :to="`${project.slug}`">
          <progressive-background
            :src="project.thumbnail"
            :placeholder="project.tiny"
            :blur="30"
          />
          <h5>{{project.title}}</h5>
        </router-link>
      </article>
    </main>
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Projects',
  data () {
    return {
      projects: [],
      loading: true,
      errored: false
    }
  },
  async beforeMount () {
    axios
      .get(`https://vietcuongtruong.com/api/posts/`)
      .then(response => {
        this.projects = response.data.data
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
.grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  // grid-template-columns: repeat(auto-fit, minmax(600px, 1fr))
  grid-gap: 2rem
  // margin: 0
  // .content
  //   max-width: 1200px
  // .grid
  //   display: grid
  //   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  //   grid-gap: 1rem
  //   max-width: 10000px
  //   margin: 0
  // img
  //   filter: brightness(99%)
</style>