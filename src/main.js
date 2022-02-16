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

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
