<script>

export default {
    name: "Comment",
}

</script>

<template>
<div id="comment">
<div class="d-flex">
    <img src="https://picsum.photos/50" class="card-img-top rounded-circle" alt=".." />
    <div class="d-flex flex-column comment_content">
     <p>Léa Mancinelli</p>
     <p>Le commentaire en question ,razeae ae zae az zea zeza eazeaze rfazrararz</p>
    </div>
    </div>
</div>


</template> 

<style>

#comment {
    margin-top: 1.5rem;
}

#comment img {
    width: 35px !important;
    height: 35px !important;
    object-fit: cover;
}

.comment_content {
    margin-left: 1rem;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.5rem;
}

.comment_content p:nth-child(1) {
    font-weight: bold;
}

</style>