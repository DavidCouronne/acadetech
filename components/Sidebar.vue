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

<style lang='scss'>
@import '~assets/_variables.scss';

.sidebar {
  position: fixed;
  z-index: 10;
  top: 61px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;

  display: none;
  @media screen and (min-width: 835px) {
    display: block;
  }

  li {
    list-style-type: none;
    display: block;
  }
}

.sidebar__link {
  display: inline-block;
  padding-bottom: 2px;
  margin-bottom: 2px;
  color: $sidebar-link-color-inactive;

  &.nuxt-link-active {
    font-weight: 600;
    color: $sidebar-link-color-active;
  }

  &.sidebar__link--doc {
    font-size: 0.85em;
  }

  &.sidebar__link--category {
    color: initial;
    font-weight: 600;
  }
}

.sidebar__category {
  padding: 10px 0px;
}

.sidebar__inner {
  width: 230px;
  padding: 40px 20px 60px 60px;
}

.sidebar__docs {
  margin: 0px;
  padding-left: 0px;
}

.sidebar__subdocs {
  list-style-type: none;
  margin: 0;
  padding-left: 10px;
  font-size: 0.8em;
  .sidebar__link {
    color: $sidebar-subnav-link-color-inactive;
  }
  ul {
    padding-left: 10px;
  }
}
</style>

