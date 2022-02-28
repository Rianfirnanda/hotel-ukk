import Vue from "vue"
import Vuex from "vuex"
import router from './../router/Router'

import kamar from './KamarStore'
import hotel from './HotelStore'
import pemesanan from './PemesananStore'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Sidebar_drawer: false,
        LayoutType: "full-sidebar",
        SidebarColor: "white",
        navbarColor: "primary",
        logoColor: "white",
        author: 'ibnusyawall',
        brand: 'Grand Hotel Pangandaran',
        error_messages: [],
        success_messages: [],
        isError: false,
        isSuccess: false,
        user: localStorage.getItem('user'),
        login_success: false,
    },
    mutations: {
        SET_LAYOUT_TYPE(state, payload) {
            state.LayoutType = payload
        },
        SET_SIDEBAR_DRAWER(state, payload) {
            state.Sidebar_drawer = payload
        },
        set_user(state, user) {
            state.user = user
        },
        set_token(state, token) {
            state.token = token
        },
        set_errors(state, e) {
            state.error_messages.push(e)
            state.isError = true
        },
        set_success(state, msg) {
            state.success_messages.push(msg)
            state.isSuccess = true
            state.login_success = true
        },
        close_errors(state) {
            state.error_messages = []
            state.isError = false
        },
        close_success(state) {
            state.success_messages = []
            state.isSuccess = false
            state.login_success = false
        },
        logout(state) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    },
    actions: {
        setLayoutType({ commit }, width) {
            commit("SET_LAYOUT_TYPE", width)
        },
        login({ commit }, { value }) {
            return new Promise((resolve, reject) => {
                axios.post('/api/v1/auth/login', value)
                    .then(response => {
                        var { user, token } = response?.data
                        var role = user?.level
                        user = JSON.stringify(user)

                        commit('set_success', 'berhasil login, mengalihkan...')
                        function _qs(key) {
                            var vars = [], hash;
                            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                            for(var i = 0; i < hashes.length; i++)
                            {
                                hash = hashes[i].split('=');
                                vars.push(hash[0]);
                                vars[hash[0]] = hash[1];
                            }
                            return vars[key];
                        }

                        localStorage.setItem('token', token)
                        localStorage.setItem('user', user)
                        /*setTimeout(() => {
                            var has_query = _qs('redirect')
                            if (!!has_query) 
                                window.location = `${window.location.origin}${decodeURIComponent(has_query)}`
                            else 
                                window.location = router.resolve({ name: `${role}-dashboard`}).href
                        }, 3000)*/
                        resolve(response)
                    }).catch(e => {
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')

                        commit('set_errors', 'username atau password salah.')
                        reject(e)
                    })
                })
        },
        register({ commit }, { value }) {
            return new Promise((resolve, reject) => {
                axios.post('/api/v1/auth/register', value)
                    .then(({ data }) => {
                        commit('set_success', 'berhasil register, mengalihkan ke halaman login...')

                        setTimeout(() => {
                            window.location = router.resolve({ name: 'Login' }).href
                        }, 3000)
                    })
                    .catch(e => {
                        commit('set_errors', 'terjadi kesalahan pada server, silahkan cek data dan ulangi kembali.')
                        reject(e)
                    })
            })
        },
        addUser({ commit }, { value }) {
            return new Promise((resolve, reject) => {
                axios.post('/api/v1/admin', value)
                    .then(resopnse => {
                        let { result } = response.data
                        commit('set_success', 'data berhasil ditambahkan.')
                        setTimeout(() => {
                            commit('close_success')
                        }, 5000)
                        resolve(result)
                    })
                    .catch(e => {
                        commit('set_errors', 'data gagal ditambahkan.')
                        setTimeout(() => {
                            commit('close_errors')
                        }, 5000)
                        reject(e)
                    })
            })
        },
        _getAllUser() {
            return new Promise((resolve, reject) => {
                axios('/api/v1/admin')
                    .then(response => {
                        let { result } = response.data
                        resolve(result)
                    })
                    .catch(e => {
                        reject(e)
                    })
            })
        },
        close({ commit }) {
            commit('close_errors')
            commit('close_success')
        },
        logout({ commit }) {
            commit('logout')
            window.location = router.resolve({ name: 'Login' }).href
        }
    },
    getters: {},
    modules: { kamar, hotel, pemesanan },
})
