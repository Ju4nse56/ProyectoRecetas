<template>
    <div class="boton-atras-container" @click="navigateToHome()">
        <div class="boton-atras-circular">
            <img class="imgAtras" src="@/assets/imgCategories/Atras1.png" alt="Botón atrás" />
        </div>
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding-left: 10px;
}

.boton-atras-circular {
    width: 80px;
    height: 30px;
    background-color: #f2f2f2;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.imgAtras {
    height: 50%;
    width: 50%;
    object-fit: contain;
}
</style>