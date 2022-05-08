<script>

export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      firstname: '',
      email: '',
      password: '',
      error: "",
      nameRegex: /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
      emailRegex: (/^[A-Za-z0-9+_.-]+@(.+)$/),
      passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    };
  },

  methods: {
    signup() {
      let data = {
        name: this.name,
        firstname: this.firstname,
        email: this.email,
        password: this.password
      };

      if (this.name === "") {
        this.error = "Veuillez remplir votre nom";
      } else if (this.nameRegex.test(this.name) === false) {
        this.error = "Veuillez écrire un nom valide";
      }

      if (this.firstname === "") {
        this.error = "Veuillez remplir votre prénom";
      } else if (this.nameRegex.test(this.firstname) === false) {
        this.error = "Veuillez écrire un prénom valide";
      }

      if (this.email === "") {
        this.error = "Veuillez remplir votre adresse email";
      } else if (this.emailRegex.test(this.email) === false) {
        this.error = "Veuillez écrire une adresse email valide";
      }

      if (this.password === "") {
        this.error = "Veuillez remplir votre mot de passe";
      } else if (this.passwordRegex.test(this.password) === false) {
        this.error = "Veuillez vérifier l'écriture de votre mot de passe, il doit contenir au moins une majuscule, une minuscule, un chiffre ainsi qu'un caractère spécial";

      } else if ((this.nameRegex.test(this.name) === true) && (this.nameRegex.test(this.firstname) === true) && (this.emailRegex.test(this.email) === true) && (this.passwordRegex.test(this.password) === true)) {
        signupConnection(data);
      }
    }
  }
}

function signupConnection(data) {
  fetch("http://localhost:3001/api/auth/signup", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(async response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then(() => {
      window.location.href = "http://localhost:3000/login";
    })
    .catch(error => {
      this.error = error.message;
    });
}

</script>

<template>
  <div id="signup">
    <b-container>
      <b-row align-h="center">
        <b-col class="text-center" sm="10" lg="8">
          <router-link to="/login">
            <img class="icon-name" src="../../assets/images/icon.svg" alt="Logo and company name" />
          </router-link>
          <h1 class="pb-4">Bienvenue sur votre réseau social d'entreprise</h1>
        </b-col>
      </b-row>

      <!--Formulaire d'inscription-->
      <b-row align-h="center">
        <b-col cols="12" sm="10" md="10" lg="8">
          <h2 class="mb-3">Inscrivez-vous</h2>
          <b-row>
            <b-col cols="12" offset-sm="1" sm="10" offset-md="1" md="10" offset-lg="2" lg="8">
              <b-card class="identification-box">
                <div>
                  <b-form>
                    <label for="name">Nom</label>
                    <b-form-input id="input-1" class="mb-3 input" v-model="name" maxlength="10" required
                      placeholder="Entrez votre nom" @keyup.enter="signup"></b-form-input>
                    <label for="firstname">Prénom</label>
                    <b-form-input id="input-1" class="mb-3 input" v-model="firstname" maxlength="10" required
                      placeholder="Entrez votre prénom" @keyup.enter="signup"></b-form-input>
                    <label for="email-adress">Adresse email</label>
                    <b-form-input id="input-2" class="mb-3 input" v-model="email" type="email" maxlength="30" required
                      placeholder="Entrez votre adresse email" @keyup.enter="signup"></b-form-input>
                    <label for="password">Mot de passe</label>
                    <b-form-input id="input-3" class="input" v-model="password" type="password" maxlength="16" required
                      placeholder="Entrez votre mot de passe" @keyup.enter="signup"></b-form-input>
                  </b-form>
                </div>
              </b-card>
              <p class="error-message font-weight-bold text-center mt-2">{{ error }}</p>
            </b-col>
          </b-row>
          <b-row class="mt-2 switch-page">
            <b-col cols="12" offset-sm="1" sm="6" offset-md="2" md="5" offset-lg="2" lg="5">
              <p>
                Déjà inscrit ?
                <router-link to="/login">Se connecter</router-link>
              </p>
            </b-col>
            <b-col class="mb-3" cols="12" sm="4" md="3" lg="3">
              <b-button pill class="submit-button" type="submit" @click="signup">Inscription</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style >

@import url(../../style/signup.css);

</style>