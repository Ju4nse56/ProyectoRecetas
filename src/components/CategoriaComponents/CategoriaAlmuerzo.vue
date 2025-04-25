<template>
    <div class="contenedor2">
        <div class="arriba">
            <div class="atras">
                <ImagenAtras />
            </div>
            <div class="Titulo">
                <h1 class="titulo1">Almuerzo</h1>
            </div>
        </div>

        <div class="abajo">
            <div class="subcontenedor">
                <div class="recetas-grid">
                    <div class="tarjeta-receta">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImagenAtras from './ImagenAtras.vue';
export default {
    name: 'CategoriaAlmuerzo',
    components: {
        ImagenAtras,
    }
}
</script>

<style scoped>
.contenedor2 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow: hidden;
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
}
</style>