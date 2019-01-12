const pkg = require('./package')
require('dotenv').config()
const contentful = require('contentful')

module.exports = {
  mode: 'universal',
  /* env: {
    CTF_SPACE_ID: configCtf.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: configCtf.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: configCtf.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: configCtf.CTF_BLOG_POST_TYPE_ID
  }, */
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",
      integrity: "sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",
      crossorigin: "anonymous"}, //katex css
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '@assets/theme.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/contentful'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /* env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  }, */

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }    
      
    }
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
          space:  process.env.CTF_SPACE_ID,
          accessToken: process.env.CTF_CDA_ACCESS_TOKEN
      });
  
      return client.getEntries({
          content_type: 'blogPost'
      }).then((response) => {
          return response.items.map(entry => {
              return {
                  route: entry.fields.slug,
                  payload: entry
              };
          });
      });
    }
  }
}
