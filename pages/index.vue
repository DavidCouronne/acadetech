<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Bienvenue sur AcadeTech</v-card-title>
        <v-card-text>
          
            <h2>Derniers articles</h2>
    
    <ul>
        <li v-if="posts" v-for="(post, index) in posts" :key="index">
            <nuxt-link :to="post.fields.slug">{{post.fields.title}}</nuxt-link>
        </li>
    </ul>
          
          <div class="text-xs-right">
            <em><small>&mdash; David Couronné</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank">Nuxt Documentation</a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank">Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'


export default {
  components: {
    Logo,
    VuetifyLogo
  },
  computed: {
        posts() {
            return this.$store.state.posts.posts
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('posts/getPosts', params.slug)
    }
}
</script>

