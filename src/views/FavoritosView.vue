<template>
  <div class="main-container">
    <SidebarMenu />
    <div class="contenedor2">
      <div class="arriba">
        
        <div class="Titulo">
          <h1 class="titulo1">Favoritos</h1>
        </div>
      </div>

      
                

      <!-- Mostrar receta seleccionada -->
      <RecetasComplete
        v-if="recetaSeleccionada"
        :data="recetaSeleccionada"
        @volver="recetaSeleccionada = null"
      />

      <!-- Mostrar lista de recetas -->
      <div class="abajo" v-else>
        <div class="subcontenedor">
          <CardComponent
            v-for="(item, index) in recetas"
            :key="index"
            :recipe="item"
            @click="mostrarReceta(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
import CardComponent from '@/components/CardComponent/CardComponent.vue';
import RecetasComplete from '@/components/RecetasComponents/RecetasComplete.vue';

export default {
  name: 'FavoritosView',
  components: {
    SidebarMenu,
    CardComponent,
    RecetasComplete 
  },
  data() {
    return {
      recetaSeleccionada: null,
      recetas: [
        {
          nombre: 'Quiche de verduras',
          descripcion: 'Una deliciosa quiche casera.',
          videoUrl: 'https://youtu.be/oVYfDQ2J6fg?si=MYRMthPwlT3lCK2H',
          rating: 4.5,
          porciones: ['2 porciones', '4 porciones'],
          ingredientes: ['Huevos', 'Espinaca', 'Queso', 'Masa quebrada'],
          preparacion: 'Batir los huevos, mezclar con ingredientes y hornear.',
          image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png'),
          time:'20'
        },{
          nombre: 'Quiche de queso',
          descripcion: 'Una deliciosa quiche ',
          videoUrl: 'https://www.youtube.com/watch?v=7TUQyRc1u9o',
          rating: 4.5,
          porciones: ['2 porciones', '4 porciones'],
          ingredientes: ['Huevos', 'Espinaca', 'Queso', 'Masa quebrada'],
          preparacion: 'Batir los huevos, mezclar con ingredientes y hornear.',
          image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png'),
          time: '28'
        },
        
      ]
    };
  },
  methods: {
    mostrarReceta(item) {
      this.recetaSeleccionada = item;
    }
  }
};
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