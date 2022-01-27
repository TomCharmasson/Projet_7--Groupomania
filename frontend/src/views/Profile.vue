<template>
    <Header /> 
    <section class="profile">
        <div class="profile-info">
                <img src="../assets/profile/default-profile.jpg" alt="Photo de profil" width="260">
                <h1 class="h1 my-5 fw-bold">{{ user.username }} Pseudo</h1>
                <p class="text-muted">{{ user.email }} Email</p>
                <p></p>
        </div>
    </section>
    <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Profile",
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            user: {
            },
        };
    },
    methods: {
        getUser() {
            const token = this.$store.getters.getToken; // get the token from store
            const headers = {
                headers: { Authorization: `Bearer ${token}` }, // add the token to the header
            };
            this.axios
                .get("/api/user", headers)
                .then((response) => (this.user = response.data))
                .catch((error) => console.log(error));
            console.log(this.user);
        },
    },
};
</script>

<style>

</style>