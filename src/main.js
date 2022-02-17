import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Vuelidate from "vuelidate";
import store from "./store/index.js";
import Lottie from "vue-lottie";
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(i18n);
Vue.component("lottie", Lottie);

router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  i18n.locale = "en";
  next();
});

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
