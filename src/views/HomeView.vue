<template>
    <div class="main-container">
        <SidebarMenu />
        <div class="content">
            <SearchBar />
            <div class="main-content">
                <el-carousel :interval="4000" type="card" arrow="always" height="250px">
                    <el-carousel-item v-for="recipe in recipes" :key="recipe.id">
                        <div class="recipe-card">
                            <div class="recipe-image">
                                <img :src="require(`@/assets/imgRecetas/${recipe.image}`)" alt="">
                                <div class="save-icon" @click.stop="toggleSaved(recipe.id)">
                                    <img class="icon-img" src="@/assets/imgRecetas/guardar.png" alt="guardar" />
                                </div>
                            </div>
                            <div class="recipe-info">
                                <h3 class="recipe-name">{{ recipe.name }}</h3>
                                <div class="recipe-time">
                                    <img class="time-icon" src="@/assets/imgRecetas/time.png" alt="tiempo">
                                    <span>{{ recipe.time }}</span>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <CategoriesComponent />
                <RecommendationsComponent />
            </div>
        </div>
    </div>
</template>

<script>
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
import SearchBar from '@/components/HomeComponents/SearchBar.vue';
import CategoriesComponent from '@/components/HomeComponents/CategoriesComponent.vue';
import RecommendationsComponent from '@/components/HomeComponents/RecommendationsComponent.vue';

export default {
    name: 'HomeView',
    components: {
        SidebarMenu,
        SearchBar,
        CategoriesComponent,
        RecommendationsComponent
    },
    data() {
        return {
            recipes: [
                { id: 1, name: 'Goulash Húngaro', time: '45 min', image: 'goulash.jpg-editada-removebg-preview.png', saved: false },
                { id: 2, name: 'Pasta Carbonara', time: '30 min', image: 'goulash.jpg-editada-removebg-preview.png', saved: true },
                { id: 3, name: 'Pollo al Curry', time: '50 min', image: 'goulash.jpg-editada-removebg-preview.png', saved: false },
                { id: 4, name: 'Tacos de Carnitas', time: '40 min', image: 'goulash.jpg-editada-removebg-preview.png', saved: false },
                { id: 5, name: 'Lasaña Vegetariana', time: '60 min', image: 'goulash.jpg-editada-removebg-preview.png', saved: false },
                { id: 6, name: 'Sushi Roll', time: '75 min', image: 'goulash.jpg-editada-removebg-preview.png', saved: false }
            ]
        };
    },
    methods: {
        toggleSaved(id) {
            const recipe = this.recipes.find(r => r.id === id);
            if (recipe) recipe.saved = !recipe.saved;
        }
    }
};
</script>

<style>
.main-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    color: #000;
    z-index: 1;
}

.content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.main-content {
    margin-top: 20px;
}

.el-carousel {
    margin-bottom: 30px;
}

.el-carousel__item {
    border-radius: 12px;
    overflow: hidden;
}

.recipe-card {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: white;
}

.recipe-image {
    flex: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
}

.recipe-image img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
}

.save-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.save-icon:hover {
    transform: scale(1.1);
}

.icon-img {
    width: 20px;
    height: 20px;
}

.recipe-info {
    padding: 12px;
    background-color: white;
}

.recipe-name {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

.recipe-time {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
}

.time-icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}
</style>