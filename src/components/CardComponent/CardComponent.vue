<template>
  <div class="card" @click="$emit('click')">
    <div class="card-content">
      <div class="recipe-title">{{ tittle }}</div>
      <div class="recipe-description">
        <div class="recipe-time">
          <img class="time-icon" src="@/assets/imgRecetas/time.png" alt="tiempo" />
          <span>{{preparation_time}} min</span>
        </div>
      </div>
      <div class="favorite-button">
        <img :src="require('@/assets/imgMenu/favorite.png')" alt="Favorito" />
      </div>
      <div class="card-image">
        <img class="recipe-image" :src="{image}" alt="Receta" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardComponent',
  props: {
    id: Number,
    tittle: String,
    image: String,
    preparation_time: Number
  }
}
</script>

<style scoped>
.card {
  width: 350px;
  height: 180px;
  background-color: #f8f6f6;
  border-radius: 16px;
  display: flex;
  overflow: visible;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  position: relative;
  padding: 15px;
  cursor: pointer;
}

.card-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-image {
  position: absolute;
  right: 5px;
  top: 50px;
  width: 50%;
  flex: 1;
  display: flex;
}

.recipe-image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translate(20%, -20%);
  z-index: 2;
  background-color: #dddcda;
}

.recipe-title {
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.recipe-description {
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
}

.favorite-button {
  position: absolute;
  left: 15px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #ddd;
}

.favorite-button:hover {
  background-color: #fbfcdb;
}
</style>
