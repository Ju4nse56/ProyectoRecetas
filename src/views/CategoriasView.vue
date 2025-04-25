<template>
    <div class="main-container">
        <SidebarMenu />
        <div class="derecha">
            <component :is="componenteActual" />
        </div>
    </div>
</template>

<script>
import CategoriaDesayuno from '@/components/CategoriaComponents/CategoriaDesayuno.vue';
import CategoriaCena from '@/components/CategoriaComponents/CategoriaCena.vue';
import SidebarMenu from '@/components/HomeComponents/SidebarMenu.vue';
import CategoriaAlmuerzo from '@/components/CategoriaComponents/CategoriaAlmuerzo.vue';
import CategoriaPostre from '@/components/CategoriaComponents/CategoriaPostre.vue';
import CategoriaSinLuten from '@/components/CategoriaComponents/CategoriaSin-luten.vue';
import CategoriaVegana from '@/components/CategoriaComponents/CategoriaVegana.vue';
export default {

    name: 'CategoriasView',
    components: {
        SidebarMenu
    },
    computed: {
        componenteActual() {
            const tipo = this.$route.params.tipo;
            return {
                desayuno: CategoriaDesayuno,
                cena: CategoriaCena,
                postre: CategoriaPostre,
                almuerzo: CategoriaAlmuerzo,
                vegana: CategoriaVegana,
                Singluten: CategoriaSinLuten
            }[tipo] || null;
        }
    },
    watch: {
        '$route.params.tipo': {
            handler() {
                this.$forceUpdate();
            }
        }
    }
}
</script>

<style scoped>
.main-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    color: #000;
    flex-direction: row;
    overflow: hidden;
}

.derecha {
    width: 95%;
    height: 100%;
    overflow: hidden;
}

@media (max-width: 480px) {
    .derecha{
        width: 100%;
    }
}
</style>