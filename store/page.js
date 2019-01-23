export const state = () => ({
  body: "",
  slug: "",
  isLoading: true,
  scrollspy: false,
  title: ""
})

export const mutations = {
  updateBody(state, message) {
    state.body = message
  },
  updateSlug(state, slug) {
    state.slug = slug
  },
  updateTitle(state, title) {
    state.title = title
  },
  updateScrollspy(state, scroll) {
    state.scrollspy = scroll
  }
}
