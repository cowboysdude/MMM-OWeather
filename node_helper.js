
  /* Magic Mirror
   * Module: MMM-OWeather
   *
   * By Cowboysdude
   * MIT Licensed.
   */
var NodeHelper = require('node_helper');
const request = require('request');
var moment = require('moment-timezone');

module.exports = NodeHelper.create({
	  
    start: function() {
    	console.log("Starting module: " + this.name);
    },
    
    getWeather: function(url) {
    	request({ 
    	    url: url,
    	          method: 'GET' 
    	        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                        var result = JSON.parse(body);
                        this.sendSocketNotification("WEATHER_RESULT", result);
                        this.getSRSS();
            }
       });
    },
     getSRSS: function(){
     	var self = this;
	 	request({ 
    	    url: "https://api.sunrise-sunset.org/json?lat=42.089796&lng=-76.807734&formatted=0",
    	          method: 'GET' 
    	        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                        var srssresult = JSON.parse(body);
                        this.sendSocketNotification("SRSS_RESULTS", srssresult);
            }
       });
    },
    
    //Subclass socketNotificationReceived received.
    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_WEATHER') {
                this.getWeather(payload);
            }
         if (notification === 'GET_SRSS') {
                this.getSRSS(payload);
			}    
         }  
    });
