<template>
  <div>
    
    <v-flex>
    
        <div class="headline">Bienvenue sur AcadeTech</div>
        
          <h2>Derniers articles</h2>
          

          <ul v-if="posts">
            <li v-for="(post, index) in posts" :key="index">
              <nuxt-link :to="post.fields.slug">{{post.fields.title}}</nuxt-link>
            </li>
          </ul>
          


          <div class="text-xs-right">
            <em>
              <small>&mdash; David Couronné</small>
            </em>
          </div>
          <hr class="my-3">
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
        
    </v-flex>
 </div>
</template>

<script>


export default {
  

  computed: {
    posts() {
      this.$store.commit('page/updateScrollspy',false)
      return this.$store.state.posts.posts
    },
    navlinks() {
      
      return this.$store.state.navlinks.navlinks
    },
    
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
    await store.dispatch('navlinks/getNavLinks', params.slug)
  }
}
</script>

