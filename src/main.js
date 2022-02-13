import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Vuelidate from "vuelidate";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
