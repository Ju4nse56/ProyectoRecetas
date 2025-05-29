<template>
  <div class="main-container">
    <SidebarMenu />
    <div class="Titulo">
      <h1 class="titulo1">{{ name }}</h1>
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
// import ImagenAtras from "@/components/CategoriaComponents/ImagenAtras.vue";
import CardComponent from "@/components/CardComponent/CardComponent.vue";
// import RecetasComplete from '@/components/RecetasComponents/RecetasComplete.vue';
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "CategoriasView",
  components: {
    SidebarMenu,
    // ImagenAtras,
    CardComponent,
    // RecetasComplete
  },

  data() {
    return {
      recetas: [],
      name: "",
    };
  },
  methods: {
    async cargarRecetasPorNombre() {
      const router = useRoute();
      this.id = router.params.id;
      try {
        const url =
          "http://127.0.0.1:8000/api/categories/" + this.id + "/recipes";
        const response = await axios.get(url);

        if (response.data.status === 200) {
          this.recetas = response.data.data;
          this.name = response.data.categories;
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.data && this.nombre !== null) {
          alert(
            error.response.data.message ||
              "Error en la solicitud" +
                (error.response.data.errors
                  ? ": " + JSON.stringify(error.response.data.errors)
                  : "")
          );
        } else {
          console.error(error);
          this.error = "Error en la solicitud";
        }
      } finally {
        console.log("Carga de recetas finalizada.");
      }
    },
  },
  created() {
    this.cargarRecetasPorNombre();
  },
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
  background-color: white;
}

.derecha {
  width: 95%;
  height: 100%;
  overflow: hidden;
  color: black;
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
  background-color: white;
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
  .derecha {
    width: 100%;
  }
}
</style>
