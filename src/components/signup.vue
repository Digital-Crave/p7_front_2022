<script>

import axios from "axios"

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
            errors: [],
        }
    },
    methods: {
        signup() {
            axios.post('/api/auth/signup', this.form)
                .then(response => {
                    this.$router.push('/login')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
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
                  <b-form-input
                    id="input-1"
                    class="mb-3 input"
                    v-model="name"
                    maxlength="10"
                    required
                    placeholder="Entrez votre nom"
                    @keyup.enter="signup"
                  ></b-form-input>
                  <label for="firstname">Prénom</label>
                  <b-form-input
                    id="input-1"
                    class="mb-3 input"
                    v-model="firstname"
                    maxlength="10"
                    required
                    placeholder="Entrez votre prénom"
                    @keyup.enter="signup"
                  ></b-form-input>
                  <label for="email-adress">Adresse email</label>
                  <b-form-input
                    id="input-2"
                    class="mb-3 input"
                    v-model="email"
                    type="email"
                    maxlength="30"
                    required
                    placeholder="Entrez votre adresse email"
                    @keyup.enter="signup"
                  ></b-form-input>
                  <label for="password">Mot de passe</label>
                  <b-form-input
                    id="input-3"
                    class="input"
                    v-model="password"
                    type="password"
                    maxlength="16"
                    required
                    placeholder="Entrez votre mot de passe"
                    @keyup.enter="signup"
                  ></b-form-input>
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
            <b-button pill class="submit-button" type="submit" @click="signup" >Inscription</b-button>
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