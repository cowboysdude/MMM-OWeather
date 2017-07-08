
   /* Magic Mirror
    * Module: MMM-NPMWeather
    *
    * By Cowboysdude
    * MIT Licensed.
    */
   
   Module.register("MMM-OWeather",{
   
      // Module config defaults.
      defaults: {
          updateInterval: 15*60*1000, // every 15 min
          animationSpeed: 0,
          initialLoadDelay: 875, // 0 seconds delay
          retryDelay: 4500,
          location: "14904", //Zip or "Elmira, NY",
          read: "F",  //"F" or "C"
          rotateInterval: 15 * 1000,
          maxWidth: "100%",
          header: true,
          uac: "PLEASE GET ENTER OR GET A UAC KEY AT http://www.myweather2.com/developer/",
          
          iconTableDay: {
            "0": "modules/MMM-Oweather/icons/sunny.png",
            "1": "modules/MMM-Oweather/icons/PartlyCloudyDay.png",
            "2": "modules/MMM-Oweather/icons/cloudy.png",
            "3": "modules/MMM-Oweather/icons/Overcast.png",
            "10": "modules/MMM-Oweather/icons/Mist.png",
            "21": "modules/MMM-Oweather/icons/OccLightRain.png",
            "22": "modules/MMM-Oweather/icons/IsoSleetSwrsDay.png",
            "23": "modules/MMM-Oweather/icons/OccLightSleet.png",
            "24": "modules/MMM-Oweather/icons/FreezingDrizzle.png",
            "29": "modules/MMM-Oweather/icons/PartCloudRainThunderDay.png",
            "38": "modules/MMM-Oweather/icons/ModSnow.png",
            "39": "modules/MMM-Oweather/icons/Blizzard.png",
            "45": "modules/MMM-Oweather/icons/Fog.png",
            "49": "modules/MMM-Oweather/icons/FreezingFog.png",
            "50": "modules/MMM-Oweather/icons/IsoRainSwrsDay.png",
            "51": "modules/MMM-Oweather/icons/OccLightRain.png",
            "56": "modules/MMM-Oweather/icons/FreezingDrizzle.png",
            "57": "modules/MMM-Oweather/icons/FreezingDrizzle.png",
            "60": "modules/MMM-Oweather/icons/OccLightRain.png",
            "61": "modules/MMM-Oweather/icons/ModRain.png",
            "62": "modules/MMM-Oweather/icons/ModRainSwrsDay.png",
            "63": "modules/MMM-Oweather/icons/ModRain.png",
            "64": "modules/MMM-Oweather/icons/HeavyRainSwrsDay.png",
            "65": "modules/MMM-Oweather/icons/HeavyRain.png",
            "66": "modules/MMM-Oweather/icons/FreezingRain.png",
            "67": "modules/MMM-Oweather/icons/FreezingRain.png",
            "68": "modules/MMM-Oweather/icons/ModSleet.png",
            "69": "modules/MMM-Oweather/icons/HeavySleet.png",
            "70": "modules/MMM-Oweather/icons/OccLightSnow.png",
            "71": "modules/MMM-Oweather/icons/OccLightSnow.png",
            "72": "modules/MMM-Oweather/icons/ModSnow.png",
            "73": "modules/MMM-Oweather/icons/ModSnow.png",
            "74": "modules/MMM-Oweather/icons/HeavySnowSwrsDay.png",
            "75": "modules/MMM-Oweather/icons/HeavySnow.png",
            "79": "modules/MMM-Oweather/icons/FreezingRain.png",
            "80": "modules/MMM-Oweather/icons/IsoRainSwrsDay.png",
            "81": "modules/MMM-Oweather/icons/ModRainSwrsDay.png",
            "82": "modules/MMM-Oweather/icons/HeavyRain.png",
            "83": "modules/MMM-Oweather/icons/ModSleetSwrsDay.png",
            "84": "modules/MMM-Oweather/icons/ModSleetSwrsDay.png",
            "85": "modules/MMM-Oweather/icons/IsoSnowSwrsDay.png",
            "86": "modules/MMM-Oweather/icons/ModSnowSwrsDay.png",
            "87": "modules/MMM-Oweather/icons/FreezingRain.png",
            "88": "modules/MMM-Oweather/icons/FreezingRain.png",
            "91": "modules/MMM-Oweather/icons/PartCloudRainThunderDay.png",
            "92": "modules/MMM-Oweather/icons/CloudRainThunder.png",
            "93": "modules/MMM-Oweather/icons/PartCloudSleetSnowThunderDay.png",
            "94": "modules/MMM-Oweather/icons/CloudSleetSnowThunder.png"
        },

        iconTableNight: {
            "0": "modules/MMM-Oweather/icons/clear.png",
            "1": "modules/MMM-Oweather/icons/PartyCloudyNight.png",
            "2": "modules/MMM-Oweather/icons/cloudy.png",
            "3": "modules/MMM-Oweather/icons/Overcast.png",
            "10": "modules/MMM-Oweather/icons/Mist.png",
            "21": "modules/MMM-Oweather/icons/OccLightRain.png",
            "22": "modules/MMM-Oweather/icons/IsoSleetSwrsNight.png",
            "23": "modules/MMM-Oweather/icons/OccLightSleet.png",
            "24": "modules/MMM-Oweather/icons/FreezingDrizzle.png",
            "29": "modules/MMM-Oweather/icons/PartCloudRainThunderNight.png",
            "38": "modules/MMM-Oweather/icons/ModSnow.png",
            "39": "modules/MMM-Oweather/icons/Blizzard.png",
            "45": "modules/MMM-Oweather/icons/Fog.png",
            "49": "modules/MMM-Oweather/icons/FreezingFog.png",
            "50": "modules/MMM-Oweather/icons/IsoRainSwrsNight.png",
            "51": "modules/MMM-Oweather/icons/OccLightRain.png",
            "56": "modules/MMM-Oweather/icons/FreezingDrizzle.png",
            "57": "modules/MMM-Oweather/icons/FreezingDrizzle.png",
            "60": "modules/MMM-Oweather/icons/OccLightRain.png",
            "61": "modules/MMM-Oweather/icons/ModRain.png",
            "62": "modules/MMM-Oweather/icons/ModRainSwrsNight.png",
            "63": "modules/MMM-Oweather/icons/ModRain.png",
            "64": "modules/MMM-Oweather/icons/HeavyRainSwrsNight.png",
            "65": "modules/MMM-Oweather/icons/HeavyRain.png",
            "66": "modules/MMM-Oweather/icons/FreezingRain.png",
            "67": "modules/MMM-Oweather/icons/FreezingRain.png",
            "68": "modules/MMM-Oweather/icons/ModSleet.png",
            "69": "modules/MMM-Oweather/icons/HeavySleet.png",
            "70": "modules/MMM-Oweather/icons/OccLightSnow.png",
            "71": "modules/MMM-Oweather/icons/OccLightSnow.png",
            "72": "modules/MMM-Oweather/icons/ModSnow.png",
            "73": "modules/MMM-Oweather/icons/ModSnow.png",
            "74": "modules/MMM-Oweather/icons/HeavySnowSwrsNight.png",
            "75": "modules/MMM-Oweather/icons/HeavySnow.png",
            "79": "modules/MMM-Oweather/icons/FreezingRain.png",
            "80": "modules/MMM-Oweather/icons/IsoRainSwrsNight.png",
            "81": "modules/MMM-Oweather/icons/ModRainSwrsNight.png",
            "82": "modules/MMM-Oweather/icons/HeavyRain.png",
            "83": "modules/MMM-Oweather/icons/ModSleetSwrsNight.png",
            "84": "modules/MMM-Oweather/icons/ModSleetSwrsNight.png",
            "85": "modules/MMM-Oweather/icons/IsoSnowSwrsNight.png",
            "86": "modules/MMM-Oweather/icons/ModSnowSwrsNight.png",
            "87": "modules/MMM-Oweather/icons/FreezingRain.png",
            "88": "modules/MMM-Oweather/icons/FreezingRain.png",
            "91": "modules/MMM-Oweather/icons/PartCloudRainThunderNight.png",
            "92": "modules/MMM-Oweather/icons/CloudRainThunder.png",
            "93": "modules/MMM-Oweather/icons/PartCloudSleetSnowThunderNight.png",
            "94": "modules/MMM-Oweather/icons/CloudSleetSnowThunder.png"
        },
          
      },
    
      // Define required scripts.
      getScripts: function() {
          return ["moment.js"];
      },
      getStyles: function() {
           return ["MMM-OWeather.css", "weather-icons.css", "font-awesome.css"];
       },
  
      // Define start sequence.
      start: function() {
          Log.info("Starting module: " + this.name);
          this.sendSocketNotification('CONFIG', this.config);
  
          // Set locale.
          this.url = "http://www.myweather2.com/developer/weather.ashx?uac="+this.config.uac+"&temp_unit=f&ws_unit=mph&output=json"
          this.today = "";
          this.activeItem = 0;
          this.rotateInterval = null;
          this.scheduleUpdate();
      },
     
      
      getDom: function() {
      	
           var humordiv = document.createElement("div");
           humordiv.classList.add("light", "small","humordiv");
           humordiv.style.maxWidth = this.config.maxWidth;
           
          
          var wrapper = document.createElement("div");
          wrapper.classList.add("open");
          if (this.config.header == true){
		   var header = document.createElement("header");
          header.innerHTML = "Weather for "+this.config.location;
          wrapper.appendChild(header);	
		  }
		  
          if (!this.loaded) {
             wrapper.classList.add("wrapper", "open");
             wrapper.innerHTML = "Forecasting ...";
             wrapper.className = "bright light small";
             return wrapper;
			}  
			
			if (this.config.uac === "" || null || undefined){
			var lastrank = document.createElement("span");
            lastrank.classList.add("medium", "bright");
            lastrank.innerHTML = "PLEASE GET ENTER OR GET A UAC KEY AT http://www.myweather2.com/developer/";
            wrapper.appendChild(lastrank);
			} else {
          
          var weather = this.weather;
          
          var forecast = this.weather.forecast;
          var keys = Object.keys(this.weather.forecast);
              if (keys.length > 0) {
            if (this.activeItem >= keys.length) {
                this.activeItem = 0;
           }
           var forecast = this.weather.forecast[keys[this.activeItem]];
           var nextDate = moment(forecast.date).format('MM-DD-YYYY');
           var withoutZero = this.stripZeros(nextDate);
           var today = moment().format('MM-DD-YYYY');
          
            var weatherTable = document.createElement("table");
            weatherTable.setAttribute('style', 'table-layout:fixed;');
           
            var locationRow = document.createElement("tr");
            
            var locationImg = document.createElement("th");
			locationImg.setAttribute("colspan", 1);
			locationImg.classList.add("xsmall","bright");
			locationImg.innerHTML = "Currently";
			locationRow.appendChild(locationImg);
			weatherTable.appendChild(locationRow);
			
			var currentTemp = document.createElement("th");
			var tempSymbol = document.createElement("i");
			tempSymbol.setAttribute("colspan", 1);
			tempSymbol.classList.add("wi", "wi-thermometer");
			currentTemp.appendChild(tempSymbol);
			locationRow.appendChild(currentTemp);

	        var currentH = document.createElement("th");
			var currentHSymbol = document.createElement("i");
			currentHSymbol.setAttribute("colspan", 1);
			currentHSymbol.classList.add("wi", "wi-humidity");
			currentH.appendChild(currentHSymbol);
			locationRow.appendChild(currentH);

			var currentWind = document.createElement("th");
			var currentWindSymbol = document.createElement("th");
			currentWindSymbol.setAttribute("colspan", 1);
			currentWindSymbol.classList.add("wi", "wi-strong-wind");
			currentWind.appendChild(currentWindSymbol);
			locationRow.appendChild(currentWind);
			
			var nextFive = document.createElement("th");
			nextFive.setAttribute("colspan", 1);
			nextFive.classList.add("xsmall","bright");
			nextFive.innerHTML = "Extended Forecast";
			locationRow.appendChild(nextFive);
			weatherTable.appendChild(locationRow);
			
			var FiveSymbol = document.createElement("th");
			var skyImg = document.createElement("i");
			skyImg.setAttribute("colspan", 1);
			skyImg.classList.add("fa", "fa-calendar");
			FiveSymbol.appendChild(skyImg);
			locationRow.appendChild(FiveSymbol);
			
			var nextFiveC = document.createElement("th");
			var fiveImg = document.createElement("i");
			fiveImg.setAttribute("colspan", 1);
			fiveImg.classList.add("wi", "wi-thermometer");
			nextFiveC.appendChild(fiveImg);
			locationRow.appendChild(nextFiveC);
			
			var FiveSymbol = document.createElement("th");
			var nextFiveCondition = document.createElement("i");
			nextFiveCondition.setAttribute("colspan", 3);
			nextFiveCondition.classList.add("wi", "wi-horizon");
			FiveSymbol.appendChild(nextFiveCondition);
			locationRow.appendChild(FiveSymbol);
			
			var fhumidSymbol = document.createElement("th");
			var fhumid = document.createElement("i");
			fhumid.setAttribute("colspan", 1);
			fhumid.classList.add("wi", "wi-humidity");
			fhumidSymbol.appendChild(fhumid);
			locationRow.appendChild(fhumidSymbol);
			
			var chanceSymbol = document.createElement("th");
			var chance = document.createElement("i");
			chance.setAttribute("colspan", 1);
			chance.classList.add("wi", "wi-day-rain");
			chanceSymbol.appendChild(chance);
			locationRow.appendChild(chanceSymbol);
			
			var row = document.createElement("tr");
			
			var d = new Date();
            var n = d.getHours();
			var clock = this.updateTime();
			
		    var WLogo = document.createElement("td");
		    var wimg = document.createElement("img");
            wimg.classList.add("weatherimg");
            wimg.src = this.config.iconTableDay[weather.current_weather[0].weather_code];
            row.appendChild(wimg);
            weatherTable.appendChild(row);
			
			var dateColumn = document.createElement("td");
			dateColumn.setAttribute('style', 'font-weight: bold; font-size:100%;');
			if (weather.current_weather[0].temp < 40){
			dateColumn.classList.add("bright","lowtemp");
	        dateColumn.innerHTML = weather.current_weather[0].temp + "&#730;";	
			} else if (weather.current_weather[0].temp > 85){
			dateColumn.classList.add("bright", "hitemp");
	        dateColumn.innerHTML = weather.current_weather[0].temp + "&#730;";	
			} else {
			dateColumn.classList.add("bright");
	        dateColumn.innerHTML = weather.current_weather[0].temp + "&#730;";	
			}
			row.appendChild(dateColumn);
			weatherTable.appendChild(row);

			var highColumn = document.createElement("td");
			highColumn.setAttribute('style', 'font-weight: bold; color: #FFF; font-size:100%; ');
			if (weather.current_weather[0].humidity > 85){
	        highColumn.classList.add("bright", "humid");
			highColumn.innerHTML = weather.current_weather[0].humidity+"%";	
			} else {
			highColumn.classList.add("bright");
			highColumn.innerHTML = weather.current_weather[0].humidity+"%";	
			}
	        highColumn.innerHTML = weather.current_weather[0].humidity+"%";
			row.appendChild(highColumn);
			weatherTable.appendChild(row);

			var lowColumn = document.createElement("td");
			lowColumn.classList.add("xsmall", "bright");
			lowColumn.setAttribute("colspan", 1);
			if (weather.current_weather[0].wind[0].dir == "Not Available"){
			lowColumn.innerHTML = weather.current_weather[0].wind[0].dir;	
			} else {
			lowColumn.innerHTML = weather.current_weather[0].wind[0].dir +"/"+ weather.current_weather[0].wind[0].speed;	
			}
			row.appendChild(lowColumn);
			weatherTable.appendChild(row);
			
		
			var nextC = document.createElement("td");
			var fimg = document.createElement("img");
			fimg.classList.add('weatherimg');
			fimg.src = this.config.iconTableDay[forecast.day[0].weather_code];
			row.appendChild(fimg);
			weatherTable.appendChild(row);	
			
			
			var skyText = document.createElement("td");
			skyText.setAttribute('style', 'font-weight: bold; font-size:80%;');
			skyText.classList.add("bright");
			skyText.innerHTML = moment(forecast.date).format('M-D-YYYY');
			row.appendChild(skyText);
			weatherTable.appendChild(row);
         	
			var nextColumn = document.createElement("td");
			nextColumn.classList.add("xsmall", "bright");
			nextColumn.innerHTML = forecast.day_max_temp+"&#730;/"+forecast.night_min_temp+"&#730;";
			row.appendChild(nextColumn);
			weatherTable.appendChild(row);
			
			var d = new Date();
            var n = d.getHours();
			
			var fCast = document.createElement("td");
			fCast.classList.add("xsmall", "bright");
			fCast.innerHTML =forecast.day[0].weather_text;
			row.appendChild(fCast);
			weatherTable.appendChild(row);
			
			var fhumid = document.createElement("td");
			fhumid.classList.add("xsmall", "bright");
			fhumid.innerHTML =forecast.day[0].humidity+"%";
			row.appendChild(fhumid);
			weatherTable.appendChild(row);
			
			var Pchance = document.createElement("td");
			Pchance.classList.add("xsmall", "bright");
			Pchance.innerHTML =forecast.day[0].cloudcover+"%";
			row.appendChild(Pchance);
			weatherTable.appendChild(row);
			}
			
			humordiv.appendChild(weatherTable);
			wrapper.appendChild(humordiv);
           } 
           var Daterow = document.createElement("tr");
    
            var Ldate = document.createElement("td");
            Ldate.setAttribute("colspan", 5);
			        if (n < 12){
            Ldate.classList.add("bright","small", "amclock");
					} else if (n > 12 && n < 21) {
			Ldate.classList.add("bright","small", "eclock");			
					} else {
			Ldate.classList.add("bright","small", "pmclock");			
					}
			Ldate.innerHTML ="Weather for "+this.config.location+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "+moment().format('M-D-YYYY')+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +clock;
			Daterow.appendChild(Ldate);
			weatherTable.appendChild(Daterow);
			
			var srss = this.srss
			
			var sunrise = srss.sunrise;
            var sunset = srss.sunset;
            var utcsunrise = moment.utc(sunrise).toDate();
            var utcsunset = moment.utc(sunset).toDate();
            var sunrise = moment(utcsunrise).local().format('h:mm A');
            var sunset = moment(utcsunset).local().format('h:mm A');
			
			var Rdate = document.createElement("td");
            Rdate.setAttribute("colspan", 5);
			        if (n < 12){
            Rdate.classList.add("bright","small", "amclock");
					} else if (n > 12 && n < 21) {
			Rdate.classList.add("bright","small", "eclock");	
					} else {
			Rdate.classList.add("bright","small", "pmclock");			
					}
			Rdate.innerHTML = "<img src='modules/MMM-OWeather/icons/Sunrise.png' width=24px; height=24px;>&nbsp;&nbsp;&nbsp;"+sunrise+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='modules/MMM-OWeather/icons/sunset.png' width=24px; height=24px;>&nbsp;&nbsp;&nbsp;"+sunset;
			Daterow.appendChild(Rdate);
			weatherTable.appendChild(Daterow);
			
			
           
			return wrapper;
			},
  
       processWeather: function(data) {
         this.weather = data.weather;
         this.loaded = true;
     },
     
     processSRSS: function(data) {
         this.srss = data.results;
         console.log(this.srss);
     },
    
     updateTime: function () {
    var date = new Date();
    var options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    var timeString = date.toLocaleString('en-US', options);
    return timeString;
    },
     
     stripZeros: function (dateStr){
       return dateStr.split('-').reduce(function(date, datePart){
        return date += parseInt(datePart) + '-'
         }, '').slice(0, -1);
        },
     
      scheduleCarousel: function() {
        console.log("Scheduling Countdown...");
        this.rotateInterval = setInterval(() => {
            this.activeItem++;
            this.updateDom(this.config.animationSpeed);
        }, this.config.rotateInterval);
    },      
     
     scheduleUpdate: function() {
         setInterval(() => {
             this.getWeather();
         }, this.config.updateInterval);
         
         this.getWeather(this.config.initialLoadDelay);
     },

     getWeather: function() {
         this.sendSocketNotification('GET_WEATHER' , this.url);
     },

     socketNotificationReceived: function(notification, payload) {
         if (notification === "WEATHER_RESULT") {
             this.processWeather(payload);
         if (this.rotateInterval == null) {
                this.scheduleCarousel();
            }    
             this.updateDom(this.config.animationSpeed);
         }
        if (notification === "SRSS_RESULTS") {
             this.processSRSS(payload);
			}
     },

 });
