<template>
    <div class="main-container">
      <SidebarMenu />
      <div class="contenedor2">
        <ImagenAtras/>
        <div class="arriba">
          <div class="Titulo">
            <h1 class="titulo1">{{ name }}</h1>
          </div>
        </div>

        <div class="abajo">
          <div class="subcontenedor">
            <CardComponent v-for="receta in recetas" :key="receta.id" :id="receta.id" :tittle="receta.tittle"
              :image="receta.image" :preparation_time="receta.preparation_time" />
          </div>
        </div>
      </div>
    </div>
</template>


  <script>
import SidebarMenu from "@/components/HomeComponents/SidebarMenu.vue";
import CardComponent from "@/components/CardComponent/CardComponent.vue";
import ImagenAtras from "@/components/CategoriaComponents/ImagenAtras.vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "CategoriasView",
  components: {
    SidebarMenu,
    CardComponent,
    ImagenAtras
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
        const url = "http://127.0.0.1:8000/api/categories/" + this.id + "/recipes";
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
  <style>
    .main-container {
      background-color: white;
      display: flex;
    }

    .contenedor2 {
      width: 95%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      background-color: white;
      /* espacio para el sidebar */
      padding: 1rem 0;
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
      text-transform: capitalize;
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

    @media (max-width: 768px) {
      .contenedor2 {
        margin-left: 0;
        width: 100%;
        padding: 0.5rem;
      }

      .subcontenedor {
        grid-template-columns: 1fr;
      }

      .titulo1 {
        font-size: 1.3rem;
      }
    }
  </style>
