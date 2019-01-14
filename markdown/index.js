// https://github.com/BlueOakJS/markdownit-loader
// https://github.com/markdown-it/markdown-it
const path = require('path')

module.exports = function mathssyfyTheme (options) {
  // Add CSS
  this.options.css.push('@mathssyfy/theme/lib/theme.css')
  
  this.options.head.link.push(
    {rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",
    integrity: "sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",
    crossorigin: "anonymous"} //katex css
    )
    this.options.head.link.push(
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    )
    this.options.head.link.push(
      { rel: 'stylesheet', //Google Material icon
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    )
    
    


  const _options = Object.assign({}, options, this.options.mathssyfyTheme)
}

module.exports.meta = require('./package.json')
