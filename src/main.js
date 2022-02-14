import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Vuelidate from "vuelidate";
import store from "./store/index.js";
import Lottie from "vue-lottie";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.component("lottie", Lottie);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
