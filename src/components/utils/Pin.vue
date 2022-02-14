<template>
  <div class="wrapper">
  <div class="widget-container">
    <div class="top-left">
      <h1 class="city" id="city">{{nameCity}}</h1>
      <!-- <h2 id="day">Day</h2> -->
      <h3 id="date"><i class="fas fa-solid fa-calendar-day"></i> {{currentDate}}</h3>
      <h3 id="time"><i class="fas fa-solid fa-clock"></i> {{currentTime}}</h3>
      <p class="geo"><i class="fas fa-solid fa-map"></i> {{longtitude}}&deg;N, {{latitude}}&deg;E</p>
    </div>
    <div class="top-right" v-for="item in weather_description" :key="item.index">
      <h1 id="weather-status">{{item.weather}} / {{item.description}}</h1>
      <div v-show="String(item.id)[0] == '2'" class="icon thunder-storm">
        <div class="cloud"></div>
        <div class="lightning">
          <div class="bolt"></div>
          <div class="bolt"></div>
        </div>
      </div>

      <div v-show="String(item.id)[0] == '3'" class="icon sun-shower">
        <div class="cloud"></div>
        <div class="sun">
          <div class="rays"></div>
        </div>
        <div class="rain"></div>
      </div>

       <div v-show="String(item.id)[0] == '5'" class="icon rainy">
        <div class="cloud"></div>
        <div class="rain"></div>
      </div>

      <div v-show="String(item.id)[0] == '6'" class="icon flurries">
        <div class="cloud"></div>
        <div class="snow">
          <div class="flake"></div>
          <div class="flake"></div>
        </div>
      </div>

      <div v-show="String(item.id) == '800'" class="icon sunny">
        <div class="sun">
          <div class="rays"></div>
        </div>
      </div>

      <div v-show="String(item.id)[0] == '7' || String(item.id)[0] == '8'" class="icon cloudy">
        <div class="cloud"></div>
        <div class="cloud"></div>
      </div>

 



      

    </div>
  
    <div class="horizontal-half-divider"></div>
    <div class="bottom-left">
      <h1 id="temperature">{{temperature}}</h1>
      <h2 id="celsius">&deg;C</h2>
    </div>
    <div class="vertical-half-divider"></div>
    <div class="bottom-right">
      <div class="other-details-key">
        <p>Temp Max</p>
        <p>Temp Min</p>
        <p>Pressure</p>
        <p>Cloud cover</p>
        <p>Wind speed</p>
      </div>
      <div class="other-details-values">
        <p class="windspeed">{{tempMax}} celsius</p>
        <p class="humidity">{{tempMin}} celsius</p>
        <p class="pressure">{{airPressure}} hPa</p>
        <p class="sunrise-time">{{cloudNess}} %</p>
        <p class="windspeed">12 Km/h</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Pin",
  props: {
    nameCity: String,
    latitude: String,
    longtitude: String,
    airPressure: String,
    temperature: String,
    tempMax: String,
    tempMin: String,
    cloudNess: String,
    weather_description: Array,
    weather_forecast: Array
  },
  data() {
    return {
      currentDate: 'dd/mm/yyy',
      currentTime: 'hh:mm:ss'
    }
  },
  created() {
    var current = new Date();
    this.currentDate = current.getDate() + "/" + current.getMonth() + "/" + current.getFullYear();
    this.currentTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  }

}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,300);

.wrapper {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  float: left;
}

.widget-container {
  width: 612px;
  height: 412px;
  display: block;
  background-color: #313e45;
  border-radius: 25px;
  border: 5px solid #eceff1;
  margin: 0 auto;
}


/* Widget 4 Quarter Division here */

.top-left {
  display: inline-block;
  height: 60%;
  width: 40%;
  padding: 50px 0 0 30px;
  color: white;
  text-align: start;
}

.top-right {
  height: 60%;
  width: 45%;
  /* display: inline-block; */
  float: right;
  padding: 50px 0 0 0;
}

.bottom-left {
  height: 20%;
  width: 45%;
  float: left;
  margin: 0;
  margin-top: 35px;
  color: white;

}

.bottom-right {
  height: 20%;
  width: 40%;
  float: right;
  /* margin: 0px 0px 20px 20px; */
  color: white;
  text-align: start;
  margin: -30px 0 0 0px;

}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}
p {
  line-height: 5px;
  font-weight: 100;
}


/* Top-left Div CSS */

#city {
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 35px;
}

#day {
  font-weight: 700;
  font-size: 25px;
  margin-top: 18px;
}

#date {
  font-weight: 500;
  font-size: 20px;
  margin-top: 4px;
}

#time {
  font-weight: 400;
  font-size: 18px;
  margin-top: 8px;
}

#codepen-link {
  font-weight: 400;
  font-size: 12px;
  margin-top: 20px;
}

.top-left > a {
  text-decoration: none;
  color: white;
}

.top-left > a:hover {
  color: #b0bec5;
}


/* Top-Right Div CSS */

#weather-status {
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin: 10px auto 0px;
  color: white
}

.top-right > img {
  width: 120px;
  height: 120px;
  display: block;
  margin: 15px auto 0 auto;
}


/* Horizontal-Half-divider */

.horizontal-half-divider {
  width: 100%;
  height: 3px;
  margin-top: -60px;
  background-color: #263238;
}

