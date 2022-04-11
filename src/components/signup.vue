<script>

export default {
  name: 'Signup',
  data() {
    return {
      form: {
        name: '',
        firstname: '',
        email: '',
        password: '',
      },
      errors: {}
    }
  },

  methods: {
    signup() {
      let data = {
        name: this.name,
        firstname: this.firstname,
        email: this.email,
        password: this.password,
      };
      
            const regexText = /^[a-zA-Z-\s]+$/;
      const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/; // eslint-disable-line
      const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,50}$/;
      if (this.name === "") {
          alert("Veuillez remplir votre nom");
      } else if (regexText.test(this.name) === false) {
          alert("Veuillez vérifier que l'écriture de votre nom soit uniquement en lettre");}
      
      if (this.firstname === "") {
          alert("Veuillez remplir votre prénom");
      } else if (regexText.test(this.firstname) === false) {
          alert("Veuillez vérifier que l'écriture de votre prénom soit uniquement en lettre");}
      if (this.email === "") {
          alert("Veuillez remplir votre adresse email");
      } else if (regexEmail.test(this.email) === false) {
          alert("Veuillez écrire une adresse email valide");}
      if (this.password === "") {
          alert("Veuillez remplir votre mot de passe");
      } else if (regexPassword.test(this.password) === false) {
          alert("Veuillez vérifier l'écriture de votre mot de passe, il doit contenir au moins une majuscule, une minuscule ainsi qu'un chiffre");
      }else if ((regexText.test(this.name) === true) && regexText.test(this.firstname) === true && regexEmail.test(this.email) === true && regexPassword.test(this.password) === true ) {
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
              return response.json()
            } else {
              const text = await response.text();
              throw new Error(text);
            }
          })
          .then(data => {
            localStorage.setItem('token', data.token);
            this.$router.push('/home');
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  }
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

<style>
@import url(../../style/signup.css);
</style>