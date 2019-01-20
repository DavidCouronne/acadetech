import client from '../plugins/contentful'

export const state = () => ({
    currentCours: {},
    isLoading: true
})

export const mutations = {
    setcurrentCours(state, payload) {
        state.currentCours = payload
    },
    setLoading(state, payload) {
        state.isLoading = payload
    }
}

export const actions = {
    async getCoursBySlug({commit}, slug) {
        commit('setLoading', true);
        const response = await client.getEntries({
            content_type: 'coursMaths',
            'fields.slug': slug
        })
        commit('setcurrentCours', response.items[0])
        commit('setLoading', false)
    }
}