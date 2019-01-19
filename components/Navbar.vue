<template>
  <header class="navbar">
    <nuxt-link to="/" class="home-link">
      <span ref="siteName" class="site-name">AcadeTech</span>
    </nuxt-link>
    <div class="links">
      <div class="can-hide">
        <nav class="nav-links">
          <nuxt-link class="nav-link" to="/cours">Maths</nuxt-link>
          <nuxt-link class="nav-link" to="/dev">Développement</nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>
