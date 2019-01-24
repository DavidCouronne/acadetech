<template>
  <v-app>
    
    <v-navigation-drawer v-if="drawer" :clipped="clipped" fixed app>
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
        <v-divider></v-divider>
        <!-- <Title/> -->
        <!-- <Sidebar/> -->
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :clipped-left="clipped" fixed app dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      
      <v-toolbar-title v-text="title"/>

      <v-spacer></v-spacer>

      
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 MIT David Couronné</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      activenav: 'secundary',
      color: 'secondary',
      clipped: true,
      drawer: true,
      fixed: false,
      isSidebarOpen: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AcadeTech',
      items: [
          { icon: 'home', title: 'Accueil', to: '/' },
          { icon: 'school', title: 'Mathématiques', to: '/maths' },
          { icon: 'computer', title: 'Développement', to: '/dev' }
        ],
    }
  },
  computed: {
    
    scrollspy() {
      return this.$store.state.page.scrollspy
    }
  },
  
}
</script>
