<template>
  <div>
    
    
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"></div>
      <v-card>
        <v-card-title class="headline">Bienvenue sur AcadeTech</v-card-title>
        <v-card-text>
          <h2>Derniers articles de mathématiques</h2>
          

          <ul v-if="cours">
            <li v-for="(cour, index) in cours" :key="index">
              <nuxt-link :to="'/maths/'+cour.fields.slug">{{cour.fields.type}} : {{cour.fields.title}}</nuxt-link>
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
    cours() {
      this.$store.commit('page/updateScrollspy',false)
      return this.$store.state.cours.cours
    },
    
    
  },
  async fetch({ store, params }) {
    await store.dispatch('cours/getCours', params.slug)
    
  }
}
</script>

