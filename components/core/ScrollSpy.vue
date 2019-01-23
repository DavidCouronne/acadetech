<template>
    <div>
        <v-list v-scroll-spy-active="{class: 'scrollspyActive'}" v-scroll-spy-link>
          <v-list-tile 
          :key="item" 
          v-for="item in titles" 
          >
            <a>{{item}}</a>
          </v-list-tile>
        </v-list>
        
    </div>
</template>

<style>
.container {
  position: relative;
}
.sidebar {
  position: fixed;
  top: 48px;
  left: 10px;
  max-width: 230px;
  font-size: 18px;
}
.menu {
  padding: 0;
  list-style: none;
}
.current-section {
  padding-top: 50px;
}
.current-section input {
  max-width: 3em;
}
.menu-item {
  margin-bottom: 20px;
}
.menu-item a {
  cursor: pointer;
}
.main {
  margin-left: 300px;
  font-size: 25px;
}
.scrollspyActive {
  color: #fb8c00;
  border-left: 5px solid #fb8c00;
  padding-left: 5px;
  transition: all 0.5s;
  margin-left: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      section: 0,
      titles: [
        'Ludwig van Beethoven',
        'Biography',
        'Personal and family difficulties'
      ]
    }
  },
  
}
</script>

