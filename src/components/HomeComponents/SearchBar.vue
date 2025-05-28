<template>
    <div class="search-section">
        <div class="blur-container">
            <h1 class="title">Try it</h1>
            <div class="search-container">
                <input type="text" placeholder="Buscar" class="search-input" v-model="text" @keyup.enter="search">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',

    data() {
        return {
            text: ""
        }
    },

    methods: {
        search: function() {
            localStorage.setItem('texto', this.text);
            this.$router.push('/Search');
        }
    },
}
</script>

<style scoped>
.search-section {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    position: relative;
    overflow: hidden;
    padding: 20px;
    border-radius: 10px;
}

.search-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 0;
    pointer-events: none;
}

.blur-container {
    position: relative;
    z-index: 1;
}

.title {
    display: flex;
    font-size: 24px;
    margin-bottom: 15px;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
    color: #2c3e50;
}

.search-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
}

.search-input {
    font-size: medium;
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-input:hover{
    background-color: rgba(255, 255, 255, 0.9);
}

.search-input:focus{
    outline: none;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #4c5c64;
}

.filter{
    width: 33px;
    height: 33px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.filter:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.05);
}

.filter .icon{
    width: 22px;
    height: 22px;
    cursor: pointer;
}
</style>