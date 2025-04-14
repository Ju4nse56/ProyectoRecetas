<template>
    <div class="main-container">
        <div class="barra">
            <SidebarMenu />
        </div>
        
        <div class="content">
            <SearchBar />
            <div class="main-content">
                <div class="featured-image-container">
                    <div class="featured-image">
                        <button class="view-button">Ver</button>
                    </div>
                </div>
                <CategoriesComponent/>
                <RecommendationsComponent/>
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
    }
}
</script>

<style>
.main-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    color: #000;
    flex-direction: row;
}
.barra{
    width: 5%;
}
.content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    width: 95%;
}

.main-content {
    margin-top: 20px;
}

.featured-image-container {
    margin-bottom: 20px;
}

.featured-image {
    width: 98%;
    height: 200px;
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 10px;
    position: relative;
    border-radius: 10px;
}


.view-button {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 17px;
    z-index: 1;
}
</style>