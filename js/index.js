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

var myApp = angular.module('indexApp', ['ngMaterial',  'angularUtils.directives.dirPagination'])

function listController($scope){
		$scope.capFirstLetters = function capFirstLetters(str){
			// \w matches and word character
			// \S matches any non white-space characters
			// this regex should return a list of each word
			return str.replace(/\w\S*/g, function(txt){
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		};
		
		$scope.MovieInfo = function MovieInfo(rawInfo){
			this.title = $scope.capFirstLetters(rawInfo.title)
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

		$scope.rawData = [ 
    	{
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/115/movie-thumb_1c02f92da5b7c_web.jpg",
    	    "title": "Toy Story",
    	    "slug": "toy-story",
    	    "date": "1995-11-22",
    	    "rating": "g",
    	    "run_time": 4862
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/115/movie-thumb_bf638c79f8318_web.jpg",
    	    "title": "a bug's life",
    	    "slug": "a-bugs-life",
    	    "date": "1998-11-20",
    	    "rating": "G",
    	    "run_time": 5691
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/115/movie-thumb_e01218fb3f3bd_web.jpg",
    	    "title": "Toy Story 2",
    	    "slug": "toy-story-2",
    	    "date": "1999-11-19",
    	    "rating": "G",
    	    "run_time": 5542
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/145/movie-thumb_77bd43c428c40_web.jpg",
    	    "title": "Monsters, Inc.",
    	    "slug": "monsters-inc",
    	    "date": "2001-11-02",
    	    "rating": "g",
    	    "run_time": 5527
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/213/movie-thumb_217853_web.jpg",
    	    "title": "Finding Nemo",
    	    "slug": "finding-nemo",
    	    "date": "2003-05-30",
    	    "rating": "G",
    	    "run_time": 6053
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/143/movie-thumb_146049_web.jpg",
    	    "title": "The Incredibles",
    	    "slug": "incredibles",
    	    "date": "2004-11-05",
    	    "rating": "PG",
    	    "run_time": 6918
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/305/movie-thumb_311969_web.jpg",
    	    "title": "Cars",
    	    "slug": "cars",
    	    "date": "2006-06-09",
    	    "rating": "g",
    	    "run_time": 7001
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/115/movie-thumb_116969_web.jpg",
    	    "title": "Ratatouille",
    	    "slug": "ratatouille",
    	    "date": "2007-06-29",
    	    "rating": "G",
    	    "run_time": 6662
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/115/movie-thumb_16de930a41d84_web.jpg",
    	    "title": "WALL-E",
    	    "slug": "wall-e",
    	    "date": "2008-06-27",
    	    "rating": "G",
    	    "run_time": 5887
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/145/movie-thumb_0bb442332b6a2_web.jpg",
    	    "title": "Up",
    	    "slug": "up",
    	    "date": "2009-05-29",
    	    "rating": "pg",
    	    "run_time": 5764
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/91/movie-thumb_789c03c3930d6_web.jpg",
    	    "title": "Toy Story 3",
    	    "slug": "toy-story-3",
    	    "date": "2010-06-18",
    	    "rating": "G",
    	    "run_time": 6148
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/1/114/movie-thumb_116641_web.jpg",
    	    "title": "Cars 2",
    	    "slug": "cars-2",
    	    "date": "2011-06-24",
    	    "rating": "g",
    	    "run_time": 6373
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/374/887/movie-thumb_56afa2448b906_web.jpg",
    	    "title": "Brave",
    	    "slug": "brave",
    	    "date": "2012-06-22",
    	    "rating": "PG",
    	    "run_time": 5615
    	}, {
    	    "image": "https://cdn-thumbs.disneymoviesanywhere.com/thumbs/539/887/movie-thumb_ad70e2578b2ca_web.jpg",
    	    "title": "Monsters University",
    	    "slug": "monsters-university",
    	    "date": "2013-06-21",
    	    "rating": "G",
    	    "run_time": 6230
    	}
		];
  	
		$scope.movieEntries = [];
		for( var i=0; i < $scope.rawData.length; i++) {
			$scope.movieEntries.push(new $scope.MovieInfo($scope.rawData[i]))
		}

		$scope.currentPage = 1;
		$scope.pageSize = 5;
		
		//console.log($scope.movieEntries[0].date.toDateString())
};

myApp.config(function($mdThemingProvider){
		$mdThemingProvider.theme('docs-dark', 'default')
			.primaryPalette('blue')
			.accentPalette('grey')
			.dark();
	});

function pageNumController($scope){
	$scope.pageChangeHandler = function(num){
		console.log('going to page ' + num);
	};
};

myApp.controller('listController', listController);
myApp.controller('pageNumController', pageNumController);
