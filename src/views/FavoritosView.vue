<template>
    <div class="main-container">
        <SidebarMenu />
        <div class="contenedor2">
        <div class="arriba">
            <div class="atras">
                <ImagenAtras />
            </div>
            <div class="Titulo">
                <h1 class="titulo1">Favoritos</h1>
            </div>
        </div>

        <div class="abajo">
            <div class="subcontenedor">
                <div class="recetas-grid">
                    <div class="tarjeta-receta" v-for="(receta, index) in recetas" :key="index">
                        <p class="texto-receta">{{ receta.texto }}</p>
                        <img :src="receta.imagen" alt="Imagen de receta" class="imagen-receta"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>
import ImagenAtras from '@/components/CategoriaComponents/ImagenAtras.vue';
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
export default {
    name: 'FavoritosView',
    components: {
        ImagenAtras,
        SidebarMenu
    },
    data() {
        return {
            recetas: [
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 1' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 2' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 3' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 4' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 5' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 6' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 7' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 8' },
                { imagen: require("@/assets/imgCategories/desayuno.png"), texto: 'Receta 9' }
            ]
        };
    }

}
</script>

<style scoped>
.contenedor2 {
    width: 95%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: white;
}

.arriba {
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 10px;
}

.atras {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
}

.Titulo {
    flex: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-left: 10px;
}

.titulo1 {
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
    color: #333;
}

.abajo {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    height: calc(100% - 60px);
}

.subcontenedor {
    width: 100%;
    height: 100%;
    background-color: white;
    margin: 0 auto;
    padding: 10px;
    position: relative;
}

.recetas-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 100%;
}
.main-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    color: #000;
    flex-direction: row;
    overflow: hidden;
}
.tarjeta-receta {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: auto;
}

.imagen-receta {
    width: 60%;
    height: auto;
    border-radius: 5px;
}

.texto-receta {
    width: 40%;
    margin-top: 5px;
    font-size: 1rem;
}
</style>