.vertical-half-divider {
  width: 3px;
  position: absolute;
  height: 167px;
  background-color: #263238;
  display: inline-block;
  padding: 0;
}


/* Bottom-left CSS */

#temperature,
#celsius,
#temp-divider,
#fahrenheit {
  display: inline;
  vertical-align: middle;
}

#temperature {
  font-size: 60px;
  font-weight: 800;
  margin-right: 5px;
}

#celsius {
  margin-right: 10px;
}

#fahrenheit {
  margin-right: 5px;
  color: #b0bec5;
}

#celsius,
#temp-divider,
#fahrenheit {
  font-size: 30px;
  font-weight: 800;
}

#celsius:hover,
#fahrenheit:hover {
  cursor: pointer;
}




/* Bottom-Right CSS */

.other-details-key {
  float: left;
  font-size: 16px;
  font-weight: 300;
}

.other-details-values {
  float: left;
  font-size: 16px;
  font-weight: 400;
  margin-left: 40px;
}

.watermark-link {
  text-decoration:none;
  color:#b0bec5;
}

.watermark-link:hover {
  color:white;
  text-decoration:none;
}

.watermark {
  margin-top:10px;
  text-align:center;
  font-weight:400;
}

/* Style icon weather */
.icon {
  position: relative;
  display: inline-block;
  width: 5em;
  height: 8em;
  font-size: 1em; /* control icon size here */
}

.cloud {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em,
    2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff,
    2.0625em 0.9375em 0 -0.5625em #fff;
}
.cloud:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em #fff;
}
.cloud:nth-child(2) {
  z-index: 0;
  background: #fff;
  box-shadow:
    -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff,
    0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff,
    2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  transform: scale(0.5) translate(6em, -3em);
  animation: cloud 4s linear infinite;
}
.cloud:nth-child(2):after { background: #fff; }

.sun {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5em;
  height: 2.5em;
  margin: -1.25em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em #fff;
  animation: spin 12s infinite linear;
}
.rays {
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  background: #fff;
  border-radius: 0.25em;
  box-shadow: 0 5.375em #fff;
}
.rays:before,
.rays:after {
  content: '';
  position: absolute;
  top: 0em;
  left: 0em;
  display: block;
  width: 0.375em;
  height: 1.125em;
  transform: rotate(60deg);
  transform-origin: 50% 3.25em;
  background: #fff;
  border-radius: 0.25em;
  box-shadow: 0 5.375em #fff;
}
.rays:before {
  transform: rotate(120deg);
}
.cloud + .sun {
  margin: -2em 1em;
}

.rain,
.lightning,
.snow {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: currentColor;
  color: #313e45;
}

.rain:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #0cf;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow:
    0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
    -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
    -1.375em -0.125em 0 rgba(255,255,255,0.2);
  transform: rotate(-28deg);
  animation: rain 3s linear infinite;
}

.bolt {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: #fff;
  opacity: 0.3;
  animation: lightning 2s linear infinite;
}
.bolt:nth-child(2) {
  width: 0.5em;
  height: 0.25em;
  margin: -1.75em 0 0 -1.875em;
  transform: translate(2.5em, 2.25em);
  opacity: 0.2;
  animation: lightning 1.5s linear infinite;
}
.bolt:before,
.bolt:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: -1.625em 0 0 -1.0125em;
  border-top: 1.25em solid transparent;
  border-right: 0.75em solid;
  border-bottom: 0.75em solid;
  border-left: 0.5em solid transparent;
  transform: skewX(-10deg);
}
.bolt:after {
  margin: -0.25em 0 0 -0.25em;
  border-top: 0.75em solid;
  border-right: 0.5em solid transparent;
  border-bottom: 1.25em solid transparent;
  border-left: 0.75em solid;
  transform: skewX(-10deg);
}
.bolt:nth-child(2):before {
  margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
}
.bolt:nth-child(2):after {
  margin: -0.125em 0 0 -0.125em;
  border-top: 0.375em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0.625em solid transparent;
  border-left: 0.375em solid;
}

.flake:before,
.flake:after {
  content: '\2744';
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.025em 0 0 -1.0125em;
  color: #fff;
  list-height: 1em;
  opacity: 0.2;
  animation: spin 8s linear infinite reverse;
}
.flake:after {
  margin: 0.125em 0 0 -1em;
  font-size: 1.5em;
  opacity: 0.4;
  animation: spin 14s linear infinite;
}
.flake:nth-child(2):before {
  margin: -0.5em 0 0 0.25em;
  font-size: 1.25em;
  opacity: 0.2;
  animation: spin 10s linear infinite;
}
.flake:nth-child(2):after {
  margin: 0.375em 0 0 0.125em;
  font-size: 2em;
  opacity: 0.4;
  animation: spin 16s linear infinite reverse;
}


/* Animations */ 

@keyframes spin {
  100% { transform: rotate(360deg); }
}

@keyframes cloud {
  0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
}

@keyframes rain {
  0% {
    background: #0cf;
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  50% {
    background: rgba(255,255,255,0.3);
    box-shadow:
      0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  100% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
}

@keyframes lightning {
  45% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
  50% {
    color: #0cf;
    background: #0cf;
    opacity: 1;
  }
  55% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
}

</style>
