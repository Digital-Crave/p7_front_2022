<script>

export default {
    name: "Comment",
    props : {
        post_id : {
            type : Number,
        },
    },
    data() {
        return {
            comments: [], 
        }
    },
    mounted() {
                this.getComments();
            },
    methods : {

        createComment() {

             if ( this.content === "" ) {
                this.error = "Veuillez remplir votre commentaire";
            } else { 
                   
                const id = JSON.parse(localStorage.getItem("userId"));
                const token = JSON.parse(localStorage.getItem("token"))

                let data = {
                    content: this.content,
                    userId: id,
                    post_id: this.post_id,
                };

                fetch("http://localhost:3001/api/comments/",
                    {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify(data),           
                    })
                    .then(data => {
                        if (data.ok) {
                            this.content = "";
                            this.userId = "";
                            this.post_id = "";
                            this.getComments();
                        } else {
                            this.error = "Something went wrong";
                        }
                    })

            }


           
            },   

            getComments() {

                const token = JSON.parse(localStorage.getItem("token"));

                fetch("http://localhost:3001/api/comments/",
                    {
                        method: "GET",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
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
                        this.comments = data;
                    })
            },
            getCommentsByPostId() {

                const token = JSON.parse(localStorage.getItem("token"));

                fetch("http://localhost:3001/api/comments/:post_id",
                    {
                        method: "GET",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
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
                        this.comments = data;
                    })
            },
}
}



</script>

<template>
<div id="comment">  
<div class="d-flex" v-for="comment in comments" :key="comment.id">
    <img src="https://picsum.photos/50" class="card-img-top rounded-circle" alt=".." />
    <div class="d-flex flex-column comment_content">
     <p>{{comment.user.firstname}} {{comment.user.name}}</p> 
     <p class="commenText">{{comment.content}}</p>
    </div>
    </div>
     <div class="add_comment">
                    <div class="d-flex">
                        <img src="https://picsum.photos/50" class="card-img-top rounded-circle commentpp" alt=".." />
                        <input type="text" contenteditable="true" class="form-control"
                            placeholder="Ajouter un commentaire" v-model="content" id="content" aria-label="Username">
                        <button type="button" class="btn btn-outline-light ml-auto" @click="createComment">Envoyer</button>

                    </div>
                </div>
</div>


</template> 

<style>

@import url(../../style/comment.css);

</style>