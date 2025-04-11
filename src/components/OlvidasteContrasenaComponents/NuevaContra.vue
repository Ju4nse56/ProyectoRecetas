<template>
<div class="password">
        <div class="input-group">
            <p>escribe tu nueva contraseña</p>
            <input type="password" placeholder="Password">
        </div>
        <br>
        <div class="input-group">
            <p>repite tu nueva contraseña</p>
            <input type="password" placeholder="Confirm-Password">
        </div>
        <br>
</div>
</template>

<script>

export default {
    name: 'IngresarCodigo',
     
}


</script>
<style>
.password{
    .login-box2 {
    width: 100%;
    height: 60%;
}
.input-group input {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    background: none;
    outline: none;
}
}
</style>