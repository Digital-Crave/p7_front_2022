<script>

import Comment from './comment.vue';

export default {
    name: "Posts",
    components: {
        Comment
    },
    data() {
        return {
            posts: [],
        } 
    },
    created() {
        this.getAllPosts();
    },

    methods: {
        getAllPosts() {

            const token = JSON.parse(localStorage.getItem("token"));

            fetch("http://localhost:3001/api/posts/ ",
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        this.error = "Something went wrong";
                    }
                })
                .then(data => {
                    this.posts = data;
                })

        },

        dateFormat(created_at) {
            const date = new Date(created_at)
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
            return date.toLocaleDateString('fr-FR', options);
        },
}
}

</script>

<template>
    <div id="post">
        <div class="card mb-3 m-auto" v-for="post in posts" :key="post">
            <div class="card-header">
                <img class="rounded-circle" v-if="post.profil_picture" src="post.profil_picture" alt="Avatar">
                <strong>{{ post.user.firstname }} {{ post.user.name }} </strong>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Modifier</a></li>
                        <li><a class="dropdown-item" href="#">Supprimer</a></li>
                    </ul>
                </div>
            </div>
            <img :src="post.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.content }}</p>
                <p class="card-text"><small class="text-muted">{{ dateFormat(post.created_at) }}</small></p>
                <Comment :post_id="post.id"/>
            </div>

        </div>
    </div>
</template>

<style>
@import url(../../style/post.css);
</style>