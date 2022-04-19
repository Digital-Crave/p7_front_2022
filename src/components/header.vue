<script>


export default {
    name: "Header",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push("/login");
        },
        profil() {
            this.$router.push("/profile");
        },
        refresh() {
            this.$router.push("/home");
        }
    }
}

</script>

<template> 
<div id="header">
<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <img src="../../assets/images/icon.png" alt="logo">
          <li><a href="#" class="nav-link px-2 text-white" @click="refresh">Accueil</a></li>
        </ul>
    <h1 class="text-center">Groupomania</h1>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2" @click="profil">Profil</button>
          <button type="button" class="btn btn-warning" @click="logout">Se déconnecter</button>
        </div>
      </div>
    </div>
  </header>
</div>
</template>

<style>

@import url(../../style/header.css);

</style>