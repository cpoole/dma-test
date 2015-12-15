Number.prototype.secondsToHHMMSS = function () {
	var sec_num = parseInt(this, 10); // don't forget the second param
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);
	
	if (hours   < 10) {hours   = "0"+hours;}
	if (minutes < 10) {minutes = "0"+minutes;}
	if (seconds < 10) {seconds = "0"+seconds;}
	var time    = hours+':'+minutes+':'+seconds;
	return time;
}

function capFirstLetters(str){
	// \w matches and word character
	// \S matches any non white-space characters
	// this regex should return a list of each word
	return str.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};


function MovieInfo(rawInfo){
	this.title = capFirstLetters(rawInfo.title)
	this.image = rawInfo.image
	this.slug = rawInfo.slug
	this.rating = rawInfo.rating.toUpperCase()
	this.run_time = rawInfo.run_time
	Object.defineProperty(this, "formattedRuntime",{
		get: function(){
			runStringArray = rawInfo.run_time.secondsToHHMMSS().split(":");
			if(runStringArray[0].charAt(0) == "0"){
				runStringArray[0] = runStringArray[0].charAt(1);
			}
			runString= runStringArray[0] + "hr " + runStringArray[1] + " mins"; 
			return runString;
		}
	});
	Object.defineProperty(this, "date",{
		get : function(){
			rawArray = rawInfo.date.split("-");
			console.log(rawArray)
			var formattedDate = new Date();
			formattedDate.setYear(rawArray[0])
			formattedDate.setMonth(rawArray[1]);
			formattedDate.setDate(rawArray[2]);
			return formattedDate;
		}
	});

};

