<template>
    <div class="sidebar">
        <div class="sidebar-icon" :class="{ active: activeIcon === 'home' }" @click="navigateAndActivate('home', '/HomeView')">
            <img class="icon" :src="require('@/assets/imgMenu/home.png')" alt="Home" />
        </div>
        <div class="sidebar-icon" :class="{ active: activeIcon === 'search' }" @click="navigateAndActivate('search')">
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
    name: 'SidebarMenu',
    data() {
        return {
            activeIcon: 'home'
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/HomeView');
        }
    }
}
</script>

<style>
.sidebar {
    width: 70px;
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
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 50%;
    position: relative;
}

.sidebar-icon:hover, .sidebar-icon.active {
    transform: translateX(8px);
    background-color: #fbfcdb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon {
    width: 25px;
    height: 25px;
}

@media (max-width: 500px) {
    .sidebar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 60px;
        flex-direction: row;
        justify-content: space-around;
        padding: 0;
        border-right: none;
        border-top: 1px solid #e9e9e9;
        z-index: 100;
        max-width: 100%;
    }

    .sidebar-icon {
        margin-bottom: 0;
        margin-right: 0;
        width: 60px;
        height: 100%;
    }
    
    .sidebar-icon:hover, .sidebar-icon.active {
        transform: translateY(-8px);
    }
}
</style>