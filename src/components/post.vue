<script>

export default {
    name: "Post"
}

</script>

<template>
<div id="post">
    <div class="card mb-3 m-auto">
        <div class="card-header">
            <img src="../../assets/images/CV Julien (4).png" class="rounded-circle" alt="Avatar">
            Julien Beral
        </div>
        <img src="../../assets/images/CV Julien (4).png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Titre</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>
</template>

<style>

#post
.card {
    width: 30rem;
}

#post
.card-header img {
    width: 50px !important;
    height: 50px !important;
    object-fit: cover;
}
</style>