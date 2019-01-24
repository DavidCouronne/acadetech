const { generateConfig } = require('./generateConfig')

const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
      },
      /* {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css'
      }, */

      { rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css',
        integrity: 'sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y',
        crossorigin: 'anonymous' }, // katex css
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }

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

    //  '@/assets/styles/theme.styl', // Vuepress

    'prismjs/themes/prism-dark.css',
    '@assets/stylus/main.styl', // Vuetify sauf _code
    // '@/assets/stylus/mini/theme.css', // Vuetify Mini Prepos
    // '@/assets/styles/code.styl'
    // '@assets/material/styles/index.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-instantsearch',
    '@/plugins/vuetify',
    '@/plugins/contentful',
    // '~/plugins/global-components-loader.js',
    /* {
      src: '@/plugins/scrollspy',
      ssr: false

    } */
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
    injected: true,
    use: [
      // '@mathssyfy/markdown-it-component',
      'markdown-it-prism',
      // '@mathssyfy/markdown-it-highlightlines',
      // '@mathssyfy/markdown-it-prewrapper',
      '@mathssyfy/markdown-it-anchor',
      'markdown-it-table-of-contents',
      'markdown-it-emoji',
      '@mathssyfy/markdown-it-container',
      'markdown-it-katex-newcommand'
      // '@mathssyfy/markdown-it-linenumbers'

    ]
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  generate: generateConfig()
}
