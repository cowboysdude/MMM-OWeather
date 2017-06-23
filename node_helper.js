
  /* Magic Mirror
   * Module: MMM-NPMWeather
   *
   * By Cowboysdude
   * MIT Licensed.
   */
  var NodeHelper = require('node_helper');
  var weather = require('weather-js');
  
 
 module.exports = NodeHelper.create({

start: function() {
    	console.log("Getting module: " + this.name);
    },
    
     getWeather: function () {
     	var self = this;
         weather.find({search: this.config.location, degreeType: this.config.read}, function(err, result) {
  if(err) console.log(err);
     var weather = JSON.parse(JSON.stringify(result, null, 2));
     var result = weather;
            self.sendSocketNotification('WEATHER_RESULT', result);
     });           
     },
 
     socketNotificationReceived: function(notification, payload) {
        if (notification === "CONFIG") {
            this.config = payload;
        } else if (notification === "GET_WEATHER") {
            this.getWeather();
        }
     }
 });