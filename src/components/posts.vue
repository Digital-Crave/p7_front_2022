<script>

import Comment from './comment.vue';

export default {
    name: "Posts",
    props: {
        data: {
            type: Array,
        },
    },
    components: {
        Comment
    },
    data() {
        return {
            admin: 1,
            isHidden: false,
        }
    },
    methods: {
        dateFormat(created_at) {
            const date = new Date(created_at)
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
            return date.toLocaleDateString('fr-FR', options);
        },
        deletePost() {

            const token = JSON.parse(localStorage.getItem("token"));
            const admin = JSON.parse(localStorage.getItem("admin"));
            const id = this.data.find(data => data.id ).id;


            if (admin === 1) {
                fetch(`http://localhost:3001/api/posts/${id}`,
                    {
                        method: "DELETE",
                        headers: {
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
                        window.location.reload();
                    })
            } else {
                this.error = "Vous n'avez pas les droits pour supprimer un post";
            }
        },
        showButton() {
            const admin = JSON.parse(localStorage.getItem("admin"));

            if (admin === 0) {
                this.isHidden = false;
            } else {
                this.isHidden = true;
            }
        },
}
}

</script>

<template>
    <div id="post">
        <div class="card mb-3 m-auto" v-for="post in this.data" :key="post">
            <div class="card-header">
                <img class="rounded-circle" v-if="post.user.profil_picture" :src="post.user.profil_picture" alt="">
                <strong>{{ post.user.firstname }} {{ post.user.name }} </strong>
                <b-dropdown class="mx-1" right text="">
                    <b-dropdown-item @click="deletePost">Supprimer</b-dropdown-item>
                </b-dropdown>
            </div>
            <img :src="post.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.content }}</p>
                <p class="card-text"><small class="text-muted">{{ dateFormat(post.created_at) }}</small></p>

                <Comment :post_id="post.id"></Comment>
            </div>

        </div>
    </div>
</template>

<style>
@import url(../../style/post.css);
</style>