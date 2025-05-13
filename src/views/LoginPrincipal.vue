<template>
  <div class="ContenedorLogin">
    <div class="image-placeholder">
      <img :src="require('@/assets/LoginLogo/PolloSalseado.jpg')" alt="" class="imagen">
    </div>
    <div class="login-box">
      <div class="form-box">
        <div class="button-box">
          <div id="btn" :style="{ left: activeComponent === 'login' ? '0' : '50%' }"></div>
          <button type="button" class="toggle-btn" @click="toggleComponent('login')">Log in</button>
          <button type="button" class="toggle-btn" @click="toggleComponent('signup')">Sign up</button>
        </div>
      </div>

      <LoginHome v-if="activeComponent === 'login'" />
      <LoginHome2 v-if="activeComponent === 'signup'" />
    </div>
  </div>
</template>

<script>
import LoginHome from '@/components/LoginComponents/LoginHome.vue';
import LoginHome2 from '@/components/LoginComponents/LoginHome2.vue'; 

export default {
  components: {
    LoginHome,
    LoginHome2
  },
  data() {
    return {
      activeComponent: 'login'
    }
  },
  methods: {
    toggleComponent(component) {
      this.activeComponent = component;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body, html {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  overflow: hidden;
}

.ContenedorLogin {
  display: flex;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  height: 500px;
  margin: auto;
  overflow: hidden;
}

.image-placeholder {
  width: 50%;
  height: 100%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 20px;
  overflow: hidden;
}

.imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-box {
  width: 50%;
  height: 100%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

/*toggle*/
.button-box {
  width: 220px;
  height: 40px;
  margin: 0 auto 20px;
  position: relative;
  border-radius: 30px;
  background: #fff;
  display: flex; 
  justify-content: space-between; 
  overflow: hidden; 
}

.toggle-btn {
  height: 100%; 
  font-size: 14px;
  line-height: 40px; 
  flex: 1;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: color 0.3s;
}

#btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #FFD464;
  border-radius: 30px;
  transition: 0.5s;
  z-index: 0;
}

/* Media Queries para dispositivos móviles */
@media (max-width: 500px) {
  .ContenedorLogin {
    flex-direction: column;
    width: 100vw; 
    height: 100vh; 
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    margin: 0;
  }

  .image-placeholder {
    width: 100%;
    height: 35vh; 
    margin-right: 0;
    margin-bottom: 0;
    border-radius: 0;
  }

  .login-box {
    width: 100%;
    height: 65vh; 
    border-radius: 25px 25px 0 0;
    padding: 20px;
    margin-top: -20px;
    position: relative;
    z-index: 10;
    background: #f0f0f0;
  }

  .button-box {
    width: 200px;
    margin-bottom: 25px;
  }
}
</style>
