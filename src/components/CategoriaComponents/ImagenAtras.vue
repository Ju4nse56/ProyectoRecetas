<template>
    <div class="boton-atras-container" @click="navigateToHome()">
        <img class="imgAtras" src="@/assets/imgCategories/Atras1.png" alt="Botón atrás" />
    </div>
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

<style scoped>
.boton-atras-container {
    width: 40px;
    height: 40px;
    background-color: #f7f6f6;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding-left: 8px;
    cursor: pointer;
}

.imgAtras {
    height: 50%;
    width: 50%;
    object-fit: contain;
}
</style>