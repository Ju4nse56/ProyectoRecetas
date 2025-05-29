<template>
  <div class="recommendations-section">
    <div class="recommendations-header">
      <h2>Recomendaciones</h2>
    </div>

    <div class="recommendations-container">
      <button
        v-if="paginaActual > 0"
        class="nav-arrow left-arrow"
        @click="paginaAnterior"
      >
        <img
          class="icon-img"
          :src="require('@/assets/imgRecommendations/flecha-izquierda.png')"
          alt="←"
        />
      </button>

      <div class="recommendation-items">
        <div
          class="recommendation-item"
          v-for="recipe in visibleRecipes"
          :key="recipe.id"
        >
          <div class="image-container">
            <img
              :src="require(`@/assets/imgRecetas/${recipe.image}`)"
              alt="receta"
            />
            <div class="save-icon">
              <img
                class="icon-img"
                src="@/assets/imgRecetas/guardar.png"
                alt="guardar"
              />
            </div>
          </div>

          <div class="recommendation-info">
            <h3 class="title">{{ recipe.name }}</h3>
            <div class="recipe-time">
              <img
                class="time-icon"
                src="@/assets/imgRecetas/time.png"
                alt="tiempo"
              />
              <span>{{ recipe.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        v-if="hasMorePages"
        class="nav-arrow right-arrow"
        @click="nextPage"
      >
        <img
          class="icon-img"
          :src="require('@/assets/imgRecommendations/flecha-derecha.png')"
          alt="→"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationsComponent",
  data() {
    return {
      recipes: [],
      paginaActual: 0,
      recipesPerPage: 3,
    };
  },
  computed: {
    visibleRecipes() {
      const start = this.paginaActual * this.recipesPerPage;
      return this.recipes.slice(start, start + this.recipesPerPage);
    },
    hasMorePages() {
      return (
        (this.paginaActual + 1) * this.recipesPerPage < this.recipes.length
      );
    },
  },
  methods: {
    paginaAnterior() {
      if (this.paginaActual > 0) this.paginaActual--;
    },
    nextPage() {
      if (this.hasMorePages) this.paginaActual++;
    },
    getMealType() {
      const hour = new Date().getHours();
      if (hour >= 4 && hour <= 10) return "desayuno";
      if (hour >= 11 && hour <= 13) return "almuerzo";
      if (hour >= 14 && hour <= 17) return "postre";
      if (hour >= 18 && hour <= 22) return "cena";
      return "otros";
    },
    // async fetchRecipesByMealType() {
    //   const mealType = this.getMealType();
    //   try {
    //     const response = await fetch(`https://tu-api.com/recetas?tipo=${mealType}`);
    //     const data = await response.json();
    //     this.recipes = data;
    //   } catch (error) {
    //     console.error("Error al obtener recetas:", error);
    //   }
    // },
  },
  // mounted() {
  //   this.fetchRecipesByMealType();
  // },
};
</script>

<style scoped>
.recommendations-section {
  margin-bottom: 30px;
}

.recommendations-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #2c3e50;
}

.recommendations-container {
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

.recommendation-items {
  display: flex;
  gap: 10px;
  flex: 1;
  overflow-x: hidden;
  transition: all 0.3s ease;
}

.recommendation-item {
  width: 270px;
  height: 220px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.image-container {
  position: relative;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.save-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.save-icon:hover {
  transform: scale(1.1);
}

.icon-img {
  width: 18px;
  height: 18px;
  padding-top: 3px;
}

.recommendation-info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.recipe-time {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #666;
}

.time-icon {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}

.nav-arrow {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-arrow:hover {
  background: #dfdede;
}

@media (max-width: 500px) {
  .recommendations-container {
    position: relative;
  }

  .recommendations-section {
    margin-bottom: 50px;
  }

  .recommendation-items {
    flex-wrap: nowrap;
    overflow-x: hidden;
    gap: 8px;
    padding-bottom: 10px;
  }

  .recommendation-item {
    width: 220px;
    height: auto;
  }

  .image-container {
    height: 130px;
  }

  .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    z-index: 2;
  }

  .left-arrow {
    left: 5px;
  }

  .right-arrow {
    right: 5px;
  }
}
</style>
