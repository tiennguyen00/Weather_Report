import Vue from "vue";
import Vuex from "vuex";
import weather from "./modules/weather";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    weather,
  },
});
