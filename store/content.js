export const state = () => ({
    currentContent: "",
    slug: "",
    isLoading: true
})

export const mutations = {
    updateContent (state, message) {
        state.currentContent = message
}, updateSlug (state,slug){
    state.slug = slug
}
}