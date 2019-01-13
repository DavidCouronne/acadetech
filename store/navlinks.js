import client from '../plugins/contentful'

export const state = () => ({
    navlinks: []
})

export const mutations = {
    setNavLinks(state, payload) {
        state.navlinks = payload
    }
}

export const actions = {
    async getNavLinks({commit}) {
        const response = await client.getEntries({
            content_type: 'navLink'
        })
        if (response.items.length > 0) {
            commit('setNavLinks', response.items)
        }
    }
}