import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        pemesanans({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/pemesanan')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
        pemesanan({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/pemesanan/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
