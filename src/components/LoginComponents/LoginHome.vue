<template>
    <div class="login-box2">

        <h2>Bienvenido</h2>
        <br>

        <div class="input-group">
            <input type="email" placeholder="E-mail">
        </div>
        <br>
        <div class="input-group">
            <input type="password" placeholder="Contraseña">
        </div>
        <br>

        <button class="login-btn" @click="navigateToHome">Log in</button>
    </div>
</template>

<script>
export default {
    name: 'LoginHome',

    methods: {
    navigateToHome() {
      this.$router.push('/HomeView');
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