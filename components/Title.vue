<template>
<div>
    <v-list-tile
          
          
          
          :active-class="color"
          
        >
    <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
    </div>
</template>

<script>

export default {
    data() {
        return {
            color: 'secondary',
            
      
        }
    },
    computed: {
        pagetitle() {
            return this.$store.state.page.title
        },
        item() {
            return {
                icon: 'school',
                title: this.$store.state.page.title,
            
            }
    }
}}
</script>

