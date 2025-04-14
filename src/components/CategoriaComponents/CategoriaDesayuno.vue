<template>
    <div class="contenedor2">

        <div class="arriba">
            <div class="atras">
              <ImagenAtras/>
            </div>
            <div class="Titulo">
                <h1 class="titulo1">Desayunos</h1>
            </div>
        </div>

        <div class="abajo">
            <div class="subcontenedor">

            </div>
        </div>

    </div>
</template>

<script>
import ImagenAtras from './ImagenAtras.vue';
export default {
    name: 'CateoriaDesayuno',
    components:{
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
    }
    .titulo1{
        font-size: 3rem;
        word-wrap: break-word;
        overflow-wrap: break-word;
        text-align: left;
        color: black;
    }
    
    .arriba {
        background-color: white;
        text-align: center;
        font-size: 24px;
        display: flex;
        flex-direction: row;
        height: 20%;
        width: 100%;
    }
    .atras{
        width: 5%;
        height: 90%;
    }
    .Titulo{
        width: 95%;
        height: 90%;
        text-align: center;
        box-sizing: border-box;
    }
    .abajo {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        
    }
    .subcontenedor {
        width: 100%;
        height: 100%;
        background-color: #2ecc71;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
</style>