module.exports = {
  themeConfig: {
    siteTitle: 'AcadeTech',
    sidebar: [
      '/',
      '/docs/',
    ],
    nav: [{
        icon: 'home',
        title: 'Accueil',
        to: '/'
      },
      {
        icon: 'computer',
        title: 'Ressources Dev',
        to: '/dev'
      },
      {
        icon: 'functions',
        title: 'Maths',
        to: '/maths'
      },
      {
        icon: 'computer',
        title: 'ScrollSpy',
        to: '/scrollspy'
      }
    ]
  }
}
