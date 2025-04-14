<template>
    <div class="sidebar">
        <div class="sidebar-icon">
            <img class="icon" :src="require('@/assets/imgMenu/home.png')" alt="Home" />
        </div>
        <div class="sidebar-icon">
            <img class="icon" :src="require('@/assets/imgMenu/Search.png')" alt="Search" />
        </div>
        <div class="sidebar-icon">
            <img class="icon" :src="require('@/assets/imgMenu/favorite.png')" alt="Favorite" />
        </div>
        <div class="sidebar-icon">
            <img class="icon" :src="require('@/assets/imgMenu/update.png')" alt="Update" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarMenu'
}
</script>

<style>
.sidebar {
    width: 100%;
    height: 100%;
    background-color: #f7fbff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    border-right: solid #e9e9e9 1px;
}

.sidebar-icon {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon {
    width: 25px;
    height: 25px;
}
</style>