<template>
  <div class="main-container">
    <SidebarMenu />
    <div class="search-layout">
      <div class="atras">
        <ImagenAtras />
      </div>
      <div class="search-container">
        <input
          type="text"
          placeholder="Buscar"
          class="search-input"
          @keyup.enter="search"
          v-model="text"
        />
        <div class="filter" @click="showFilterModal = true">
          <img
            class="icon"
            :src="require('@/assets/imgSearch/filtrar.png')"
            alt="Filtrar"
          />
        </div>
      </div>
    </div>

    <div class="resultado" v-for="receta in recetas" :key="receta.id">
      <CardComponent
        :id="receta.id"
        :tittle="receta.tittle"
        :preparation_time="receta.preparation_time"
        :image="receta.image"
      />
    </div>

    <!-- Modal de filtros -->
    <div class="filter-modal" :class="{ 'show-modal': showFilterModal }">
      <div class="filter-content">
        <div class="filter-header">
          <p>Filtra las recetas</p>
        </div>
        <ul>
          <li>Todas</li>
          <li>Tipos de comida</li>
          <li>Tiempo de preparación</li>
        </ul>
        <button @click="showFilterModal = false">Cerrar</button>
      </div>
    </div>

    <!-- Overlay para cuando el modal está activo -->
    <div
      class="modal-overlay"
      v-if="showFilterModal"
      @click="showFilterModal = false"
    ></div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent/CardComponent.vue";
import ImagenAtras from "../CategoriaComponents/ImagenAtras.vue";
import SidebarMenu from "@/components/HomeComponents/SidebarMenu.vue";

export default {
  name: "SearchFilter",
  data() {
    return {
      showFilterModal: false,
      recetas: [],
      text: "",
    };
  },

  components: {
    ImagenAtras,
    SidebarMenu,
    CardComponent,
  },

  methods: {
    search: async function () {
      try {
        const url = "http://127.0.0.1:8000/api/recipes?search=" + this.text;
        const response = await this.axios.get(url, this.user);
        if (response.data.status === 200 ) {
          this.recetas = response.data.data;
          console.log(this.recetas);
          console.log(response.data.data);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.data && !this.text===null) {
          alert(error.response.data.message || "Error en la solicitud") +
            (error.response.data.errors
              ? ": " + JSON.stringify(error.response.data.errors)
              : "");
        } else {
          this.error = "Error en la solicitud";
        }
      } finally {
        console.log("Proceso terminado");
      }
    },

    setText: function () {
      this.text = localStorage.getItem('texto');
      localStorage.removeItem('texto');
      console.log(this.text)
      this.search();
    },
  },

  created: function () {
    this.setText();
  },
};
</script>

<style scoped>
.search-layout {
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 50%;
  width: 90%;
  max-width: 600px;
  z-index: 100;
  transform: translateX(-50%);
}

.atras {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.search-container {
  display: flex;
  flex: 1;
  align-items: center;
}

.search-input {
  font-size: medium;
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.search-input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #4c5c64;
}

.filter {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.filter:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.05);
}

.filter .icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

/* Modal Styles */
.filter-modal {
  position: fixed;
  bottom: -100%;
  /* Inicialmente fuera de la pantalla por abajo */
  left: 0;
  right: 0;
  background-color: #1e1e1e;
  color: white;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: bottom 0.3s ease-in-out;
}

.show-modal {
  bottom: 0;
  /* Al agregar esta clase, el modal aparece desde abajo */
}

.filter-header {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
  width: 100%;
}

.filter-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  width: 100%;
}

.filter-content ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.filter-content li {
  padding: 10px 0;
  cursor: pointer;
}

.filter-content li:last-child {
  border-bottom: none;
}

.filter-content .check {
  margin-right: 10px;
  color: #ffd464;
  font-weight: bold;
}

.filter-content button {
  align-self: center;
  padding: 12px 30px;
  background: #666;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  transition: background-color 0.2s;
}

.filter-content button:hover {
  background: #888;
}

/* Overlay para oscurecer el fondo cuando el modal está activo */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
