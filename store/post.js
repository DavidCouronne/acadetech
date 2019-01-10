import client from '../plugins/contentful'

export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, payload) {
        state.posts = payload
    },
    
}

export const actions = {

}

