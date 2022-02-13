<template>
  <div class="wrapper">
  <div class="widget-container">
    <div class="top-left">
      <h1 class="city" id="city">Beijing</h1>
      <!-- <h2 id="day">Day</h2> -->
      <h3 id="date">February 12, 2022</h3>
      <h3 id="time">11"55PM</h3>
      <p class="geo">Location, Location2</p>
    </div>
    <div class="top-right">
      <h1 id="weather-status">Rain / Description</h1>
      <img class="weather-icon" src="https://myleschuahiock.files.wordpress.com/2016/02/sunny2.png">
    </div>
    <div class="horizontal-half-divider"></div>
    <div class="bottom-left">
      <h1 id="temperature">0</h1>
      <h2 id="celsius">°C</h2>
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
        <p class="windspeed">10 celsius</p>
        <p class="humidity">0 celsius</p>
        <p class="pressure">0 hPa</p>
        <p class="sunrise-time">110 %</p>
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
    temperature: String,
    airPressure: String,
    tempMax: String,
    tempMin: String,
    weather_description: Array,
    weather_forecast: Array
  },
  data() {
    return {

    }
  }

}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,300);

.wrapper {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
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
  color: white;
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
  margin: 10px auto;
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
</style>
