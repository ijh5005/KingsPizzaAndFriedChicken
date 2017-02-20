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
					ready();
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
			options: [
				{
					name:"Plain Pizza",
					cost:"$7.99",
					descr:""
				},
				{
					name:"White Pizza",
					cost:"$7.99",
					descr:""
				},
				{
					name:"Cheddar Supreme Pizza",
					cost:"$13.99",
					descr:"Cheddar cheese, sauce, ham, bacon, onions, and mozzarella cheese."
				},
				{
					name:"Hawaiian Pizza",
					cost:"$13.99",
					descr:"Ham and pineapple."
				},
				{
					name:"Florentina Pizza",
					cost:"$13.99",
					descr:"White pizza topped with spinach, ricotta, and tomatoes."
				},
				{
					name:"Four Cheese Pizza",
					cost:"$13.99",
					descr:"Provolone, mozzarella, cheddar, and Parmesan."
				},
				{
					name:"Broccoli Cheddar Pizza",
					cost:"$13.99",
					descr:"Mozzarella, broccoli, and cheddar."
				},
				{
					name:"King Supreme Pizza",
					cost:"$14.99",
					descr:"Pepperoni, sausage, mushrooms, green peppers, onions, and black olives."
				},
				{
					name:"Meat Lovers Pizza",
					cost:"$14.99",
					descr:"Pepperoni, bacon, ham, sausage, meatballs, and salami."
				},
				{
					name:"Vegetable Supreme Pizza",
					cost:"$14.99",
					descr:"Tomatoes, onions, green peppers, black olives, mushrooms, spinach, and broccoli."
				},
				{
					name:"Buffalo Chicken Pizza",
					cost:"$14.99",
					descr:"Marinated chicken in wing sauce."
				},
				{
					name:"BBQ Chicken Pizza",
					cost:"$14.99",
					descr:"Marinated chicken in BBQ sauce."
				},
				{
					name:"Bacon Cheddar Cheeseburger Pizza",
					cost:"$14.99",
					descr:"Bacon, meatball, cheddar, mozzarella cheese, and sauce."
				},
				{
					name:"Chicken Cordon Bleu Pizza",
					cost:"$14.99",
					descr:"Breaded chicken, ham, mozzarella, cheddar cheese, and sauce."
				},
				{
					name:"Fajita Pizza",
					cost:"$14.99",
					descr:"Your choice of chicken or steak with green peppers and onions."
				},
				{
					name:"Cheesesteak Deluxe Pizza",
					cost:"$14.99",
					descr:"Steak, American cheese, fried onions, fried green peppers, sauce, and mozzarella cheese."
				},
				{
					name:"White Deluxe Pizza",
					cost:"$14.99",
					descr:""
				},
				{
					name:"Chicken Bacon Ranch",
					cost:"$14.99",
					descr:"Olive oil, garlic, mozzarella cheese, ricotta, tomatoes, spinach, broccoli, and onions."
				},
				{
					name:"Sicillian Pizza (large only)",
					cost:"$14.99",
					descr:""
				}			
			]
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
		var l = menu.length;
		//loop throught object to populate
		for( var i = 0; i < l; i++){
			markup += "<div class='menuOption'><span>" + menu[i].item + "</span></div>";
		}
		$("#menuPage").html(markup);
	}

	$("#delivery, #pickup").click( function () {
		groups();
	});

	var ready = function () {
		$(".menuOption").click( function () {
			//fadeeIn and fadeOu the menu page for text change
			$("#menuPage").fadeOut();
			setTimeout( function () {
				$("#menuPage").fadeIn();
				$("#menuPage").html(markup);
			}, 1000);
			//var to hold the location of clicked option in the meun array
			var location;
			//get the selected option markup by searching the menu array
			var match = $(this).children().html();
			var l = menu.length;
			for( var i = 0; i < l; i++){
				if( menu[i].item === match ){
					location = i;
				}
			}

			var len = menu[location].options.length;
			//init markup
			var markup = "<div class='menuOptionListPosition'>";
			for( var i = 0; i < len; i++){
				markup += "<div class='menuOptionList'>";
				markup += "<div class='price'>"+menu[location].options[i].cost+"</div>";
				markup += "<div class=''><span class='itemdescr'>"+menu[location].options[i].name+"</span></div>";
				//markup += "<div class=''>"+menu[location].options[i].descr+"</div>";
				markup += "</div>";
			}
			markup += "</div>";
		});
	};














	///////////app animations/////////////////////////
	$("#reviews").click( function () {
		setTimeout( function () {
			$(".dish").animate({
				height: "20vh"
			}, 100);
		}, 1000);
		$("#reviews").attr("data", "true");
	});

	$("#back").click( function () {
		if($("#reviews").attr("data") === "true"){
			setTimeout( function () {
				$(".dish").animate({
					height: "35vh"
				}, 100);
			}, 600);
		}
		$("#reviews").attr("data", "false");
	})
	
});