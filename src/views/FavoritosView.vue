<template>
  <div class="main-container">
    <SidebarMenu />
    <div class="contenedor2">
      <div class="vfor" v-for="receta in recetas" :key="receta.id">
        <CardComponent
          :id="receta.id"
          :tittle="receta.tittle"
          :image="receta.image"
          :preparation_time="receta.preparation_time"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/HomeComponents/SidebarMenu.vue";
import CardComponent from "@/components/CardComponent/CardComponent.vue";
// import RecetasComplete from "@/components/RecetasComponents/RecetasComplete.vue";

export default {
  name: "FavoritosView",
  components: {
    SidebarMenu,
    CardComponent,
    // RecetasComplete,
  },
  data() {
    return {
      recetaSeleccionada: null,
      recetas: [],
    };
  },
  methods: {
    mostrarReceta(item) {
      this.recetaSeleccionada = item;
    },

     getFavoriteRecipes: async function() {
        try {
            const response = await this.axios.get('http://127.0.0.1:8000/api/favorites', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            
            if (response.data.status === 200) {
                this.recetas = response.data.data;
                this.totalFavorites = response.data.total;
                return response.data;
            } else {
                console.log('No hay recetas favoritas');
                this.favoriteRecipes = [];
                return null;
            }
        } catch (error) {
            console.error('Error al obtener favoritos:', error);
            if (error.response?.status === 401) {
                alert('Sesión expirada. Por favor inicia sesión nuevamente.');
            }
            return null;
        }
    },
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
