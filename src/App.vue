<template>
  <div id="app">
    <Loading/>
    <sidebar-menu @toggle-collapse="onToggleCollapse" :menu="menu" width="190px"/>
    <div :style="{marginLeft: sidebarWidth + 'px', transition: 'margin-left 350ms', width: '100%'}">
      <router-view :key="$route.path"/>
    </div> 
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu"
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Loading from "./components/utils/Loading.vue"

export default {
  name: 'App',
  components: {
    SidebarMenu,
    Loading
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          href: {path: "/"},
          title: 'Home',
          icon: 'fas fa-home'
        },
        {
          href: {path: "/weather"},
          title: 'Weather',
          icon: 'fas fa-align-right'
        },
        {
          href: {path: "/profile"},
          title: 'Profile',
          icon: 'fas fa-user'
        }
      ],
      sidebarWidth: 190
    }
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
  background-color: #42b983;
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
