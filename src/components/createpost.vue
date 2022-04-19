<script>

export default {
    name: "createpost",
    data() {
        return {
            image: "",
            title: "",
            content: "",
            user_id: "", 
        };
    },

    methods: {

}
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
                <label for="file-input" class="btn btn-secondary" @click="sendImage">Ajouter une image</label>
                <input id="file-input" type="file" />
                <button type="button" class="btn btn-outline-primary ms-auto" @click="createPost">Poster</button>
            </div> 
            <hr class="dropdown-divider mt-3" />
            </div>
</div>


</template>

<style>

@import url(../../style/createpost.css);

</style>