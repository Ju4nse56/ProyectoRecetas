<template>
    <div class="contenedor1">
        <div class="izquierda">
            <SidebarMenu/>
        </div>
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
    .contenedor1 {
      width: 800px;
      height: 500px;
      padding: 20px;
      display: flex;
      flex-direction: row;
      border-radius: 10px; 
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
    .derecha{
        width: 90%;
        height: 100%;
    }
    .izquierda{
        width: 10%;
        height: 100%;
    }
</style>