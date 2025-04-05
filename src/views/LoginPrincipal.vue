<template>

  <div class="ContenedorLogin">

    <LoginHome />
  </div>
</template>

<script>
import LoginHome from '@/components/LoginComponents/LoginHome.vue';
//import LoginHome2 from'@/components/LoginComponents/LoginHome2.vue';

export default {
    components: {
        LoginHome
        //LoginHome2
    }
}
</script>

<style>
    .ContenedorLogin{
        width: 800px;
        height: 500px;
    }
</style>