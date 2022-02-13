<template>
  <div id="container">
    <form @submit.prevent="handleSubmit">
      <div class="inputbox">
        <input v-model="$v.nameCity.$model" type="text" required="required"/>
        <!-- <div class="error" v-if="!$v.nameCity.minLength">A name city must have at least {{ $v.nameCity.$params.minLength.min }} letters.</div> -->
        <span>Enter a name city</span>
      </div>
      <div class="inputbox">
        <input :class="{disable: $v.$invalid}" @click="handleSubmit" type="submit" value="Get Weather"/>
      </div>
    </form>
    <Pin/>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators"
import { mapGetters, mapActions } from "vuex";
import Pin from "./utils/Pin.vue"
export default {
  name: "Weather",
  data() {
    return {
      nameCity: ""
    }
  },
  components: {
    Pin
  },
  validations: {
    nameCity: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    ...mapActions(['getWeatherForCity']),
    handleSubmit() {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        // call api
        this.getWeatherForCity(this.nameCity)
      }
    }
  },
  computed: mapGetters(['getCurrentState'])
}
</script>
<style scoped>
#container {
  padding: 30px;
}
.inputbox {
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
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
}
.disable{
  background-color: #ddd !important;
  color: #999 !important;
}


</style>