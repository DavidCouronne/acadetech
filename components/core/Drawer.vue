<template>
    <v-navigation-drawer
     :clipped="clipped"
      v-model="drawer" 
      fixed app>
      <v-list>
        <core-scroll-spy v-if="scrollspy"/>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          :active-class="color"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <Title/>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import {themeConfig} from '@/plugins/userConfig.js'
export default {
  data() {
    return {
      color: 'secondary',
      /* clipped: true,
      drawer: true, */
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AcadeTech'
    }
  },
    props: {
        clipped: true,
        drawer: true
    },
   computed: {
items() {
    return themeConfig.nav
},
scrollspy() {
  return this.$store.state.page.scrollspy
}
    }
}
</script>

