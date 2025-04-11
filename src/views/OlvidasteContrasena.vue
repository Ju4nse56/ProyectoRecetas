<template>
    <div class="ContenedorOlvido">
        <div class="box">
            <component :is="componenteActivo"></component>
            <br>
            <div class="box2">
                
                <button type="button" class="btn-amarillo" @click="atras">Atrás</button>
                <button type="button" class="btn-amarillo" @click="siguiente">Siguiente</button>
            </div>  
        </div>
      
    </div>

</template>

<script>
    import IngresarContrasena from '@/components/OlvidasteContrasenaComponents/IngresarContrasena.vue';
    import IngresarCodigo from '@/components/OlvidasteContrasenaComponents/IngresarCodigo.vue';
    import NuevaContra from '@/components/OlvidasteContrasenaComponents/NuevaContra.vue';
    export default {
        components: {
            IngresarContrasena,
        },
        data() {
        return {
        pasoActual: 1, 
        };
        },
        computed: {
            componenteActivo() {
                switch (this.pasoActual) {
                case 1: return IngresarContrasena;
                case 2: return IngresarCodigo;
                case 3: return NuevaContra;
                default: return IngresarContrasena;
                }
      }
        },
        methods: {
            atras() {
                if (this.pasoActual === 1) {
                    this.$router.push('/LoginPrincipal');
                } else {
                    this.pasoActual--;
                }
            },
            siguiente() {
                if (this.pasoActual < 3) {
                    this.pasoActual++;
                } else {
                    this.$router.push('/LoginPrincipal');
                }
            }
        }   
    }
</script>
<style>
.ContenedorOlvido {
  background: #FDEB9E;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)

}
.box {
  width: 100%;
  height: 50%;
  background: #FDEB9E;
  padding: 20px;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.box2{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  
}
.btn-amarillo {
  background-color: #FACF43;
  color: #000; 
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-amarillo:hover {
  background-color: #e6b800; 
}
</style>