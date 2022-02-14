<template>
  <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <!-- <div class='wave -three'></div> -->
  <div class="weathercon">{{calculatude}}h</div>
  <div class="info">
    <h2 class="weather_state">TEMPERATURE</h2>
    <h1 class="temp">{{Math.floor(temperature)}} &deg;C | {{Math.floor(temperature*9/5 + 32)}} &deg;F</h1>
  </div>
</div>
</template>
<script>
export default {
  props: {
    timeDT: Number,
    temperature: Number
  },
  created() {
  },
  computed: {
    calculatude() {
      var hours = new Date(this.timeDT*1000);
      return hours.getHours();
    }
  }
}
</script>
<style scoped>
.box {
  display: inline-block;
  margin: 5px;
  float: left;
  width: 20vh;
  height: 27vh;
  border-radius: 25px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background-color: #313e45;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  /* min-width: 200px; */
  /* min-height: 350px; */
}

.wave {
  opacity: 0.3;
  position: absolute;
  top: 180%;
  left: 50%;
  background: white;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
  z-index: 1;
}

.wave.-three {
  animation: drift 5000ms infinite linear;
  z-index: 2 !important;
  opacity: 0.2;
}

.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: 0.1;
  z-index: 3 !important;
}

.box:after {
  content: "";
  display: block;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  z-index: 11;
  transform: translate3d(0, 0, 0);
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45%;
  z-index: 4;
}

.weather_state {
  font-size: 15px;
  text-align: center;
  font-weight: 800;
}

.date {
  text-align: center;
  margin-top: 5%;
  color: lighten(grey, 10%);
  font-size: 70%;
}

.temp {
  font-size: 20px;
  margin-top: 10%;
  text-align: center;
}

.weathercon {
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: white
}

@media (max-width: 600px) {
  .box {
    width: 90vw;
    height: 50vh;
  }

  .wave {
    top: 50%;
  }

  .weathercon {
    font-size: 5em;
  }

  .info {
    font-size: 1.5rem;
  }
}

@media (max-height: 500px) {
  .box {
    height: 100vh;
  }

  .wave {
    top: 150%;
  }
}
</style>
