
 
   /* Magic Mirror
    * Module: MMM-NPMWeather
    *
    * By Cowboysdude
    * MIT Licensed.
    */
   
   Module.register("MMM-NPMWeather",{
   
      // Module config defaults.
      defaults: {
          updateInterval: 60*60*1000, // every hour
          animationSpeed: 0,
          initialLoadDelay: 875, // 0 seconds delay
          retryDelay: 4500,
          location: "14904", //Zip or "Elmira, NY",
          read: "F",  //"F" or "C"
          rotateInterval: 5 * 1000,
          maxWidth: "325px",
          header: true
      },
    
      // Define required scripts.
      getScripts: function() {
          return ["moment.js"];
      },
      getStyles: function() {
           return ["MMM-NPMWeather.css"];
       },
  
      // Define start sequence.
      start: function() {
          Log.info("Starting module: " + this.name);
          this.sendSocketNotification('CONFIG', this.config);
  
          // Set locale.
          this.today = "";
          this.activeItem = 0;
          this.rotateInterval = null;
          this.scheduleUpdate();
      },
      
      getDom: function() {
      	
           var humordiv = document.createElement("div");
           humordiv.classList.add("light", "small");
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
           
           var locationRow = document.createElement("tr");
          
            var locationImg = document.createElement("th");
			locationImg.setAttribute("colspan", 1);
			locationImg.classList.add("xsmall","bright");
			locationImg.innerHTML = "Current Weather";
			locationRow.appendChild(locationImg);
			weatherTable.appendChild(locationRow);

			var location = document.createElement("th");
			location.setAttribute("colspan", 1);
			location.classList.add("xsmall","bright");
			location.innerHTML = "Temp";
			locationRow.appendChild(location);
			weatherTable.appendChild(locationRow);

			var currentH = document.createElement("th");
			currentH.setAttribute("colspan", 1);
			currentH.classList.add("xsmall","bright");
			currentH.innerHTML = "Humidity";
			locationRow.appendChild(currentH);
			weatherTable.appendChild(locationRow);

			var currentWind = document.createElement("th");
			currentWind.setAttribute("colspan", 2);
			currentWind.classList.add("xsmall","bright");
			currentWind.innerHTML = "Wind";
			locationRow.appendChild(currentWind);
			weatherTable.appendChild(locationRow);
			
			var nextFive = document.createElement("th");
			nextFive.setAttribute("colspan", 1);
			nextFive.classList.add("xsmall","bright");
			nextFive.innerHTML = "5 Days ";
			locationRow.appendChild(nextFive);
			weatherTable.appendChild(locationRow);
			
			var skyImg = document.createElement("th");
			skyImg.setAttribute("colspan", 1);
			skyImg.innerHTML = " ";
			locationRow.appendChild(skyImg);
			weatherTable.appendChild(locationRow);
			
			var nextFiveC = document.createElement("th");
			nextFiveC.setAttribute("colspan", 1);
			nextFiveC.classList.add("xsmall","bright");
			nextFiveC.innerHTML = "High/Low";
			locationRow.appendChild(nextFiveC);
			weatherTable.appendChild(locationRow);
			
			var nextFiveCondition = document.createElement("th");
			nextFiveCondition.setAttribute("colspan", 1);
			nextFiveCondition.classList.add("xsmall","bright");
			nextFiveCondition.innerHTML = "Forecast";
			locationRow.appendChild(nextFiveCondition);
			weatherTable.appendChild(locationRow);
							
			var chance = document.createElement("th");
			chance.setAttribute("colspan", 1);
			chance.classList.add("xsmall","bright");
			chance.innerHTML = "Precipitation";
			locationRow.appendChild(chance);
			weatherTable.appendChild(locationRow);
			
			var row = document.createElement("tr");
			
		    var WLogo = document.createElement("td");
            WLogo.classList.add("imgDes");
            WLogo.innerHTML = "<img src="+weather.current.imageUrl+" width=34px height=34px>";
            row.appendChild(WLogo);
            weatherTable.appendChild(row);

			var dateColumn = document.createElement("td");
			var weatherDate = moment(weather.current.date).format('MM-DD-YYYY');
			dateColumn.setAttribute('style', 'font-weight: bold; font-size:100%;');
			if (weather.current.temperature < 40){
			dateColumn.classList.add("bright","lowtemp");
	        dateColumn.innerHTML = weather.current.temperature + "&#730;";	
			} else if (weather.current.temperature > 80){
			dateColumn.classList.add("bright", "hitemp");
	        dateColumn.innerHTML = weather.current.temperature + "&#730;";	
			} else {
			dateColumn.classList.add("bright");
	        dateColumn.innerHTML = weather.current.temperature + "&#730;";	
			}
			row.appendChild(dateColumn);
			weatherTable.appendChild(row);

			var highColumn = document.createElement("td");
			highColumn.setAttribute('style', 'font-weight: bold; color: #FFF; font-size:100%;');
			if (weather.current.humidity > 85){
	        highColumn.classList.add("bright", "humid");
			highColumn.innerHTML = weather.current.humidity+"%";	
			} else {
			highColumn.classList.add("bright");
			highColumn.innerHTML = weather.current.humidity+"%";	
			}
	        highColumn.innerHTML = weather.current.humidity+"%";
			row.appendChild(highColumn);
			weatherTable.appendChild(row);

			var lowColumn = document.createElement("td");
			lowColumn.classList.add("xsmall", "bright");
			lowColumn.setAttribute("colspan", 2);
			lowColumn.innerHTML = weather.current.winddisplay;
			row.appendChild(lowColumn);
			weatherTable.appendChild(row);
			
			var nextC = document.createElement("td");
			nextC.classList.add("xsmall", "bright");
			if (nextDate < today){
			nextC.setAttribute('style', 'font-weight: bold;');	
			nextC.innerHTML =" Yesterday ";
			} else if (nextDate == today) {
			nextC.setAttribute('style', 'font-weight: bold;');	
			nextC.innerHTML ="Today";
			} else {
			nextC.innerHTML =forecast.shortday+" "+ withoutZero;
			}
			row.appendChild(nextC);
			weatherTable.appendChild(row);	
			
			
			var skyText = document.createElement("td");
var Wimg = "<img src=http://blob.weather.microsoft.com/static/weather4/en-us/law/"+forecast.skycodeday+".gif width=30px height=30px>";
			skyText.classList.add("xsmall", "bright");
			skyText.innerHTML = Wimg;
			row.appendChild(skyText);
			weatherTable.appendChild(row);
         	
			var nextColumn = document.createElement("td");
			nextColumn.classList.add("xsmall", "bright");
			nextColumn.innerHTML =forecast.high+ "/"+forecast.low;
			row.appendChild(nextColumn);
			weatherTable.appendChild(row);
			
			var fCast = document.createElement("td");
			fCast.classList.add("xsmall", "bright");
			fCast.innerHTML =forecast.skytextday;
			row.appendChild(fCast);
			weatherTable.appendChild(row);
			
			var Pchance = document.createElement("td");
			Pchance.classList.add("xsmall", "bright");
			if (forecast.precip == "" || forecast.precip == 0){
			Pchance.innerHTML ="0%";
			} else {
			Pchance.innerHTML =forecast.precip+"%";	
			}	
			row.appendChild(Pchance);
			weatherTable.appendChild(row);
			}
			
			humordiv.appendChild(weatherTable);
			wrapper.appendChild(humordiv);

			return wrapper;
			},
  
       processWeather: function(data) {
         this.weather = data;
         for (var i = 0; i < this.weather.length; i++) {
         	this.weather = this.weather[i];
			}
console.log(this.weather);
         this.loaded = true;
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
         this.sendSocketNotification('GET_WEATHER');
     },

     socketNotificationReceived: function(notification, payload) {
         if (notification === "WEATHER_RESULT") {
             this.processWeather(payload);
         if (this.rotateInterval == null) {
                this.scheduleCarousel();
            }    
             this.updateDom(this.config.animationSpeed);
         }
     },

 });
