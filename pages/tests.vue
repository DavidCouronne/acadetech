<template>
  <div>
    <h1>{{item.link}}</h1>

    <h2>NavLinks ok</h2>

    <h2>Dropdown Transition ok</h2>

    <div v-html="body"></div>
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
    },
    body() {
      return this.$md.render(
        '# Titre 1\n'
        +'Blabla\n'
        +'## Sous titre 1\n'
        +'Blabla\n'
        +'## Sous titre 2\n'
        +'Blabla\n'
      )
    }
  }
}
</script>
