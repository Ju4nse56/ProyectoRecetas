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
                <img :src="category.icon" alt="icono" class="category-icon"/>
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
            categories: [
                { name: "Desayuno", icon: require("@/assets/imgCategories/desayuno.png") },
                { name: "Almuerzo", icon: require("@/assets/imgCategories/almuerzo.png") },
                { name: "Cena", icon: require("@/assets/imgCategories/cena.png") },
                { name: "Postre", icon: require("@/assets/imgCategories/postre.png") },
                { name: "Vegana", icon: require("@/assets/imgCategories/vegana.png") },
                { name: "Sin-gluten", icon: require("@/assets/imgCategories/sin-gluten.png") }
            ],
        };
    },
    methods: {
        irACategoria(tipo) {
            this.$router.push({ name: 'Categoria', params: { tipo } });
        },

        handleClick(categoryName) {
            switch (categoryName) {
                case "Desayuno":
                    this.irACategoria('desayuno');
                    break;
                case "Almuerzo":
                    this.irACategoria('almuerzo');
                    break;
                case "Cena":
                    this.irACategoria('cena');
                    break;
                case "Postre":
                    this.irACategoria('postre');
                    break;
                case "Vegana":
                    this.irACategoria('vegana');
                    break;
                case "Sin-gluten":
                    this.irACategoria('Singluten');
                    break;
                default:
                    alert("Categoría desconocida.");
            }
        }
    }

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