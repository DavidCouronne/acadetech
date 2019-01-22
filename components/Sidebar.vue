<template>
  <div class="sidebar">
    <div class="sidebar__inner">
      <nav class="sidebar__category">
        <ul class="sidebar__docs">
          <ul class="sidebar__subdocs">
            <div v-html="subnav"></div>
          </ul>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import cheerio from 'cheerio'

export default {
  computed: {
    slug() {
      return this.$store.state.content.slug
    },
    subnav() {
      const $ = cheerio.load(this.$store.state.content.currentContent)
      let pageNav = []
      let navItem = '<ul class="sidebar-links" >\n'
      let slug = this.slug
      $('h2, h3').each((i, elem) => {
        let $elem = $(elem)
        if ($elem[0].name == 'h2') {
          pageNav.push({
            id: '#' + $elem.attr('id'),
            text: $elem.text(),
            children: []
          })
          navItem =
            navItem +
            `<li><a class='sidebar-link' href=${'#' +
              $elem.attr('id')}>${$elem.text().replace('# ', '')}</a></li>\n`
        } else {
          pageNav[pageNav.length - 1].children.push({
            id: `#${$elem.attr('id')}`,
            text: $elem.text()
          })
        }
      })
      return navItem + '</ul>'
    }
  }
}
</script>
