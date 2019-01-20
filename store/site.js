export const state = () => ({
    siteTitle: "AcadeTech",
  currentContent: "",
  slug: "",
  isLoading: true,
  themeConfig: {
    sidebar: [
      '/',
      '/docs/',
    ],
    nav: [{
        text: 'Accueil',
        link: '/'
      },
      
      {
        text: 'Ressources Dev',
        link: '/dev/'
      },
      {
        text: 'Maths',
        link: '/cours/'
      },
      {
        text: 'Tests',
        link: '/tests/'
      },
    ],
  }
})
