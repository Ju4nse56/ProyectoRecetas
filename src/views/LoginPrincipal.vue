<template>
  <div class="ContenedorLogin">
    <div class="image-placeholder">
      <img :src="require('@/assets/LoginLogo/PolloSalseado.jpg')" alt="" class="imagen">
    </div>
    <div class="login-box">
      <div class="form-box">
        <div class="button-box">
          <div id="btn" :style="{ left: activeComponent === 'login' ? '0' : '100px' }"></div>
          <button type="button" class="toggle-btn" @click="toggleComponent('login')">Log in</button>
          <button type="button" class="toggle-btn" @click="toggleComponent('signup')">SignUp</button>
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
.ContenedorLogin {
  display: flex;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  height: 500px;

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
}

.imagen {
  width: 100%;
  height: 100%;
}

.login-box {
  width: 50%;
  height: 100%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

/*toggle*/
.button-box {
  width: 250px;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
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
  padding: 10px 40px;
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
</style>
