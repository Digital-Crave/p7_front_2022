<script>

import Posts from '../components/posts.vue';
import Header from '../components/header.vue';
import CreatePost from '../components/createpost.vue';

export default {
    name: "Forum",
    components: {
        Posts,
        Header,
        CreatePost,
    }, 
    data() {
        return {
            posts: [],
        }
    },
    mounted() {
        this.getAllPosts();
    },
    methods: { 
        getAllPosts() {
            const token = JSON.parse(localStorage.getItem("token"));

            fetch(`http://localhost:3001/api/posts`,
                {
                    method: "GET",
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
                    this.posts = data;
                })
        },
}
}

</script>

    <template>
    <Header></Header>
    <div id="forum">
        <h1>Fil d'actualité</h1>
        <CreatePost @function="getAllPosts"></CreatePost>
        <Posts :data="this.posts" @function="getAllPosts"></Posts>
    </div>
</template>
      
<style>

#forum h1 {
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
}


</style>
