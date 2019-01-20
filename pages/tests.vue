<template>
  <div>
      <h1>{{item.link}}</h1>
      <NavLink :item="item"/>

      <h2>NavLinks ok</h2>
      <NavLinks/>
      <h2>Dropdown Transition ok</h2>

      <h2>NavBar à faire</h2>

      <Navbar/>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      let i = {}
      i.link = '/tests/'
      i.text = 'Tests'
      return i
    }
  }
}
</script>
