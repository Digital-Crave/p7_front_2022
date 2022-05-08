<script>

export default {
    name: "createpost",
    data() {
        return {
            newImage: "",
            title: "",
            content: "",
            userId: "",
            file : null,
            error: "",
            id : "",
            isHidden : true,
        };
    },
    methods: {
        createPost() {

            const id = JSON.parse(localStorage.getItem("userId"));
            const token = JSON.parse(localStorage.getItem("token"));

            if (this.title === '') {
                this.error = "Veuillez remplir le titre";
            }         
            if (this.content === '') {
                this.error = "Veuillez remplir le contenu";
            }       
            if (this.image != '' && this.title != '' && this.content != '') {

                let formData = new FormData();
                formData.append("image", this.file);
                formData.append("title", this.title);
                formData.append("content", this.content);
                formData.append("userId", id);
                formData.append("id", this.id);
                fetch("http://localhost:3001/api/posts",
                    {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                        body: formData,           
                    })
                    .then(response => {
                        if (response.ok) {
                            this.title = "";
                            this.content = "";
                            this.file = null;
                            this.userId = "";
                            this.id = "";
                            this.$emit("function");
                        } else {
                            this.error = "Something went wrong";
                        }
                    })
            } else if ( this.image === '' && this.title != '' && this.content != '') {
                    
                let formData = new FormData();
                formData.append("title", this.title);
                formData.append("content", this.content);
                formData.append("userId", id);
                formData.append("id", this.id);
                fetch("http://localhost:3001/api/posts",
                    {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                        body: formData,           
                    })
                    .then(response => {
                        if (response.ok) {
                            this.title = "";
                            this.content = "";
                            this.userId = "";
                            this.id = "";
                            this.$emit("function");
                        } else {
                            this.error = "Something went wrong";
                        }
                    })
            }
        }, 
        deleteImage() {
            this.newImage = "";
            this.isHidden = true;
        },
        uploadImage()  {
            this.file = this.$refs.file.files[0];
            this.newImage = URL.createObjectURL(this.file)
        }, 
    }
}






</script>

<template>
    <div id="createpost">
        <div class="col-12 justify-content-center text-center">
                <img :src="newImage" class="rounded " alt="">
                <p class="text-center"></p>
            </div>
        <div class="container-md">
            <div class="form-floating">
                <input type="text" class="form-control" v-model="title" id="title" contenteditable="true" name="message" rows="8" placeholder="title"/>
                <label for="title" class="form-label">Titre du post</label>
            </div>
            <div class="form-floating">
                <textarea v-model="content" class="form-control" placeholder="content" contenteditable="true" rows="10" cols="40" required aria-label="Message du post"></textarea>
                <label for="content" class="form-label">Écrire un post</label>
            </div>

            <div class="d-flex">
                <label for="File" class="btn btn-secondary" >Ajouter une image</label>
                <button type="button" class="btn btn-outline-primary ms-auto delete" v-if="!isHidden" @click="deleteImage">Supprimer l'image</button>
                <input v-on:change="uploadImage(), isHidden = false" type="file" ref="file" name="image" class="form-control-file" id="File" accept=".jpg, .jpeg, .gif, .png">
                <button type="submit" class="btn btn-outline-primary ms-auto" @click="createPost(), deleteImage()">Poster</button>
            </div>
            <hr class="dropdown-divider mt-3" />
        </div>
    </div>


</template>

<style>
@import url(../../style/createpost.css);
</style>