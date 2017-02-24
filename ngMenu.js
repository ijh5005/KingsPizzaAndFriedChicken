"use strict";
var app = angular.module("menuApp", []);

app.controller("menuCtrl", function ($scope) {
	$scope.name = "King Pizza & Fried Chicken";
	$scope.mainMenus = [
		{ tag: "delivery", type: "delivery", icon: "carIcon", text: "DELIVERY" },
		{ tag: "pickup", type: "pickup", icon: "pizzaIcon", text: "PICK UP" },
		{ tag: "location", type: "location", icon: "locationIcon", text: "LOCATION" },
		{ tag: "reviews", type: "reviews", icon: "reviewIcon", text: "REVIEWS" }
	];
});

app.controller("nav", function ($scope) {

});