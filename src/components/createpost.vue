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

#floatingTextarea {
    height: auto;
}

#createpost .btn {
    margin-top: 2px;
}

#createpost .btn-outline-primary {
    border-color: transparent;
    color: #965858;
}

#createpost .btn-outline-primary:hover {
    background-color: #ffd7d7;
}

#createpost .btn-outline-primary:focus {
    box-shadow: none;
}

#createpost .btn-secondary {
    color: #965858;
    background-color: transparent;
    border-color: transparent;
}

#createpost .btn-secondary:hover {
    background-color: #ffd7d7 !important;
}

#createpost .btn-secondary:focus {
    box-shadow: none;
}

input {
    display: none;
}

#createpost label [for="file-input"] {
    background-color: red;

}

#createpost label {
    display: inline-block !important;
}

</style>