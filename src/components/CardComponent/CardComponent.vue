<template>
    <div v-if="recipe && recipe.title && recipe.time" class="card">
      <div class="card-content">
        <div class="izquierda">
            <div class="recipe-title">{{ recipe.title }}</div>
  
            <div class="recipe-description">
                <div class="recipe-time">
                <img class="time-icon" src="@/assets/imgRecetas/time.png" alt="tiempo" />
                <span>{{ recipe.time }}</span>
                </div>
            </div>
            <br>

            <div class="favorite-button">
                <img :src="require('@/assets/imgMenu/favorite.png')" alt="Favorito" />
            </div>
        </div>
        
  
        <div class="card-image">
          <ImagenCard :src="recipe.image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ImagenCard from '../FovaritosComponents/ImagenCard.vue';
  
  export default {
    name: 'CardComponent',
    components: {
      ImagenCard
    },
    props: {
      recipe: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  <style scoped>
  .card {
    width: 280px;
    height: 180px;
    background-color: #f8f6f6;
    border-radius: 16px;
    display: flex;
    overflow: visible;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    position: relative;
    padding: 15px;
  }
  
  .card-content {
    
    height: 100%;
    width: 100%;
  }
  .izquierda{
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: flex-start;
    background-color: none;
    gap: 5px;
  }
  .card-image {
    width: 60%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    position: absolute;
    right: -20%; 
    top: 50%;
    display: flex;
    transform: translateY(-50%);
    background-color:none;
    
  }
  
  .recipe-title {
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
  }
  
  .recipe-description {
    font-size: 12px;
    color: #666;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  
  .recipe-time {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;
    background-color: none;
  }
  
  .time-icon {
    width: 16px;
    height: 16px;
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
    cursor: pointer;
    border: 1px solid #ddd;
  }
  </style>
  
  