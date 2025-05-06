<template>
    <div class="search-layout">
        <div class="atras">
            <ImagenAtras />
        </div>
        <div class="search-container">
            <input type="text" placeholder="Buscar" class="search-input">
            <div class="filter">
                <img class="icon" :src="require('@/assets/imgSearch/filtrar.png')" alt="Filtrar" />
            </div>
        </div>
    </div>
</template>

<script>
import ImagenAtras from '../CategoriaComponents/ImagenAtras.vue';
export default {
    name: 'SearchFilter',
    components: {
        ImagenAtras,
    }
}
</script>

<style scoped>
.search-layout {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 50%;
    width: 90%;
    max-width: 600px;
    z-index: 100;
    transform: translateX(-50%);
}

.atras {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.search-container {
    display: flex;
    flex: 1;
    align-items: center;
}


.search-input {
    font-size: medium;
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:hover {
    background-color: rgba(255, 255, 255, 0.9);
}

.search-input:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #4c5c64;
}

.filter {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.filter:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.05);
}

.filter .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
}
</style>