<template>
    <div class="login-box2">

        <h2>Bienvenido</h2>
        <br>

        <div class="input-group">
            <input v-model="user.email" type="email" placeholder="E-mail">
        </div>
        <br>
        <div class="input-group">
            <input v-model="user.password" type="password" placeholder="Contraseña">
        </div>
        <br>

        <button class="login-btn" @click="login">Log in</button>
    </div>
</template>

<script>
export default {
    name: 'LoginHome',
    
    data(){
        return{
            user: {
                email: "",
                password: ""
            },
            token: ""
        }
    },

    methods: {
    navigateToHome() {
      this.$router.push('/HomeView');
    },

    login: async function() {
        try {
          const url = "http://127.0.0.1:8000/api/login";
          const response = await this.axios.post(url, this.user);
          if (response.data.status === 200) {
            this.token = response.data.token;
            localStorage.setItem('token', response.data.token);
            this.navigateToHome()
          } else {
            alert(response.data.message);
          }
        } catch (error) {
          if (error.response && error.response.data) {
            alert(error.response.data.message || "Error en la solicitud") +
              (error.response.data.errors ? ": " + JSON.stringify(error.response.data.errors) : "");
          } else {
            this.error = "Error en la solicitud";
          }
        } finally {
          console.log("Proceso terminado");
        }
    }
  }

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f4f4f4;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    background: none;
    outline: none;
}

.login-btn {
    width: 70%;
    padding: 10px;
    background: black;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
}

.forgot-password {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
}

.login-box2 {
    width: 100%;
    height: 60%;
}

</style>