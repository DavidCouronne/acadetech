<template>
  <div>
    
    
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"></div>
      <v-card>
        <v-card-title class="headline">Bienvenue sur AcadeTech</v-card-title>
        <v-card-text>
          <h2>Derniers articles développement web et Python</h2>
          

          <ul v-if="posts">
            <li v-for="(cour, index) in maths" :key="index">
              <nuxt-link :to="cour.fields.slug">{{cour.fields.type}} : {{cour.fields.title}}</nuxt-link>
            </li>
          </ul>
          


          <div class="text-xs-right">
            <em>
              <small>&mdash; David Couronné</small>
            </em>
          </div>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          
        </v-card-actions>
      </v-card>
    </v-flex>
 </div>
</template>

<script>


export default {
  

  computed: {
    posts() {
      
      return this.$store.state.posts.posts
    },
    maths: function () {
    return this.$store.state.posts.posts.filter(function(item) {
      return item.fields.category === 'dev';
    })
  }
    
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
    
  }
}
</script>


