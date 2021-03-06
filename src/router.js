import Vue from "vue";
import VueRouter from "vue-router";
// import i18n from "./i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/Home/Home.vue"),
    meta: {
      title: "Which will be displayed in the HTML page",
      isPublic: false, //This variable is used to know if this page can be viewed with or without authentication
    },
  },
  {
    path: "/weather",
    name: "Weather",
    component: () => import("@/components/Weather/Weather.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/components/Profile/Profile.vue"),
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () => import("@/components/NotFound/NotFound.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: "something",
  routes,
});

export default router;
