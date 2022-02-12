import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        fasilitas_hotels({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/fasilitas-hotel')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
        fasilitas_hotel({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/fasilitas-hotel/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
