<template>
    <div class="main-container">
        <SidebarMenu />
        <div class="contenedor2">
            <RecetasComplete/>
        </div>
    </div>

</template>

<script>
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
import RecetasComplete from '@/components/RecetasComponents/RecetasComplete.vue';
export default {
    name: 'RecetasView',
    components: {
        SidebarMenu,
        RecetasComplete,
    },
}
</script>

<style scoped>
.main-container{
    background-color: white;
}
.contenedor2 {
    width: 95%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: white;
}

</style>