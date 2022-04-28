<script>

import Header from '../components/header.vue';

export default {
  name: "Profile",
  components: {
    Header,
  },
  data() {
    return {
      user : {
        firstname : "",
        name : "",
        email : "",
        profil_picture : "",
        id : "",
      },
      newImage: "",
      file : null,
      posts : [],
    };
  },
  mounted() {
    this.getUser();
  },
  methods : {
    getUser () {

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
                window.location.reload();
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
        uploadImage()  {
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
                  <img v-if="user.profil_picture" :src="user.profil_picture" alt="..." class="avatar-img rounded-circle">
                </span>
                <div class="mt-3">
                  <h4>{{user.firstname}} {{user.name}}</h4>
                  <label for="File" class="btn btn-secondary" >Ajouter une image</label>
                <button type="button" class="btn btn-outline-primary ms-auto delete" @click="deleteImage">Supprimer l'image</button>
                <input v-on:change="uploadImage" type="file" ref="file" name="image" class="form-control-file" id="File" accept=".jpg, .jpeg, .gif, .png">
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
                      <button type="submit" class="btn btn-outline-primary ms-auto" @click="deleteUser()">Supprimer mon compte</button>
                      <button type="submit" class="btn btn-outline-primary ms-auto" @click="updateUser()">Sauvegarder</button>
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
#profile body {
  text-align: left;
}

#profile .main-body {
  padding: 15px;
  margin-top: 7rem;
}

#profile .card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: 1px 1px 9px 1px #ffd7d7;
  border: 1px solid transparent !important;
}


#profile .info {
  box-shadow: none;
}

#profile .card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
  border: none;
  box-shadow: none;
}

#profile .gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

#profile .gutters-sm>.col,
.gutters-sm>[class*=col-] {
  padding-right: 8px;
  padding-left: 8px;
}

#profile .mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

#profile .bg-gray-300 {
  background-color: #e2e8f0;
}

#profile .h-100 {
  height: 100% !important;
}

#profile .shadow-none {
  box-shadow: none !important;
}

@media (min-width: 768px) {

  #profile .col-md-8 {
    width: 100%;
  }


}

#profile .btn-outline-primary {
  border-color: transparent;
  color: #965858;
}

#profile .btn-outline-primary:hover {
  background-color: #ffd7d7;
}

#profile .btn-outline-primary:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

#profile .btn-secondary {
  color: #965858;
  background-color: transparent;
  border-color: transparent;
}

#profile .btn-secondary:hover {
  background-color: #ffd7d7 !important;
}

#profile .btn-secondary:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

#profile .form-control-file {
  display: none;
}

#profile label [for="file-input"] {
  background-color: red;
}

#profile label {
  display: inline-block !important;
}
</style>