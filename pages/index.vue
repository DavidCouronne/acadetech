<template>
  <div>
    
    <v-flex>
    
        <div class="headline">Bienvenue sur AcadeTech</div>
        
          <h2>Derniers articles publiés</h2>
          

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
          
        
    </v-flex>
 </div>
</template>

<script>


export default {
  

  computed: {
    posts() {
      
      return this.$store.state.posts.posts
    },
    
    
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
    
  }
}
</script>

