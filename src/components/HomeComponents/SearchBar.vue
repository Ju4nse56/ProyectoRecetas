<template>
    <div class="search-section">
        <h1 class="title">Try it</h1>
        <div class="search-container">
            <input type="text" placeholder="Search" class="search-input">
            <img class="icon" :src="require('@/assets/imgSearch/filtrar.png')" alt="Filtrar" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style scoped>
.search-section {
    display: flex;
    flex-direction: column;
}

.title {
    display: flex;
    font-size: 24px;
    margin-bottom: 15px;
}

.search-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.search-input {
    flex: 1;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.icon{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
</style>