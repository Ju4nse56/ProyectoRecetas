<template>
  <div class="container">
    <div class="scrollable-content">
      <button class="back-button" @click="$emit('volver')">←</button>

      <div class="video-wrapper">
        <iframe
          :src="receta.video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video-player"
        >
        </iframe>
      </div>

      <section class="details">
        <h2>{{ receta.tittle }}</h2>
        <p class="description">{{ receta.description }}</p>

        <div class="prep-time">
          <strong>{{ receta.preparation_time }} </strong>
          <div>
            {{ receta.categories }}
          </div>
        </div>

        <!-- <select class="portion-selector">
          <option v-for="op in data.porciones" :key="op">{{ op }}</option>
        </select> -->

        <!-- <div class="ingredients">
          <h3>Ingredientes</h3>
          <ul>
            <li v-for="(ing, i) in data.ingredientes" :key="i">{{ ing }}</li>
          </ul>
        </div> -->

        <div class="preparation">
          <h3>Preparación</h3>
          <p>{{ receta.instructions }}</p>
        </div>
      </section>

      <section class="rating-section">
        <h3>Califica esta receta</h3>
        <div class="comment-box">
          <input
            type="text"
            placeholder="Agregar un comentario"
            v-model="comment"
          />
          <button @click="submitComment">Enviar</button>
        </div>
      </section>
      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "RecetasComplete",

  data() {
    return {
      id: 0,
      receta: {},
    };
  },
  methods: {
    getReceta: async function () {
      try {
        const router = useRoute();
        this.id = router.params.id;
        const response = await this.axios.get(
          "http://127.0.0.1:8000/api/recipes/" + this.id
        );
        if (response.data.status === 200) {
          this.receta = response.data.data;
        } else {
          alert(response.data.message || "No se pudieron cargar las recetas");
        }
      } catch (error) {
        console.error(error);
        this.error = "Error al cargar las recetas.";
      }
    },
  },

  mounted() {
    this.getReceta();
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #f2f2f2;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.scrollable-content {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

.video-wrapper {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.video-player {
  width: 560px;
  height: 315px;
  border: 2px solid #000;
  border-radius: 10px;
}

.rating-section {
  background-color: #f0f0f0;
  padding: 16px;
  margin-top: 20px;
  border-radius: 10px;
}

.stars {
  color: black;
  font-size: 20px;
}

.comment-box {
  display: flex;
  margin-top: 10px;
}

.comment-box input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.comment-box button {
  background-color: black;
  color: white;
  padding: 8px 12px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.details {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
}

.description {
  margin-bottom: 20px;
}

.prep-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.portion-selector {
  padding: 6px;
  border-radius: 4px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
}

.ingredients,
.preparation {
  margin-bottom: 20px;
  background-color: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
ul {
  text-align: left;
}
.ingredients ul {
  list-style-type: none;
}

@media (max-width: 500px) {
  .video-player {
    width: 100%;
    height: 215px;
  }
}
</style>
