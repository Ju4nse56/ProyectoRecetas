<template>
    <div>
      
      <div class="image-container" @click="showModal = true">
        <img :src="src" alt="Imagen circular" />
      </div>
  
      
      <div v-if="showModal" class="modal" @click.self="showModal = false">
        <div class="modal-content">
          <img :src="src" alt="Imagen completa" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showModal: false
      };
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

  </style>