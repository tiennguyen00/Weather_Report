<template>
  <div id="app">
    <Loading/>
    <!-- <sidebar-menu @toggle-collapse="onToggleCollapse" :menu="menu" width="190px"/> -->
    <div id="nav">
      <h2 style="color: #42b983">{{$t('nav.Title')}}</h2>
      <span>
        <i class="icon fas fa-solid fa-home fa-lg"></i><router-link class="router" to="/">{{$t('nav.Home')}}</router-link>
      </span>
      <span>
        <i class="icon fas fa-solid fa-cloud fa-lg"></i><router-link class="router" to="/weather">{{$t('nav.Weather')}}</router-link>
      </span>
      <span>
         <i class="icon fas fa-solid fa-user fa-lg" ></i><router-link class="router" to="/profile">{{$t('nav.Profile')}}</router-link>
      </span>
    </div>
    <div :style="{marginLeft: sidebarWidth + 'px', transition: 'margin-left 350ms', width: '100%'}">
      <router-view :key="$route.path"/>
    </div> 
    <LanguageSwitcher/>
  </div>
</template>

<script>
// import { SidebarMenu } from "vue-sidebar-menu"
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Loading from "./components/utils/Loading.vue"
import LanguageSwitcher from "./components/utils/LanguageSwitcher.vue"

export default {
  name: 'App',
  components: {
    // SidebarMenu,
    Loading,
    LanguageSwitcher
  },
  data() {
    return {
      // menu: [
      //   {
      //     header: true,
      //     title: i18n.t('nav.Title'),
      //     hiddenOnCollapse: true
      //   },
      //   {
      //     href: {path: "/"},
      //     title: this.$t('nav.Home'),
      //     icon: 'fas fa-home'
      //   },
      //   {
      //     href: {path: `${i18n.locale}/weather`},
      //     title: this.$t('nav.Weather'),
      //     icon: 'fas fa-align-right'
      //   },
      //   {
      //     href: {path: `${i18n.locale}/profile`},
      //     title: this.$t('nav.Profile'),
      //     icon: 'fas fa-user'
      //   }
      // ],
      sidebarWidth: 0
    }
  },
  created() {
    console.log("Created: ", this.menu[0].title)
    this.menu[0].title = this.$t('nav.Title')
  },
  methods: {
    onToggleCollapse(collapse){
      if(collapse)
        this.sidebarWidth = 50
      else
        this.sidebarWidth = 190
    }
  }
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}
#nav {
  background-color: #2c3e50;
  color: aliceblue;
  height: 100vh;
  width: 15%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 0 0 15px;
}
.router {
  margin: 10px 0;
  color: aliceblue;
  text-decoration: none;
  font-weight: bold;
  font-size: 150%;
  display: inline;
}
.icon {
  display: inline;
  width: 30px;
  height: 30px;
}
@media screen and (max-width: 1400px) {
  .router, #nav {
    font-size: 100%;
  }
}
@media screen and (max-width: 1200px) {
  .router, #nav {
    font-size: 50%;
  }
}


.v-sidebar-menu .vsm--link.vsm--link_active {
  color: #42b983;
  text-decoration: underline;
  background-color: rgba(256, 256, 256, 0.15);
}

#content {
  /* margin-left: 190px; */
}

</style>
