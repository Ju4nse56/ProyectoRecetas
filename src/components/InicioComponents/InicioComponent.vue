<template>
  <div class="welcome-container">
    <div class="content-side">
      <h1 class="title">Es tiempo de cocinar</h1>
      <p class="description">
        Cocinar no es difícil, solo es cuestión de atreverse. Con un poco de práctica, paciencia y pasión, cualquiera
        puede crear platos deliciosos. ¡Incluso los chefs más expertos empezaron desde cero! Aquí encontrarás todo lo
        que necesitas para dar tus primeros pasos (o perfeccionar tus habilidades). ¿Listo para sorprenderte a ti
        mismo?"
      </p>
      <button class="start-button" @click="navigateToLogin">
        » Empezar
      </button>
    </div>
    <div class="image-side">
      <img :src="require('@/assets/Logo/logo-removebg-preview.png')" alt="" class="imagen">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InicioCmponent',

  methods: {
    navigateToLogin() {
      this.$router.push('/loginPrincipal');
    }
  }

}
</script>

<style scoped>
.welcome-container {
  display: flex;
  height: 500px;
  padding: 0 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;


}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  margin-bottom: 30px;
  color: #333;
  max-width: 400px;
  text-align: justify;
}

.start-button {
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px auto;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  width: fit-content;
}

.image-side {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  position: relative;
}

.placeholder-image:before,
.placeholder-image:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #000;
  top: 50%;
  left: 0;
  transform: rotate(45deg);
  transform-origin: center;
}

.placeholder-image:after {
  transform: rotate(-45deg);
}

.imagen {
  width: 400px;
  height: 400px;
}

@media (max-width: 768px) {
  .welcome-container {
    background-color: #fff;
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 20px 10px;
    border-radius: 0;
    box-shadow: none; 
  }

  .image-side {
    margin-top: 70px;
    order: -1;

  }

  .imagen {
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  .content-side {
    align-items: center;
    text-align: center;
    margin: 30% auto;
  }


  .description {
    max-width: 100%;
    font-size: 14px;
    margin-top: 10px;
  }

  .start-button {
    width: 100%;
    max-width: 250px;
  }
}
</style>
