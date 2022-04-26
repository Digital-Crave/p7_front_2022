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

    methods: { 
        
    }
}

</script>

    <template>
    <Header></Header>
    <div id="forum">
        <h1>Fil d'actualité</h1>
        <CreatePost></CreatePost>
            <Posts></Posts>
    </div>
</template>
      
<style>

#forum h1 {
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
}


</style>
