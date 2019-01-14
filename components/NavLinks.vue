<template>
  <nav class="nav-links">
    <div class="nav-item" v-for="item in userLinks" :key="item.link">
      <NavLink :item="item"/>
    </div>
  </nav>
</template>

<script>
import NavLink from '~/components/NavLink'
import {themeConfig} from '../plugins/userConfig'
export default {
  components: {
    NavLink
  },
  computed: {
    userLinks() {
      return themeConfig.nav
    },
  }
}
</script>

