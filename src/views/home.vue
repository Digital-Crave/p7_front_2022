<script>

import Post from '../components/post.vue';
import Header from '../components/header.vue';
import CreatePost from '../components/createpost.vue';

export default {
    name: "Forum",
    components: {
        Post,
        Header,
        CreatePost
    }, 
}

</script>

    <template>
    <Header></Header>
    <div id="forum">
        <h1>Fil d'actualité</h1>
          <CreatePost></CreatePost>
            <Post></Post>
            <Post></Post>
            <Post></Post>
    </div>
</template>
      
<style>

#forum h1 {
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
}


</style>
