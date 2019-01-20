<template>
    <div class="single-post">
        <Sidebar>
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>
    
    	<h1 class="single-post__title">
            {{currentCours.fields.titre}}
        </h1>
        <!-- <ul class="sidebar__subdocs" >
              <li v-bind:key="navitem.id" v-for="navitem in subnav">
                
                <a :href="navitem.id">{{navitem.text}}</a>
                <ul v-if="navitem.children.length > 0">
                  <li v-bind:key="child.id" v-for="child in navitem.children">
                    <nuxt-link class="sidebar__link" :to="child.id">{{child.text}}</nuxt-link>
                  </li>
                </ul>

              </li>
            </ul> -->
        <!-- <div v-html="$md.render(currentPost.fields.body)"></div> -->
        <!-- <div class="single-post__content" v-html="$md.render(currentPost.fields.body)"></div> -->
        <!-- <markdown>{{currentPost.fields.body}}</markdown>  -->
        <div v-html="content"></div>
        <!-- <div v-html="currentPost.fields.body"></div> -->
    
</div>
    


    
</template>

<script>
import Markdown from '@mathssyfy/plugin-markdown'
import cheerio from 'cheerio'

export default {
    components: {
    Markdown
  },
    computed: {
        currentCours() {
            return this.$store.state.cour.currentCours
        },
        isLoading() {
            return this.$store.state.cour.isLoading
        },
        content() {
            this.$store.commit('content/updateSlug',this.$store.state.cour.currentCours.fields.slug)
            this.$store.commit('content/updateContent',this.$md.render(this.$store.state.cour.currentCours.fields.body))
return this.$md.render(this.$store.state.cour.currentCours.fields.body)
        },
        /* content() {
      //const $ = cheerio.load('<h2 class="title">Hello world</h2>')
      const content = this.$md.render(this.$store.state.cour.currentCours.fields.body)
      const $ = cheerio.load(content)
      
      
      return $.html()
      
    } */
    
    },
    async fetch({ store, params }) {
        await store.dispatch('cour/getCoursBySlug', params.slug)
    }
}
</script>