import client from '../plugins/contentful'

export const state = () => ({
    cours: []
})

export const mutations = {
    setCours(state, payload) {
        state.cours = payload
    }
}

export const actions = {
    async getCours({commit}) {
        const response = await client.getEntries({
            content_type: 'coursMaths'
        })
        if (response.items.length > 0) {
            commit('setCours', response.items)
        }
    }
}