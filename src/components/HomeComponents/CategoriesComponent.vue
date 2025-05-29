<template>
  <div class="categories-section">
    <div class="categories-header">
      <h2>Categorías</h2>
    </div>
    <div class="categories-grid">
      <div
        class="category-card"
        v-for="(category, index) in categories"
        :key="index"
        @click="handleClick(category.name)"
      >
        <img :src="category.icon" alt="icono" class="category-icon" />
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesComponent",
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    irACategoria(nombre) {
      this.$router.push({ name: "Categoria", params: { nombre } });
    },

    handleClick(categoryName) {
      switch (categoryName) {
        case "Desayuno":
          this.irACategoria("Desayuno");
          break;
        case "Almuerzo":
          this.irACategoria("Almuerzo");
          break;
        case "Cena":
          this.irACategoria("Cena");
          break;
        case "Postre":
          this.irACategoria("Postre");
          break;
        case "Vegana":
          this.irACategoria("Vegana");
          break;
        case "Sin-gluten":
          this.irACategoria("Sin-gluten");
          break;
        default:
          alert("Categoría desconocida.");
      }
    },

    getCategories: async function () {
      try {
        const url = "http://127.0.0.1:8000/api/categories";
        const response = await this.axios.get(url);
        if (response.data.status === 200) {
          this.categories = response.data.data;
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.data && !this.text === null) {
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
  },

  created: function () {
    this.getCategories();
  },
};
</script>

<style scoped>
.categories-section {
  padding: 20px;
}

.categories-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c3e50;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  margin-top: 10px;
}

.category-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}

.category-card:hover {
  background-color: #fbfcdb;
}

.category-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

/* Media query específica para tablets */
@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 600px) {
  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
