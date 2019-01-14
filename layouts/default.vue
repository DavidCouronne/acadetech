<template>
<!-- <v-app dark> -->
  <v-app>
    <NavLinks/>
    <nuxt />
  </v-app>
</template>

<script>
import NavLinks from '~/components/NavLinks'
  export default {
    components: {
      NavLinks
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'home', title: 'Accueil', to: '/' },
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Acadetech'
      }
    }
  }
</script>
