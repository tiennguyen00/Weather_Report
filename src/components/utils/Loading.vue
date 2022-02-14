<template>
 <div v-show="getCurrentStateLoading" id="wrapper">
    <lottie
    style="height: 100%" 
      :options="defaultOptions"
      :height="220"
      :width="180"
      v-on:animCreated="handleAnimation"
    />
 </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/loading-spinner.json"
import { mapGetters } from "vuex"
export default {
  name: "Loading",
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 3
    };
  },
  components: {
    "lottie": Lottie
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  },
  computed: mapGetters(["getCurrentStateLoading"])
}
</script>

<style scoped>
#wrapper {
  position: absolute;
  background-color: rgb(58, 48, 48);
  opacity: 0.8;
  height: 100vh;
  width: 100vw;
  z-index: 99;
}
</style>