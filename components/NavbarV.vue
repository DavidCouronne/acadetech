<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      to="/"
      class="home-link"
    >
      <img
        class="logo"
        v-if="theme.logo"
        :src="$withBase(theme.logo)"
        :alt="theme.siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="theme.siteTitle"
        :class="{ 'can-hide': theme.logo }"
      >{{ theme.siteTitle }}</span>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <!-- <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="theme.search !== false"/> -->
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>

//import AlgoliaSearchBox from '@AlgoliaSearchBox'
//import SearchBox from '@SearchBox'

import {themeConfig} from '../plugins/userConfig'
export default {
  //components: {   SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null,
      theme: themeConfig
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          /* - (
              this.$refs.siteName && this.$refs.siteName.offsetWidth || 0
              ) */
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  /* computed: {
    algolia () {
      return themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  } */
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

