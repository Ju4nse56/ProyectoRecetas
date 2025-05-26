<template>
  <button @click="logout">Log out</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    logout: async function () {
      try {
        const url = "http://127.0.0.1:8000/api/logout";
        await this.axios.post(
          url,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        localStorage.removeItem('token');
        delete this.axios.defaults.headers.common['Authorization'];
        this.$router.push('/loginPrincipal');
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message || "Error en la solicitud") +
            (error.response.data.errors
              ? ": " + JSON.stringify(error.response.data.errors)
              : "");
        } else {
          this.error = "Error en la solicitud";
        }
      } finally {
        console.log("Proceso terminado");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 480px) {
  #app {
    width: 100%;
  }
}
</style>
