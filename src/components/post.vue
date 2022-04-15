<script>

import Comment from './comment.vue';

export default {
    name: "Post",
    components: {
        Comment
    },
}

</script>

<template>
<div id="post">
    <div class="card mb-3 m-auto">
        <div class="card-header">
            <img src="../../assets/images/CV Julien (4).png" class="rounded-circle" alt="Avatar">
            Julien Beral
        </div>
        <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Titre</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Comment></Comment>
            
            <div class="add_comment">
            <div class="d-flex">
                <img src="https://picsum.photos/50" class="card-img-top rounded-circle commentpp" alt=".." />
                <input type="text" contenteditable="true" class="form-control" placeholder="Ajouter un commentaire" aria-label="Username">
                <button type="button" class="btn btn-outline-light ml-auto">Envoyer</button>

                </div>
            </div>


            </div>

        </div>
    </div>
</template>

<style>

#post .btn-outline-light {
    color: #965858;
    border-color: transparent;
}

#post .btn-outline-light:hover {
    background-color: #ffd7d7;
}

#post .add_comment {
    margin-top: 2em;
}

#post .commentpp {
    width: 35px !important;
    height: 35px !important;
    object-fit: cover;
    margin-right: 1rem;
}

#post
.card {
    width: 35rem;
}

#post
.card-header img {
    width: 50px !important;
    height: 50px !important;
    object-fit: cover;
}
</style>