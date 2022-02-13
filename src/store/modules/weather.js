import { getWeather } from "../../api/weather";

// initial state
const state = {
  weather: {
    nameCity: "",
    latitude: "",
    longtitude: "",
    temperature: "",
    airPressure: "",
    tempMax: "",
    tempMin: "",
    cloudNess: "",
    weather_description: [],
    weather_forecast: [],
  },
};

// getters
const getters = {
  getCurrentState: (state) => state.weather,
};

const actions = {
  async getWeatherForCity({ commit }, nameCity) {
    const response = await getWeather(nameCity);
    commit("setWeather", response);
  },
};

const mutations = {
  setWeather: (state, weather) => (state.weather = weather),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
