<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="mb-5">
       <b-container>
           <b-navbar-brand to="/"> {{ brand }} </b-navbar-brand>
           <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
           <b-collapse id="nav-collapse" is-nav>
               <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item v-if="!!_user">
                        <b-button size="sm" variant="primary" :to="{ name: `${user.level}-dashboard` }">
                            Laman {{ user.level | capitalize }}
                        </b-button>
                    </b-nav-item>
                    <b-nav-item v-else>
                        <b-button size="sm" variant="primary" to="/login">
                            Login
                        </b-button>
                    </b-nav-item>
               </b-navbar-nav>
           </b-collapse>
       </b-container>
    </b-navbar>
</template>
<script>
export default {
    data() {
        return {
            brand: this.$store.state.brand,
            user: null,
        }
    },
    beforeMount() {
        this.check()
    },
    computed: {
        _user() {
            return this.user
        }
    },
    methods: {
        check() {
            axios('/api/user')
                .then(({ data }) => {
                    this.user = data
                })
                .catch(e => {
                    this.user = null
                })
        }
    },
    filters: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }
}
</script>
