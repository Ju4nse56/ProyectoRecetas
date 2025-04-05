<template>
  <div class="container">
        <div class="image-placeholder">
            <img :src="require('@/assets/LoginLogo/PolloSalseado.jpg')" alt="" class="imagen">
        </div>

        <div class="login-box">
            <div class="login-box2">
                <h2>Bienvenido</h2>
            <br>

            <div class="input-group">
                <input type="email" placeholder="E-mail">
            </div>
            <br>
            <div class="input-group">
                <input type="password" placeholder="Password">
            </div>
            <br>
            <div class="input-group">
                <input type="password" placeholder="Confirm-Password">
            </div>
            <br>
            

            <button class="login-btn">Sing up</button>
            <br>

            <div class="forgot-password">¿Olvidaste tu contraseña?</div>
            </div>
              
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginHome2',
}
</script>

<style>
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            background-color: #f4f4f4;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            border: none;
            border-bottom: 2px solid #ccc;
            background: none;
            outline: none;
        }

        .login-btn {
            width: 100%;
            padding: 10px;
            background: black;
            color: white;
                      border: none;
            border-radius: 20px;
            cursor: pointer;
            font-size: 16px;
        }

        .forgot-password {
            text-align: center;
            margin-top: 10px;
            font-size: 14px;
        }
        .container {
            display: flex;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 800px;
            height: 500px;
            
        }

        .image-placeholder {
            width: 50%;
            height: 100%;
            background: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            margin-right: 20px;
        }
        .imagen{
            width: 100%;
            height: 100%;
        }

        .login-box {
            width: 50%;
            height:100% ;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .login-box2{
            width: 100%;
            height: 60%;
        }
</style>