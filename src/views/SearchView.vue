<template>
    <SearchFilter />
    <SidebarMenu/>
</template>

<script>
import SearchFilter from '@/components/SearchFilter/SearchFilter.vue';
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
export default {
    components: {
        SearchFilter,
        SidebarMenu
    },
}
</script>
