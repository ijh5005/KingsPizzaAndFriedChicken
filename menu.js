"use strict";

$(document).ready( function () {
	//navigation tree -> used to have navigation pages ready
	var Track = {
		delivery: {
			current: "delivery",
			previous: "mainMenu",
			next: {
				displayImgClass: "orderImg",
				current: "menuPage",
				previous: "mainMenu",
			},
		},
		pickup: {
			current: "pickup",
			previous: "mainMenu",
			next: {
				displayImgClass: "orderImg",
				current: "menuPage",
				previous: "mainMenu",
			},
		},
		location: {
			current: "location",
			previous: "mainMenu",
			next: {
				displayImgClass: "locationImg",
				current: "locationPage",
				previous: "mainMenu",
			},
		},
		reviews: {
			current: "reviews",
			previous: "mainMenu",
			next: {
				displayImgClass: "reviewImg",
				current: "reviewPage",
				previous: "mainMenu",
			},
		}
	};
	//store current page info
	var Branches = function(path) {
		this.path = path;
	};
	var branch = new Branches("");
	//navigation functionality
	$(".option").click( function () {
		//cache current
		var currentPage =  $(this).attr("id");
		$("#"+Track[branch.path + currentPage].previous+"").animate({
			right: "100vw"
		}, {
			duration: 1000,
			complete: function () {
				//hide current and place it back to orginal position
				$("#"+Track[branch.path + currentPage].previous+"").css("display", "none").css("right", 0);
				//back button fadeIn
				$("#back").fadeIn("slow");
				//fade in appropriate page
				$("#"+Track[branch.path + currentPage].next.current+"").fadeIn("slow");
				//change display image
				$(".dish").attr("class", "").addClass("dish "+Track[currentPage].next.displayImgClass);
				setTimeout( function () {
					//update branch.path
					branch.path += currentPage + ".next.";
				}, 1500);
			}
		}); // end: $("#"+Track[currentPage]).animate
	});  // end: $(".option").click

	//back button functionality
	$("#back").click( function () {
		//fadeout #select children
		$("#select").children().fadeOut();
		setTimeout( function () { 
			//get previous page reference
			//remove the ".next." from branch.path
			var stripNext = branch.path.split(".");
			//remove the last two array elements: "." and ""
			stripNext.pop();
			stripNext.pop();
			//convert stripNext to a string
			var string = stripNext.join("");
			//set branch path and dishImg
			branch.path = string;
			console.log();
			$("#"+branch.path+"").parent().fadeIn();
			if ( $("#"+branch.path+"").parent().attr("id") === "mainMenu" ){
				$("#mainMenu").attr("data", "true");
				console.log("true");
			}
			if ( $("#mainMenu").attr("data") === "true" ){
				branch.path = "";
				$(".dish").attr("class", "").addClass("dish menuImg");
				//fade out back button
				$("#back").fadeOut();

			}
		}, 1000);
	});

	var menu = [

		{
			item: "pizza",
			id: 1,
		},
		{
			item: "stromboli",
			id: 2,
		},
		{
			item: "chicken",
			id: 3,
		},
		{
			item: "burger bin",
			id: 4,
		},
		{
			item: "salad",
			id: 5,
		},
		{
			item: "club",
			id: 6,
		},
		{
			item: "wraps",
			id: 7,
		},
		{
			item: "hoagies",
			id: 8,
		},
		{
			item: "platters",
			id: 9,
		},
		{
			item: "sandwiches",
			id: 10,
		},
		{
			item: "seafood",
			id: 11,
		},
		{
			item: "sides",
			id: 12,
		},
		{
			item: "desserts",
			id: 13,
		},
		{
			item: "appetizers",
			id: 14,
		},
		{
			item: "soup",
			id: 15,
		},
		{
			item: "extras",
			id: 16,
		},
		{
			item: "kids menu",
			id: 17,
		},
	]; // end: var menu = {}

	//populate page with group list
	var groups = function () {
		//markup var
		var markup  = "";
		//cache menu length
		var l = Object.keys(menu).length;
		//loop throught object to populate
		for( var i = 0; i < l; i++){
			markup += "<div class='menuOption'><span>" + menu[i].item + "</span></div>";
		}
		$("#menuPage").html(markup);
	}

	$("#delivery, #pickup").click( function () {
		groups();
	});
});