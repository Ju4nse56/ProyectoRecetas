<template>
    <img 
        src="@/assets/imgCategories/Atras1.png" 
        alt="" 
        style="height: 65%; width: 100%;" 
        @click="navigateToHome()"
    />
</template>

<script>
export default {
    name: 'ImagenAtras',
    
    methods: {
        navigateToHome() {
            this.$router.push('/HomeView');
        }
    }
}
</script>

<style>
</style>

