<template>
  <div id="container">
    <form @submit.prevent="handleSubmit">
      <div class="inputbox">
        <input v-model="$v.nameCity.$model" type="text" required="required"/>
        <span>{{$t('textBox')}}</span>
      </div>
      <transition name="fade">
        <div class="error" v-if="!$v.nameCity.minLength">{{ $t("error[0]", {minLength: $v.nameCity.$params.minLength.min}) }}</div>
      </transition>

      <div class="inputbox">
        <input :class="{disable: $v.$invalid}" @click="handleSubmit" type="submit" :value="$t('textButton')"/>
      </div>
    </form>
    <div v-show="getCurrentState.temperature" class="displayResult">
      <div id="mainWeather">
        <Pin 
          :nameCity="getCurrentState.nameCity" 
          :latitude="getCurrentState.latitude" 
          :longtitude="getCurrentState.longtitude" 
          :temperature="getCurrentState.temperature"
          :airPressure="getCurrentState.airPressure" 
          :tempMax="getCurrentState.tempMax" 
          :timeZone="getCurrentState.timeZone"
          :tempMin="getCurrentState.tempMin" 
          :cloudNess="getCurrentState.cloudNess"
          :weatherDescription="getCurrentState.weatherDescription" style="margin-top: 35px"/>
      </div>
      <div id="forecastWeather">
        <div v-for="item in getCurrentState.weatherForecast.slice(0,8)" :key="item.index">
          <Pin2 :timeDT="item.dt" :temperature="item.temp" :timeZone="getCurrentState.timeZone"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators"
import { mapGetters, mapActions } from "vuex";
import Pin from "../utils/Pin.vue"
import Pin2 from "../utils/Pin2.vue"
export default {
  name: "Weather",
  data() {
    return {
      nameCity: ""
    }
  },
  components: {
    Pin,
    Pin2,
  },
  validations: {
    nameCity: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    ...mapActions(['getWeatherForCity', 'showLoading', 'hideLoading']),
    async handleSubmit() {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        // call api
        this.showLoading()
        await this.getWeatherForCity(this.nameCity)
        this.hideLoading()
      }
    }
  },
  computed: mapGetters(['getCurrentState'])
}
</script>
<style scoped>
#container {
  padding: 30px;
  width: 100%;
}
.inputbox {
  position: relative;
  width: 300px;
  height: 50px;
}
.inputbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
}
.inputbox:last-child {
  margin-bottom: 0;
}
.inputbox span {
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
}
.inputbox input:focus ~ span, .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
.inputbox [type="submit"] {
  width: 50%;
  background: dodgerblue;
  color: #fff;
  border: #fff;
}
.inputbox:hover [type="submit"] {
  /* background: linear-gradient(45deg, greenyellow, dodgerblue); */
}
.error {
  color: red;
  font-size: 12px;
  text-align: left;
  margin: 10px;
  transition: opacity 1s ease;
}
.disable{
  background-color: #ddd !important;
  color: #999 !important;
}

.displayResult {
  display: flex;
}
#forecastWeather {
  float: left;
  flex-grow: 1;
  margin-top: 35px;
  width: 350px;
}
#mainWeather {
  /* flex-grow: 1 */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>