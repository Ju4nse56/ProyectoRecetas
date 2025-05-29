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
          <CardComponent
            v-for="(item, index) in recetas"
            :key="index"
            :id="item.id"
            :tittle="item.tittle"
            :image="item.image"
            :preparation_time="item.preparation_time"
          />
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
    CardComponent,
  },
  data() {
    return {
      recetas: [],
      id: 0,
      name: '',
    };
  },
  methods: {
    async getCategory() {
      try {
        const url = 'http://127.0.0.1:8000/api/categories/' + this.id + '/recipes';
        const response = await this.axios.get(url);

        if (response.data.status === 200) {
          const ahora = new Date();
          const haceUnDia = new Date(ahora.getTime() - 24 * 60 * 60 * 1000);

        const recetasFiltradas = response.data.data.filter((receta) => {
        const fechaCreacion = new Date(receta.created_at);
        return fechaCreacion >= haceUnDia && fechaCreacion <= ahora;
          });

          this.recetas = recetasFiltradas;
          this.name = response.data.categories;
          console.log(this.recetas);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Error al obtener recetas');
      }
    },
    getMealType() {
      const hour = new Date().getHours();
      if (hour >= 4 && hour <= 10) this.id = 2;
      else if (hour >= 11 && hour <= 13) this.id = 3;
      else if (hour >= 14 && hour <= 17) this.id = 5;
      else if (hour >= 18 && hour <= 22) this.id = 4;

      this.getCategory();
    },
  },
  created() {
    this.getMealType();
  },
};
</script>

<style scoped>
.main-container {
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
