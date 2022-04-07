<script>

import axios from "axios"

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    login() {
      axios.post('/api/login', this.form)
        .then(response => {
          this.$router.push('/')
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    }
  }
}

</script>

<template>
  <b-container>
    <b-row align-h="center">
      <b-col class="text-center" sm="10" lg="8">
        <img
          class="icon-name"
          src="../../assets/images/icon-above-font3.png"
          alt="Logo and company name"
        />
        <h1 class="pb-4">Bienvenue sur votre réseau social d'entreprise</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12" sm="10" md="10" lg="8">
        <h2 class="mb-3">Connectez-vous</h2>

        <!--Formulaire de connexion-->
        <b-row>
          <b-col cols="12" offset-sm="1" sm="10" offset-md="2" md="8" offset-lg="2" lg="8">
            <b-card class="identification-box">
              <div>
                <b-form>
                  <label for="email-adress">Adresse email </label>
                  <b-form-input
                    class="mb-3 input"
                    id="input-1"
                    v-model="email"
                    type="email"
                    required
                    placeholder="Entrez votre adresse email"
                    @keyup.enter="login"
                  ></b-form-input>
                  <label for="password">Mot de passe </label>
                  <b-form-input
                    class="input"
                    id="input-2"
                    v-model="password"
                    type="password"
                    required
                    placeholder="Entrez votre mot de passe"
                    @keyup.enter="login"
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
              Pas encore de compte ?
              <router-link to="/signup">S'inscrire</router-link>
            </p>
          </b-col>
          <b-col class="mb-3" cols="12" sm="4" md="3" lg="3">
            <b-button pill class="submit-button" type="submit" @click="login">Connexion</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style type="text/css">
@import url(../../style/login.css);
</style>