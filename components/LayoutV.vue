<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    

    <Page
      
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Page from '../components/Page.vue'
import Sidebar from '../components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import {themeConfig} from '../plugins/userConfig'

export default {
  components: {  Page, Sidebar, Navbar },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      
      
      return (
        themeConfig.siteTitle ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        themeConfig.nav
      )
    },

    shouldShowSidebar () {
      
      return (
        true
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$store.state.content.currentContent
      )
    },

    pageClasses () {
      
      return [
        {
          'no-navbar': false,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': false
        }
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>


