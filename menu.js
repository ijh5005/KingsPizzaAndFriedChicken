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
				next: {}
			},
		},
		pickup: {
			current: "pickup",
			previous: "mainMenu",
			next: {
				displayImgClass: "orderImg",
				current: "menuPage",
				previous: "mainMenu",
				next: {}
			},
		},
		location: {
			current: "location",
			previous: "mainMenu",
			next: {
				displayImgClass: "locationImg",
				current: "locationPage",
				previous: "mainMenu",
				next: {}
			},
		},
		reviews: {
			current: "reviews",
			previous: "mainMenu",
			next: {
				displayImgClass: "reviewImg",
				current: "reviewPage",
				previous: "mainMenu",
				next: {}
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
		//cache curent page
		//var current = $(this).attr("id");
		//cache previuos age
		//var previuos = $(this).
			// $(".active").css("display", "none");
			// $("#mainMenu").css("right", 0).fadeIn("slow");
			// $(".dish").attr("class", "").addClass("dish").addClass("menuImg");
			// $("#back").fadeOut();
	});

});