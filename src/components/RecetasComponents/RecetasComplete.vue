<template>
  <div class="container">
    <div class="scrollable-content">
      <button class="back-button" @click="goBack()">←</button>

      <div class="video-wrapper">
        <img class="video-player" :src="receta.image" alt="" /> 
      </div>

      <section class="details">
        <h2>{{ receta.tittle }}</h2>
        <p class="description">{{ receta.description }}</p>

        <div class="prep-time">
          <strong>{{ receta.preparation_time }} min</strong>
        </div>
        <div class="categoria-etiquetas">
    
        <div class="categorias">
          <h4>Categorias</h4>
          <div class="vfor" v-for="category in receta.categories" :key="category.id">
            <div>
              {{ category }}
            </div>
          </div>
        </div>
        <div class="etiquetas">
        <h4>Etiquetas</h4>
        <div class="vfor" v-for="label in receta.labels" :key="label.id">
          <div>
            {{ label }}
          </div>
        </div>
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
        
        <div class="promedio">
        <div>Total valoraciones: {{ receta.total_ratings }}</div>
        <div>Promedio de valoraciones: {{ receta.average_rating }}</div>
        </div>
        <div class="comment-box">
          <input placeholder="Agregar una valoracion" type="number" max="5" min="0" required v-model="rates.rate" />
          
          <input type="text" placeholder="Agregar un comentario" v-model="rates.comment" />
          <button @click="rating">Enviar</button>
        </div>
      </section>

      <br /><br /><br />

      <div class="vfor" v-for="comment in receta.comments" :key="comment.id">
        <div class="cube">
          <p>{{ comment.user_name }}:</p>
          <p>{{ comment.comment }}</p>
          <p>{{ comment.rate }}</p>
        </div>
      </div>
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
      rates: {
        comment: "",
        rate: "",
      },
    };
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        console.log("No hay una página anterior en el historial.");
      }
    },

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

    rating: async function () {
      try {
        const url = "http://127.0.0.1:8000/api/recipes/" + this.id + "/rating";
        const response = await this.axios.post(url, this.rates, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.status === 201) {
          window.location.reload();
        } else {
          alert(response.data.message);
          console.log(response.data.error);
        }
      } catch (error) {
        if (error.response && error.response.data) {
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

  mounted() {
    this.getReceta();
  },
};
</script>

<style scoped>
.promedio{
  text-align: left;
}
.container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.categoria-etiquetas{
  display: flex;
  gap: 20%;
  width: 100%;
  height: auto;
}
.etiquetas{
  text-align: center;
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
  border-radius: 10px;
  object-fit: cover;
}

.details {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.description {
  margin-bottom: 10px;
}

.prep-time {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.vfor {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.vfor div {
  background-color: #e0e0e0;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.rating-section {
  background-color: #f0f0f0;
  padding: 16px;
  margin-top: 20px;
  border-radius: 10px;
}

.comment-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.comment-box input[type="text"],
.comment-box input[type="number"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.comment-box button {
  background-color: black;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.ingredients,
.preparation {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.preparation h3 {
  text-align: left;
  margin-bottom: 10px;
}

.ingredients ul,
.preparation p {
  text-align: left;
}

.ingredients ul {
  list-style-type: disc;
  margin-left: 20px;
}

.cube {
  padding: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cube:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cube p {
  margin: 4px 0;
  font-size: 14px;
  color: #444;
}

@media (max-width: 768px) {
  .video-player {
    width: 100%;
    height: auto;
  }

  .details {
    padding: 15px;
  }

  .comment-box {
    flex-direction: column;
  }
}
</style>
