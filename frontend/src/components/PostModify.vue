<template>
        <h3>Modifier un post</h3>
        <form @submit.prevent="updatePost">
            <div class="form-group">
                <label for="message">Message</label>
                <input type="text" class="form-control" id="message" v-model="post.message" />
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="text" class="form-control" id="image" v-model="post.image" />
            </div>
            <button type="submit" class="btn btn-primary">Modifier</button>
        </form>
</template>

<script>
export default {
    name: "PostModify",
    data() {
        return {
            post: null,
        };
    },
    methods: {
        // getPost() {
        //     // Gerer le token
        //     const token = this.$store.getters.getToken; // get the token from store
        //     const headers = {
        //         headers: { Authorization: `Bearer ${token}` }, // add the token to the header
        //     };
        //     // Gerer la requete
        //     this.axios
        //         .get(`/api/post/${this.$route.params.id}`, headers)
        //         .then((response) => (this.post = response.data))
        //         .catch((error) => console.log(error));
        // },
        updatePost() {
            const token = this.$store.getters.getToken; // get the token from store
            const headers = {
                headers: { Authorization: `Bearer ${token}` }, // add the token to the header
            };
            this.axios
                .put(`/api/post/${this.$route.params.id}`, this.post, headers)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.log(error));
        },
    },
}
</script>

<style>

</style>