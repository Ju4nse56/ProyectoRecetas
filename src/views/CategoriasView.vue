<template>
  <div class="main-container">
    <SidebarMenu />
    <div class="derecha">
      <div class="arriba">
        <div class="atras">

          <ImagenAtras v-if="!recetaSeleccionada" />
        </div>
        <div class="Titulo">
          <h1 class="titulo1">{{ nombre }}</h1>
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
          <div class="recetas-grid">
            <CardComponent
              v-for="(receta, index) in recetas"
              :key="index"
              :recipe="receta"
              @click="mostrarReceta(receta)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
import ImagenAtras from '@/components/CategoriaComponents/ImagenAtras.vue';
import CardComponent from '@/components/CardComponent/CardComponent.vue';
import RecetasComplete from '@/components/RecetasComponents/RecetasComplete.vue';

export default {
  name: 'CategoriasView',
  components: {
    SidebarMenu,
    ImagenAtras,
    CardComponent,
    RecetasComplete
  },
  props: {
    nombre: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recetaSeleccionada: null,
      recetas: []
    };
  },
  methods: {
    mostrarReceta(receta) {
      this.recetaSeleccionada = receta;
    },
    cargarRecetasPorNombre() {
      const recetasDesayuno = [
        {
          nombre: 'Quiche de verduras Desayuno',
          time: '20',
          videoUrl: 'https://youtu.be/oVYfDQ2J6fg',
          rating: 4.5,
          porciones: ['2 porciones', '4 porciones'],
          ingredientes: ['Huevos', 'Espinaca', 'Queso', 'Masa quebrada'],
          preparacion: 'Batir los huevos, mezclar con ingredientes y hornear.',
          image: require('@/assets/imgRecetas/goulash.jpg-editada-removebg-preview.png')
        }
      ];

      const recetasAlmuerzo = [
        {
          nombre: 'Tacos mexicanos Almuerzo',
          time: '15 ',
          videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
          rating: 4.8,
          porciones: ['2 porciones', '3 porciones'],
          ingredientes: ['Tortillas', 'Carne', 'Cebolla', 'Cilantro'],
          preparacion: 'Calienta la carne, arma los tacos y sirve.',
          image: require('@/assets/imgRecetas/tacos.jpg')
        }
      ];
      const recetasCena = [
        {
          nombre: 'Tacos mexicanos Cena',
          time: '13',
          videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
          rating: 4.8,
          porciones: ['2 porciones', '3 porciones'],
          ingredientes: ['Tortillas', 'Carne', 'Cebolla', 'Cilantro'],
          preparacion: 'Calienta la carne, arma los tacos y sirve.',
          image: require('@/assets/imgRecetas/tacos.jpg')
        }
      ];
      const recetasPostre = [
        {
          nombre: 'Tacos mexicanos Postre',
          time: '30',
          videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
          rating: 4.8,
          porciones: ['2 porciones', '3 porciones'],
          ingredientes: ['Tortillas', 'Carne', 'Cebolla', 'Cilantro'],
          preparacion: 'Calienta la carne, arma los tacos y sirve.',
          image: require('@/assets/imgRecetas/tacos.jpg')
        }
      ];
      const recetasVegana = [
        {
          nombre: 'Tacos mexicanos Vegana',
          tiempo: '23',
          videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
          rating: 4.8,
          porciones: ['2 porciones', '3 porciones'],
          ingredientes: ['Tortillas', 'Carne', 'Cebolla', 'Cilantro'],
          preparacion: 'Calienta la carne, arma los tacos y sirve.',
          image: require('@/assets/imgRecetas/tacos.jpg')
        }
      ];
      const recetasSingluten = [
        {
          nombre: 'Tacos mexicanos Gluten',
          time: '15',
          videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
          rating: 4.8,
          porciones: ['2 porciones', '3 porciones'],
          ingredientes: ['Tortillas', 'Carne', 'Cebolla', 'Cilantro'],
          preparacion: 'Calienta la carne, arma los tacos y sirve.',
          image: require('@/assets/imgRecetas/tacos.jpg')
        }
      ];

      switch (this.nombre) {
        case "Desayuno":
            this.recetas = recetasDesayuno;
          break;
        case "Almuerzo":
            this.recetas = recetasAlmuerzo;
          break;
        case "Cena":
            this.recetas = recetasCena;
          break;
        case "Postre":
            this.recetas = recetasPostre;
          break;
        case "Vegana":
            this.recetas = recetasVegana;
          break;
        case "Sin-gluten":
                this.recetas = recetasSingluten;
          break;
        default:
          this.recetas = [];
      }
    }
  },
  created() {
    this.cargarRecetasPorNombre();
  }
};
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

.derecha {
    width: 95%;
    height: 100%;
    overflow: hidden;
}
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

@media (max-width: 480px) {
    .derecha{
        width: 100%;
    }
}
</style>