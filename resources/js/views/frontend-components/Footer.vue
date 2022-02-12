<template>
    <div>
        <footer class="footer">
            <div class="container">
                <span class="text-muted"><strong>Copyright &copy; {{ year }} {{ author }}.</strong> All rights reserved.</span>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            author: this.$store.state.author
        }
    }
}
</script>
