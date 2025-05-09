<template>
  <div class="main-container">
    <SidebarMenu />
    <div class="contenedor2">
      <div class="arriba">
        <div class="atras">
          <ImagenAtras />
        </div>
        <div class="Titulo">
          <h1 class="titulo1">Actualizaciones</h1>
        </div>
      </div>

      <div class="abajo">
        <div class="subcontenedor">
          <div class="recetas-grid">
            <div class="tarjeta-receta" v-for="(receta, index) in recetas" :key="index">
              <img :src="receta.imagen" :alt="`Imagen de ${receta.texto}`" class="imagen-receta" />
              <p class="texto-receta">{{ receta.texto }}</p>
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
import desayunoImg from '@/assets/imgCategories/desayuno.png';

export default {
  name: 'ActualizacionesView',
  components: {
    ImagenAtras,
    SidebarMenu
  },
  data() {
    return {
      recetas: [
        { imagen: desayunoImg, texto: 'Receta 1' },
        { imagen: desayunoImg, texto: 'Receta 2' },
        { imagen: desayunoImg, texto: 'Receta 3' },
        { imagen: desayunoImg, texto: 'Receta 4' },
        { imagen: desayunoImg, texto: 'Receta 5' },
        { imagen: desayunoImg, texto: 'Receta 6' },
        { imagen: desayunoImg, texto: 'Receta 7' },
        { imagen: desayunoImg, texto: 'Receta 8' },
        { imagen: desayunoImg, texto: 'Receta 9' }
      ]
    };
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  color: #000;
  flex-direction: row;
  overflow: hidden;
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
  height: 100%;
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
  height: 100%;
  background-color: white;
  margin: 0 auto;
  padding: 10px;
  position: relative;
}

.recetas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
  width: 100%;
}

.tarjeta-receta {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: auto;
  height: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.imagen-receta {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 5px;
}

.texto-receta {
  margin-top: 10px;
  font-size: 0.9rem;
  text-align: center;
}
</style>