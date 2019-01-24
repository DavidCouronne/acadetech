<template>
    <div class="single-post">
        <!-- <Sidebar>
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar> -->
    
    	<h1 class="single-post__title">
            {{currentPost.fields.title}}
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


export default {
    
    computed: {
        currentPost() {
            return this.$store.state.post.currentPost
        },
        isLoading() {
            return this.$store.state.post.isLoading
        },
        content() {
          
      //const $ = cheerio.load('<h2 class="title">Hello world</h2>')
      const currentContent = this.$md.render(this.$store.state.post.currentPost.fields.body)
      this.$store.commit('page/updateSlug',this.$store.state.post.currentPost.fields.slug)
            this.$store.commit('page/updateBody',currentContent)
            this.$store.commit('page/updateTitle',this.$store.state.post.currentPost.fields.title)   
      
      // return $.html()
      return currentContent
      
    }
    
    },
    async fetch({ store, params }) {
        await store.dispatch('post/getPostBySlug', params.slug)
    }
}
</script>