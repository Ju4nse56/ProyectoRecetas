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
                    <CardComponent v-for="(item, index) in recetas" :key="index" :recipe="item" />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import ImagenAtras from '@/components/CategoriaComponents/ImagenAtras.vue';
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
import CardComponent from '@/components/CardComponent/CardComponent.vue';

export default {
    name: 'FavoritosView',
    components: {
        ImagenAtras,
        SidebarMenu,
        CardComponent
    },
    data() {
        return {
            recetas: [
                {
                    title: 'Quiche',
                    time: '20 minutos',
                    image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png')
                },
                {
                    title: 'Quiche',
                    time: '20 minutos',
                    image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png')
                },
                {
                    title: 'Quiche',
                    time: '20 minutos',
                    image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png')
                },
                {
                    title: 'Quiche',
                    time: '20 minutos',
                    image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png')
                }

            ]
        };
    }
}
</script>

<style scoped>
.main-container{
    background-color: white;
}
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
    flex: 1;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}

.titulo1 {
    font-size: 1.5rem;
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
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 0;
    justify-items: center;
}

@media (max-width: 500px) {
    .subcontenedor {
        grid-template-columns: 1fr;
    }
}

</style>