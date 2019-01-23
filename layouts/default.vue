<template>
  <v-app>
    <!-- <core-drawer :clipped="clipped" :drawer="drawer"/> -->
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
        <Sidebar/>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar :clipped-left="clipped" fixed app dark color="primary" :z-index='20'>
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      
        <v-btn icon
        to="/">
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn icon
        to="/maths/">
          <v-icon>school</v-icon>
        </v-btn>

        <v-btn icon
        to="/dev/">
          <v-icon>computer</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"/>
      

      <v-spacer></v-spacer>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-navigation-drawer :right="right" v-model="rightDrawer" temporary fixed>
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 MIT David Couronné</span>
    </v-footer>
  </v-app>
</template>

<script>
import { themeConfig } from '@/plugins/userConfig.js'
export default {
  data() {
    return {
      tabs: null,
      activenav: 'secundary',
      color: 'secondary',
      clipped: true,
      drawer: true,
      fixed: false,
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: themeConfig.siteTitle
    }
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
