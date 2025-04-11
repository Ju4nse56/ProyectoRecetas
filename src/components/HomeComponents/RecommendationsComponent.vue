<template>
    <div class="recommendations-section">
        <div class="recommendations-header">
            <h2>Recomendaciones</h2>
        </div>
        <div class="recommendations-container">
            <div class="recommendation-items">
                <div class="recommendation-item" v-for="index in 3" :key="index">
                    <div class="recommendation-content">
                        
                    </div>
                </div>
            </div>
            <button class="nav-arrow right-arrow">
                <img class="icon" :src="require('@/assets/imgRecommendations/arrow_right.png')" alt="Arrow_right" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendationsComponent'
}
</script>

<style scoped>

.recommendations-section {
    margin-bottom: 20px;
}

.recommendations-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.recommendations-container {
    display: flex;
    align-items: center;
}

.recommendation-items {
    display: flex;
    gap: 10px;
    flex: 1;
    overflow-x: hidden;
}



.recommendation-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.recommendation-content h3 {
    font-size: 14px;
    color: #333;
}

.rating {
    font-size: 12px;
    color: #333;
}

.bookmark-icon {
    color: #333;
}

.nav-arrow {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    padding: 0 5px;
}
@media (max-width: 1024px) {
    .recommendation-item {
    width: 200px;
    height: 100px;
    background-color: #fffdfd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    }
}
@media (min-width: 600px) {
    .recommendation-item {
    width: 270px;
    height: 200px;
    background-color: #fffdfd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    }
}

</style>