<template>
  <v-app>
    <core-drawer :clipped="clipped" :drawer="drawer"/>

    <v-toolbar :clipped-left="clipped" fixed app dark color="primary" tabs>
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-tabs v-model="tabs" color="transparent">
        <v-tabs-slider></v-tabs-slider>
        <v-tab to="/">
          <v-icon>home</v-icon>
        </v-tab>

        <v-tab to="/maths/">
          <v-icon>school</v-icon>
        </v-tab>

        <v-tab to="/dev/">
          <v-icon>computer</v-icon>
        </v-tab>
        <v-tab v-text="title"/>
      </v-tabs>

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
      color: 'blue lighten-3',
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'home', title: 'Accueil', to: '/' },
        { icon: 'computer', title: 'Ressources Dev', to: '/dev' },
        { icon: 'functions', title: 'Maths', to: '/maths' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: themeConfig.siteTitle
    }
  }
}
</script>
