// add other functions here

export default class LoginConnection {
    constructor() {
        login(); {
            let data = {
                email: this.email,
                password: this.password
            };

            if (this.email === "") {
                this.error = "Veuillez remplir votre adresse email";
            } else if (this.emailRegex.test(this.email) === false) {
                this.error = "Veuillez écrire une adresse email valide";
            }

            if (this.password === "") {
                this.error = "Veuillez remplir votre mot de passe";
            } else if (this.passwordRegex.test(this.password) === false) {
                this.error = "Veuillez vérifier l'écriture de votre mot de passe, il doit contenir au moins une majuscule, une minuscule ainsi qu'un chiffre";

            } else if ((this.emailRegex.test(this.email) === true) && (this.passwordRegex.test(this.password) === true)) {
                fetch("http://localhost:3001/api/auth/login", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(async (response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            const text = await response.text();
                            throw new Error(text);
                        }
                    })
                    .then(data => {
                        localStorage.setItem('token', token.token);
                        this.$router.push('/home');
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                    });
            }
        }
    }
}
