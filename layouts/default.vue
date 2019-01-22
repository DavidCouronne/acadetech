<template>
  <v-app>
    <!-- <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    > -->
    <v-navigation-drawer
    clipped= true
    v-model="drawer"
    fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
       
      </v-list>
      
    </v-navigation-drawer>
    <!-- <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    > -->
    <v-toolbar
      clipped-left= true
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      
      
      <nuxt-link to="/"><v-toolbar-title v-text="title"/></nuxt-link>
      <v-spacer></v-spacer>
      
       
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
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
        title: 'AcadeTech'
      }
    }
  }
</script>
