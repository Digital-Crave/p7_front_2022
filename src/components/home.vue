<script>

import Post from './post.vue';
import Header from './header.vue';

export default {
    name: "Forum",
    components: {
        Post,
        Header
    }, 
}

</script>

    <template>
    <Header></Header>
    <div id="forum">
        <h1>Fil d'actualité</h1>
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
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    </div>
</template>
      
<style>

#floatingTextarea {
    height: auto;
}

#forum h1 {
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
}

#forum .btn {
    margin-top: 2px;
}

#forum .btn-outline-primary {
    border-color: transparent;
    color: #965858;
}

#forum .btn-outline-primary:hover {
    background-color: #ffd7d7;
}

#forum .btn-outline-primary:focus {
    box-shadow: none;
}

#forum .btn-secondary {
    color: #965858;
    background-color: transparent;
    border-color: transparent;
}

#forum .btn-secondary:hover {
    background-color: #ffd7d7 !important;
}

#forum .btn-secondary:focus {
    box-shadow: none;
}

input {
    display: none;
}

#forum label [for="file-input"] {
    background-color: red;

}

#forum label {
    display: inline-block !important;
}
</style>
