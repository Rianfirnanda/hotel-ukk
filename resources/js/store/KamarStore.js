import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    state: {
        id: null,
        nama_kamar: null,
    },
    mutations: {},
    actions: {
        kamars({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/kamar')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
        public_kamars({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios('/api/v1/public/kamar')
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
        public_kamar({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/public/kamar/${id}`)
                    resolve(data)
                } catch (e) {
                    reject(e)
                }
            })
        },
        public_fasilitas_kamar({ commit }, id){
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/kamar/fasilitas/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },

        kamar({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/kamar/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
        fasilitas_kamar({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/kamar/fasilitas/${id}`)
                    resolve(data?.result)
                } catch(e) {
                    reject(e)
                }
            })
        },
    },
}
