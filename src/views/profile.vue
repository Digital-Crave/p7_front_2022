<script>

import Header from '../components/header.vue';

export default {
  name: "Profile",
  components: {
    Header,
  },
  data() {
    return {
      user: {
        firstname: "",
        name: "",
        email: "",
        profil_picture: "",
        id: "",
      },
      newImage: "",
      file: null,
      posts: [],
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {

      const id = JSON.parse(localStorage.getItem("userId"));
      const token = JSON.parse(localStorage.getItem("token"));

      fetch(`http://localhost:3001/api/auth/${id}`,
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
          this.user = data;
        })
    },
    updateUser() {

      const id = JSON.parse(localStorage.getItem("userId"));
      const token = JSON.parse(localStorage.getItem("token"));

      if (this.user.profil_picture != '') {

        let formData = new FormData();
        formData.append("image", this.file);
        formData.append("id", id);
        fetch(`http://localhost:3001/api/auth/${id}`,
          {
            method: "PUT",
            headers: {
              "Authorization": `Bearer ${token}`,
            },
            body: formData,
          })
          .then(response => {
            if (response.ok) {
              this.user.profil_picture = "";
              this.file = null;
              this.getUser();
            } else {
              this.error = "Something went wrong";
            }
          })
      } else {
        this.error = "Veuillez remplir le champ";
      }
    },
    deleteUser() {

      const id = JSON.parse(localStorage.getItem("userId"));
      const token = JSON.parse(localStorage.getItem("token"));

      fetch(`http://localhost:3001/api/auth/${id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })
        .then(response => {
          if (response.ok) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            window.location.href = "/signup";
          } else {
            this.error = "Something went wrong";
          }
        })

    },
    deleteImage() {
      this.user.profil_picture = "";
    },
    uploadImage() {
      this.file = this.$refs.file.files[0];
      this.user.profil_picture = URL.createObjectURL(this.file)
    },
  }
}

</script>

<template>
  <Header></Header>

  <div id="profile">
    <div class="container">
      <div class="main-body">

        <div class="row gutters-sm">
          <div class="card col-md-12 mb-3 p-0 ">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <span class="avatar mb-3">
                  <b-img v-bind="mainProps" v-if="user.profil_picture" :src="user.profil_picture" class="avatar2" rounded="circle"  alt="Photo de profil" ></b-img>
                </span>
                <div class="mt-3">
                  <h4>{{ user.firstname }} {{ user.name }}</h4>
                  <label for="File" class="btn btn-secondary">Ajouter une image</label>
                  <button type="button" class="btn btn-outline-primary ms-auto delete" @click="deleteImage">Supprimer
                    l'image</button>
                  <input v-on:change="uploadImage(), updateUser()" type="file" ref="file" name="image"
                    class="form-control-file" id="File" accept=".jpg, .jpeg, .gif, .png">
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row gap-3 p-0 ">
            <div class="card col-md-8">
              <div class="mb-3">
                <div class="card-body info">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Nom</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <p class="mb-0">{{ user.name }}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Prénom</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <p class="mb-0">{{ user.firstname }}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <p class="mb-0">{{ user.email }}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <button type="submit" class="btn btn-outline-primary ms-auto" @click="deleteUser()">Supprimer mon
                        compte</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<style>

@import url("../../style/profile.css");

</style>