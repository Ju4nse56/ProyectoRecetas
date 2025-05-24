<template>
  <div class="sidebar">
    <div class="sidebar-icon" :class="{ active: activeIcon === 'home' }" @click="navigateToHome()">
      <img class="icon" :src="require('@/assets/imgMenu/home.png')" alt="Home" />
    </div>

    <div class="sidebar-icon" :class="{ active: activeIcon === 'search' }" @click="navigateToSearch()">
      <img class="icon" :src="require('@/assets/imgMenu/Search.png')" alt="Search" />
    </div>

    <div class="sidebar-icon" :class="{ active: activeIcon === 'favorite' }" @click="navigateToFavoritos()">
      <img class="icon" :src="require('@/assets/imgMenu/favorite.png')" alt="Favorite" />
    </div>

    <div class="sidebar-icon" :class="{ active: activeIcon === 'update' }" @click="navigateToActualizaciones()">
      <img class="icon" :src="require('@/assets/imgMenu/update.png')" alt="Update" />
    </div>

    
    <div class="sidebar-icon" :class="{ active: activeIcon === 'person' }" @click="Person()">
      <img class="icon" :src="require('@/assets/imgMenu/person.png')" alt="Person" />
      
      
      <div v-if="showChatModal" class="chat-modal"  @click="Logout()">
        Logout
        <img class="icon" :src="require('@/assets/imgMenu/logoutred.png')" alt="Person" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      activeIcon: 'home',
      showChatModal: false, 
    };
  },
  created() {
    const currentPath = this.$route.path;
    if (currentPath.includes('/Favoritos')) {
      this.activeIcon = 'favorite';
    } else if (currentPath.includes('/Actualizaciones')) {
      this.activeIcon = 'update';
    } else if (currentPath.includes('/HomeView')) {
      this.activeIcon = 'home';
    } else if (currentPath.includes('/Search')) {
      this.activeIcon = 'search';
    }
  },
  methods: {
    navigateToHome() {
      this.activeIcon = 'home';
      this.$router.push('/HomeView');
      this.showChatModal = false;
    },
    navigateToFavoritos() {
      this.activeIcon = 'favorite';
      this.$router.push('/Favoritos');
      this.showChatModal = false;
    },
    navigateToActualizaciones() {
      this.activeIcon = 'update';
      this.$router.push('/Actualizaciones');
      this.showChatModal = false;
    },
    navigateToSearch() {
      this.activeIcon = 'search';
      this.$router.push('/Search');
      this.showChatModal = false;
    },
    Person() {
      this.activeIcon = 'person';
      this.showChatModal = !this.showChatModal;
    },
    Logout(){
        this.$router.push('/LoginPrincipal');
    }
  }
};
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
  position: relative;
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
  z-index: 12;
}

.sidebar-icon:hover {
  transform: translateX(4px);
}

.sidebar-icon.active {
  transform: translateX(8px);
  background-color: #fbfcdb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 25px;
  height: 25px;
}


.chat-modal {
  position: absolute;
  display: flex;
  top: 0;
  left: 45px;
  background-color: white;
  padding: 10px 15px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  font-size: 14px;
  white-space: nowrap;
  z-index: 2;
  align-items: center;
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

  .sidebar-icon:hover {
    transform: translateY(-4px);
  }

  .sidebar-icon.active {
    transform: translateY(-8px);
    background-color: #fbfcdb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .chat-modal {
    top: -10px;
    left: 65px;
  }
  .chat-modal {
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
    top: auto;
  }
}
</style>
