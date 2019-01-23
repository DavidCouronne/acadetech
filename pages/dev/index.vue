<template>
<div>
    <h1>Développement</h1>
    <h2>Tests Cheerio</h2>
<ul class="sidebar__subdocs" >
              <li v-bind:key="navitem.id" v-for="navitem in subnav">
                
                <nuxt-link class="sidebar__link" :to="navitem.id">{{navitem.text}}</nuxt-link>
                <ul v-if="navitem.children.length > 0">
                  <li v-bind:key="child.id" v-for="child in navitem.children">
                    <nuxt-link class="sidebar__link" :to="child.id">{{child.text}}</nuxt-link>
                  </li>
                </ul>

              </li>
            </ul>

     
    </div>
</template>

<script>
import cheerio from 'cheerio'
export default {
    computed: {
    subnav() {
      this.$store.commit('page/updateScrollspy',false)
      //const $ = cheerio.load('<h2 class="title">Hello world</h2>')
      const content = this.$md.render('# Tests Cheerio\n\n'
      +'## Section 1\n\n'
      +'### Subsection 1\n\n'
      +'## Section 2\n\n')
      const $ = cheerio.load(content)
      let pageNav = []
      $('h2, h3').each((i, elem) => {
        let $elem = $(elem)
        if ($elem[0].name == 'h2') {
          pageNav.push({
            id: `#${$elem.attr('id')}`,
            text: $elem.text(),
            children: []
          })
        } else {
          pageNav[pageNav.length - 1].children.push({
            id: `#${$elem.attr('id')}`,
            text: $elem.text(),
          })
        }
      })
      return pageNav
      return $
    }
  }
}

</script>

