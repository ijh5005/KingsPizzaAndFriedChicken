"use strict";
var app = angular.module("menuApp", []);

app.controller("menu", function ($scope) {
	$scope.name = "King Pizza & Fried Chicken";
	$scope.mainMenus = [
		{ tag: "delivery", type: "delivery", icon: "carIcon", text: "DELIVERY", nav: "delivery()" },
		{ tag: "pickup", type: "pickup", icon: "pizzaIcon", text: "PICK UP", nav: "pickup()" },
		{ tag: "location", type: "location", icon: "locationIcon", text: "LOCATION", nav: "location()" },
		{ tag: "reviews", type: "reviews", icon: "reviewIcon", text: "REVIEWS", nav: "reviews()" }
	];
});

app.controller("location", function ($scope) {
	$scope.open = [
		{day: "Saturday", time: "10AM to 11PM"},
		{day: "Sunday", time: "10AM to 10PM"},
		{day: "Monday", time: "10AM to 10PM"},
		{day: "(President's Day)", time: "Hours might differ"},
		{day: "Tuesday", time: "10AM to 10PM"},
		{day: "Wednesday", time: "10AM to 10PM"},
		{day: "Thursday", time: "10AM to 10PM"},
		{day: "Friday", time: "10AM to 11PM"},
	];
	$scope.location = "1432 E High St, Pottstown, PA 19464";
	$scope.phone = "(484) 624-4565";
});

app.controller("menuCategory", function ($scope) {

});

app.controller("nav", function ($scope, $compile) {
	$scope.nav = function (prev, next, img) {
		//navigation functionality
		$(prev).animate({
			right: "100vw"
		}, {
			duration: 1000,
			complete: function () {
				//hide current and place it back to orginal position
				$(prev).css("display", "none").css("right", 0);
				//back button fadeIn
				$("#back").fadeIn("slow");
				//fade in appropriate page
				$(next).fadeIn("slow").css("display", "flex")
									  .css("flex-direction", "row")
									  .css("justify-content", "center")
									  .css("flex-wrap", "wrap");
				//change display image
				$(".dish").attr("class", "").addClass(img);
			}
		}); // end: $("#mainMenu").animate
	};

	$scope.order = function () {
		$scope.nav("#mainMenu", "#menuPage", "dish orderImg");
	};

	$scope.location = function () {
		$scope.nav("#mainMenu", "#locationPage", "dish locationImg");
	};

	$scope.reviews = function () {
		$scope.nav("#mainMenu", "#reviewPage", "dish reviewImg");
	};

	$scope.backToMain = function () {
		//fadeout current page
		$("#select").children().fadeOut();
		setTimeout( function () { 
			$("#mainMenu").fadeIn();
			$(".dish").attr("class", "").addClass("dish menuImg");
			//fade out back button
			$("#back").fadeOut();
		}, 1000);
	};

	$scope.backToMenu = function () {
		$("#menuPage").animate({opacity:0}, 1000);
		setTimeout( function () {
			$("#menuPage").animate({opacity:1}, 1000);
		}, 1000);
	};

	$scope.click = function ($event) {
		var target = $event.target.id;

		if( target === "delivery" | target === "pickup" ){
			$scope.order();
			setTimeout( function () {
				var generated = $("#menuPage").html();
			}, 2000);
		} else if( target === "location" ){
			$scope.location();
		} else if( target === "reviews" ){
			$scope.reviews();
		} else if( target === "back" && $("#back").attr("data") === "main"){
			$scope.backToMain();
		} else if( target === "back" && $("#back").attr("data") === "menu"){
			$scope.backToMenu();
		}
	};

});