<template>
    <div class="post-list container col-lg-6 mx-auto">
        <h3>Posts here 👇</h3>
        <ul class="list-group">
            <li class="list-group-item py-3" v-for="(post, index) in posts" :key="index">
                {{ post.post }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PostList",
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style></style>
