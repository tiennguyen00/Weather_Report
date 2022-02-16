import { getWeather } from "../../api/weather";

// initial state
const state = {
  weather: {
    nameCity: "",
    latitude: 0,
    longtitude: 0,
    temperature: 0,
    airPressure: 0,
    tempMax: 0,
    tempMin: 0,
    cloudNess: 0,
    timeZone: 0,
    weatherDescription: [],
    weatherForecast: [],
  },
  loading: false,
};

// getters
const getters = {
  getCurrentState: (state) => state.weather,
  getCurrentStateLoading: (state) => state.loading,
};

const actions = {
  async getWeatherForCity({ commit }, nameCity) {
    const response = await getWeather(nameCity);
    commit("setWeather", response);
  },
  showLoading({ commit }) {
    commit("showLD");
  },
  hideLoading({ commit }) {
    commit("hideLD");
  },
};

const mutations = {
  setWeather: (state, weather) => (state.weather = weather),
  showLD: (state) => (state.loading = true),
  hideLD: (state) => (state.loading = false),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
