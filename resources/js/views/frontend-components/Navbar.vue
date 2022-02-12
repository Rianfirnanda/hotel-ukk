<template>
    <b-navbar toggleable="md" variant="info" class="bg-info shadow">
        <b-container>
            <b-navbar-brand to="/">
                <img :src="logo" width="30" height="30" class="d-inline-block align-top img-circle" alt="Logo">
                {{ brand }}
            </b-navbar-brand>

            <b-navbar-toggle target="navbarNav"></b-navbar-toggle>

            <b-collapse id="navbarNav" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item href="#">Kamar</b-nav-item>
                    <b-nav-item href="#">Fasilitas</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<script>
import logo from './../../assets/images/hotel/logo.jpg'
export default {
    data() {
        return {
            brand: this.$store.state.brand,
            logo
        }
    }
}
</script>
