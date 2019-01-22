<template>
  <v-app>
    <!-- <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >-->
    <v-navigation-drawer :clipped="clipped" v-model="drawer" fixed app>
      <v-list>
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
        <v-list-group
        prepend-icon="account_circle"
        value="true"
      ><v-list-tile slot="activator">
          <v-list-tile-title>{{pagetitle}}</v-list-tile-title>
        </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >-->
    <v-toolbar :clipped-left="clipped" fixed app dark color="#FB8C00">
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-btn icon>
        <v-icon>home</v-icon>
      </v-btn>
      <!-- <v-btn flat
      to="/"
      v-text="title"
      />-->
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
export default {
  data() {
    return {
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
      title: 'AcadeTech'
    }
  },
  computed: {
    pagetitle() {
      return this.$store.state.page.title
    }
  }
}
</script>
