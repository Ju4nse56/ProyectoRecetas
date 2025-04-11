<template>
    <p>Ingresa el codigo que se envio a tu gmail</p>
    <div class="code-container">
    
    <input
      v-for="(digit, index) in code"
      :key="index"
      v-model="code[index]"
      maxlength="1"
      @input="focusNext(index)"
    />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
export default {
    name: 'IngresarCodigo',
    

    data() {
    return {
      code: ["", "", "", ""], // Almacena los dígitos
      correctCode: "1234",
      message: ""
    };
  },
  methods: {
    focusNext(index) {
      if (this.code[index].length === 1 && index < this.code.length - 1) {
        this.$nextTick(() => {
          this.$el.querySelectorAll("input")[index + 1].focus();
        });
      }
    },
    validateCode() {
      const userCode = this.code.join("");
      this.message =
        userCode === this.correctCode
          ? "✅ Código correcto"
          : "❌ Código incorrecto, intenta nuevamente";
    }
  }

}
</script>
<style>
    .code-container {
    display: flex;
    gap: 10px;
    }
    input {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    }
</style>