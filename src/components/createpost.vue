<script>

export default {
    name: "createpost",
    }


</script>

<template>
<div id="createpost">
            <div class="container-md">
            <div class="form-floating">
                <div class="form-control" contenteditable="true" placeholder="Leave a comment here"
                    id="floatingTextarea"></div>
                <label for="floatingTextarea">Écrire un post</label>
            </div>

            <div class="d-flex">
                <label for="file-input" class="btn btn-secondary">Ajouter une image</label>
                <input id="file-input" type="file" />
                <button type="button" class="btn btn-outline-primary ms-auto">Poster</button>
            </div>
            <hr class="dropdown-divider mt-3" />
            </div>
</div>


</template>

<style>

@import url(../../style/createpost.css);

</style>