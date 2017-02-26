"use strict";

$(document).ready( function () {
	//var to hold the location of clicked option in the menu array
	var location;

	var menu = [

		{
			item: "pizza",
			id: 1,
			options: [
				{
					id: 0,
					name:"Plain Pizza",
					cost:"$7.99",
					descr:""
				},
				{
					id: 1,
					name:"White Pizza",
					cost:"$7.99",
					descr:""
				},
				{
					id: 2,
					name:"Cheddar Supreme Pizza",
					cost:"$13.99",
					descr:"Cheddar cheese, sauce, ham, bacon, onions, and mozzarella cheese."
				},
				{
					id: 3,
					name:"Hawaiian Pizza",
					cost:"$13.99",
					descr:"Ham and pineapple."
				},
				{
					id: 4,
					name:"Florentina Pizza",
					cost:"$13.99",
					descr:"White pizza topped with spinach, ricotta, and tomatoes."
				},
				{
					id: 5,
					name:"Four Cheese Pizza",
					cost:"$13.99",
					descr:"Provolone, mozzarella, cheddar, and Parmesan."
				},
				{
					id: 6,
					name:"Broccoli Cheddar Pizza",
					cost:"$13.99",
					descr:"Mozzarella, broccoli, and cheddar."
				},
				{
					id: 7,
					name:"King Supreme Pizza",
					cost:"$14.99",
					descr:"Pepperoni, sausage, mushrooms, green peppers, onions, and black olives."
				},
				{
					id: 8,
					name:"Meat Lovers Pizza",
					cost:"$14.99",
					descr:"Pepperoni, bacon, ham, sausage, meatballs, and salami."
				},
				{
					id: 9,
					name:"Vegetable Supreme Pizza",
					cost:"$14.99",
					descr:"Tomatoes, onions, green peppers, black olives, mushrooms, spinach, and broccoli."
				},
				{
					id: 10,
					name:"Buffalo Chicken Pizza",
					cost:"$14.99",
					descr:"Marinated chicken in wing sauce."
				},
				{
					id: 11,
					name:"BBQ Chicken Pizza",
					cost:"$14.99",
					descr:"Marinated chicken in BBQ sauce."
				},
				{
					id: 12,
					name:"Bacon Cheddar Cheeseburger Pizza",
					cost:"$14.99",
					descr:"Bacon, meatball, cheddar, mozzarella cheese, and sauce."
				},
				{
					id: 13,
					name:"Chicken Cordon Bleu Pizza",
					cost:"$14.99",
					descr:"Breaded chicken, ham, mozzarella, cheddar cheese, and sauce."
				},
				{
					id: 14,
					name:"Fajita Pizza",
					cost:"$14.99",
					descr:"Your choice of chicken or steak with green peppers and onions."
				},
				{
					id: 15,
					name:"Cheesesteak Deluxe Pizza",
					cost:"$14.99",
					descr:"Steak, American cheese, fried onions, fried green peppers, sauce, and mozzarella cheese."
				},
				{
					id: 16,
					name:"White Deluxe Pizza",
					cost:"$14.99",
					descr:""
				},
				{
					id: 17,
					name:"Chicken Bacon Ranch",
					cost:"$14.99",
					descr:"Olive oil, garlic, mozzarella cheese, ricotta, tomatoes, spinach, broccoli, and onions."
				},
				{
					id: 18,
					name:"Sicillian Pizza (large only)",
					cost:"$14.99",
					descr:""
				}			
			]
		},
		{
			item: "stromboli",
			id: 2,
			options: [
				{
					id: 0,
					name: "Chicken Cheesesteak Stromboli",
					cost: "$12.99",
					descr: "With American cheese"
				},	
				{
					id: 1,
					name: "Broccoli Cheddar Stromboli",
					cost: "$12.99",
					descr: "Broccoli, cheddar, and mozzarella."
				},	
				{
					id: 2,
					name: "Chicken Cordon Bleu Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 3,
					name: "Florentina Stromboli",
					cost: "$12.99",
					descr: "Spinach, ricotta, tomatoes, and mozzarella."
				},	
				{
					id: 4,
					name: "Cheddar Supreme Stromboli",
					cost: "$12.99",
					descr: "Mozzarella, cheddar, bacon, ham, and onions."
				},	
				{
					id: 5,
					name: "Pepperoni and Mozzarella Cheese Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 6,
					name: "Meatball Sauce and Provolone Cheese Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 7,
					name: "Sausage and Mozzarella Cheese Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 8,
					name: "Ham and Provolone Cheese Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 9,
					name: "Veggie Stromboli",
					cost: "$12.99",
					descr: "Mushrooms, green peppers, onions, tomatoes, broccoli, spinach, and mozzarella."
				},{
					id: 10,
					name: "Italian Stromboli",
					cost: "$12.99",
					descr: "Pepper ham, Genoa salami, capicola, and provolone."
				},	
				{
					id: 11,
					name: "Cheesesteak Stromboli",
					cost: "$12.99",
					descr: "With American cheese."
				},	
				{
					id: 12,
					name: "Buffalo Chicken Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 13,
					name: "Chicken Parmigiana Stromboli",
					cost: "$12.99",
					descr: ""
				},
				{
					id: 14,
					name: "Bacon Cheddar Cheeseburger Stromboli",
					cost: "$12.99",
					descr:""
				},	
				{
					id: 15,
					name: "Meat Lovers Stromboli",
					cost: "$14.99",
					descr:""
				},		
			]
		},
		{
			item: "chicken",
			id: 3,
		},
		{
			item: "burger bin",
			id: 4,
			options: [
				{
					id: 0,
					name: "Hamburger Deluxe",
					cost: "$5.99",
					descr: "8 oz. burger served with lettuce, tomato and onion. Served with french fries and a pickle."
				},
				{
					id: 1,
					name: "Cheeseburger Deluxe",
					cost: "$6.99",
					descr: "8 oz. burger served with lettuce, tomato and onion. Served with french fries and a pickle."
				},
				{
					id: 2,
					name: "Bacon Cheeseburger",
					cost: "$7.99",
					descr: "8 oz. burger served with french fries and a pickle."
				},
				{
					id: 3,
					name: "Mushroom Cheeseburger",
					cost: "$7.99",
					descr: "8 oz. burger served with french fries and a pickle."
				},
				{
					id: 4,
					name: "Buffalo Burger Deluxe",
					cost: "$7.99",
					descr: "8 oz. burger with bleu cheese crumbles, lettuce, tomatoes, onions and hot sauce. Served with french fries and a pickle."
				},
				{
					id: 5,
					name: "Pizza Burger Deluxe",
					cost: "$7.99",
					descr: "8 oz. burger with mozzarella cheese and tomato sauce. Served with french fries and a pickle."
				},
				{
					id: 6,
					name: "Patty Melt",
					cost: "$7.99",
					descr: "8 oz. burger with Swiss and fried onions on rye. Served with french fries and a pickle."
				},
				{
					id: 7,
					name: "Texas Burger",
					cost: "$8.99",
					descr: "8 oz. burger with BBQ sauce and cheddar cheese. Served with french fries and a pickle."
				},
			]
		},
		{
			item: "salad",
			id: 5,
			options: [
				{
					id: 0,
					name: "Tossed Salad",
					cost: "$5.99",
					descr: "Mixed greens, tomatoes, cucumbers, onions, carrots, mozzarella, eggs and croutons."
				},	
				{
					id: 1,
					name: "Chicken Salad",
					cost: "$6.99",
					descr: "Served with sliced tomatoes, hard boiled eggs, green peppers, cucumbers and olives."
				},	
				{
					id: 2,
					name: "Tuna Salad",
					cost: "$7.99",
					descr: "Served with sliced tomato, hard boiled eggs, green peppers, cucumbers and olives."
				},	
				{
					id: 3,
					name: "Chef's Salad",
					cost: "$7.99",
					descr: "Turkey, ham and American cheese over tossed crisp greens with sliced hard-boiled eggs, tomatoes, green peppers and cucumbers."
				},	
				{
					id: 4,
					name: "Grilled Chicken Breast Salad",
					cost: "$7.99",
					descr: "Grilled chicken breast over crisp greens, hard-boiled eggs, tomatoes and vegetable garnish with ranch dressing."
				},	
				{
					id: 5,
					name: "Chicken Finger Salad",
					cost: "$7.99",
					descr: "Chicken fingers over crisp greens, hard-boiled eggs, tomatoes and vegetable garnish with ranch dressing."
				},	
				{
					id: 6,
					name: "Chicken Caesar Salad",
					cost: "$8.99",
					descr: "Grilled chicken over fresh romaine lettuce with croutons and Caesar dressing."
				},	
				{
					id: 7,
					name: "Shrimp Caesar Salad",
					cost: "$9.99",
					descr: "Shrimp over fresh romaine lettuce with croutons and Caesar dressing."
				},	
				{
					id: 8,
					name: "Buffalo Chicken Salad",
					cost: "$8.99",
					descr: "Chicken with hot sauce and bleu cheese crumbles over crisp greens, egg, green peppers and cucumbers."
				},	
				{
					id: 9,
					name: "Taco Salad",
					cost: "$9.99",
					descr: "Ground beef, shredded cheddar, black olives, salsa, sour cream and tortilla chips."
				},	
			]
		},
		{
			item: "club",
			id: 6,
			options: [
				{
					id: 0,
					name: "Turkey Club",
					cost: "$6.99",
					descr: "Served with lettuce, tomato, bacon, mayo, chips and a pickle."
				},	
				{
					id: 1,
					name: "BLT Club",
					cost: "$6.99",
					descr: "Served with lettuce, tomato, bacon, mayo, chips and a pickle."
				},	
				{
					id: 2,
					name: "Ham Club",
					cost: "$6.99",
					descr: "Served with lettuce, tomato, bacon, mayo, chips and a pickle."
				},	
				{
					id: 3,
					name: "Grilled Chicken Club",
					cost: "$6.99",
					descr: "Served with lettuce, tomato, bacon, mayo, chips and a pickle."
				},	
				{
					id: 4,
					name: "Chicken Salad Club",
					cost: "$7.99",
					descr: "Served with lettuce, tomato, bacon, mayo, chips and a pickle."
				},	
				{
					id: 5,
					name: "Tuna Salad Club",
					cost: "$6.99",
					descr: "Served with lettuce, tomato, bacon, mayo, chips and a pickle."
				},	
			]
		},
		{
			item: "wraps",
			id: 7,
			options: [
				{
					id: 0,
					name: "Chicken Caesar Wrap",
					cost: "$7.99",
					descr: "With romaine lettuce, tomatoes and Parmesan cheese. Served with potato chips and pickles."
				},
				{
					id: 1,
					name: "Tuna Salad Wrap",
					cost: "$7.99",
					descr: "With lettuce, tomatoes and American cheese. Served with potato chips and pickles."
				},
				{
					id: 2,
					name: "Chicken Salad Wrap",
					cost: "$7.99",
					descr: "With lettuce, tomatoes and American cheese. Served with potato chips and pickles."
				},
				{
					id: 3,
					name: "Turkey Wrap",
					cost: "$7.99",
					descr: "With lettuce, tomatoes and American cheese. Served with potato chips and pickles."
				},
				{
					id: 4,
					name: "Ham Wrap",
					cost: "$7.99",
					descr: "With lettuce, tomatoes and American cheese. Served with potato chips and pickles."
				},
				{
					id: 5,
					name: "Cheese Steak Wrap",
					cost: "$7.99",
					descr: "With sliced beef, lettuce, tomatoes, onions and American cheese. Served with potato chips and pickles."
				},
				{
					id: 6,
					name: "BBQ Chicken Wrap",
					cost: "$7.99",
					descr: "With BBQ sauce, grilled chicken, American cheese, lettuce and tomatoes. Served with potato chips and pickles."
				},
				{
					id: 7,
					name: "Chicken BLT Wrap",
					cost: "$7.99",
					descr: "With breaded chicken, bacon, lettuce, tomatoes and mayonnaise. Served with potato chips and pickles."
				},
				{
					id: 8,
					name: "Chicken Finger Wrap",
					cost: "$7.99",
					descr: "With lettuce, tomatoes, ranch dressing and American cheese. Served with potato chips and pickles."
				},
				{
					id: 9,
					name: "Buffalo Chicken Wrap",
					cost: "$7.99",
					descr: "With breaded chicken, hot sauce, bleu cheese, lettuce and tomatoes. Served with potato chips and pickles."
				},
				{
					id: 10,
					name: "Chicken Cheesesteak Wrap",
					cost: "$7.99",
					descr: "With grilled chicken, American cheese, lettuce and tomatoes. Served with potato chips and pickles."
				},
				{
					id: 11,
					name: "Chicken Florentine",
					cost: "$8.99",
					descr: "Chicken, spinach, and provolane cheese"
				},
			]
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
		setTimeout( function() { ready() }, 1500);
	});

	var ready = function () {
		$(".menuOption").click( function () {
			info();
			$("#back").attr("data", "menu");
			//fadeIn and fadeOut the menu page for text change
			$("#menuPage").animate({opacity:0}, 1000);
			setTimeout( function () {
				$("#menuPage").animate({opacity:1}, 1000);
				$("#menuPage").html(markup);
			}, 1000);
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
				markup += "<div class='menuOptionList' data="+menu[location].options[i].id+">";
				if( menu[location].options[i].descr != ""){
					markup += "<div id='infoIcon' class='icon iconInfo'></div>";
				}
				markup += "<div class='price'>"+menu[location].options[i].cost+"</div>";
				markup += "<div class=''><span class='itemdescr'>"+menu[location].options[i].name+"</span></div>";
				markup += "</div>";
			}
			markup += "</div>";
		});
	};

	///////////app animations/////////////////////////

	/**********    reiew page    **********/
	$("#reviews").click( function () {
		setTimeout( function () {
			$(".dish").animate({
				height: "20vh"
			}, 100);
		}, 1000);
		$("#reviews").attr("data", "true");
		$(".banner").fadeOut("slow");
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
		$(".banner").fadeIn("slow");
	});

	$("#checkout").click( function () {
		alert("Checkout button in construction...");
	});
	/********** menu page ******************/
	$("#back").click( function () {
		if($("#back").attr("data") === "menu"){
			setTimeout( function () {
				groups();
				ready();
				$("#back").attr("data", "main");
			}, 1000);
		}
	});

	var info = function () {
		setTimeout( function () {
			$(".iconInfo").click( function () {
				//cache this data array location
				var data = $(this).parent().attr("data");
				$("#infoBox").fadeOut("fast");
				setTimeout( function () {
					$("#descrBox").html(menu[location].options[data].descr);
					$("#infoBox").fadeIn("slow");
				}, 500);
			});
			$(".menuOptionList").click( function () {
				//cache this data array location
				var data = $(this).attr("data");
				$("#infoBox").fadeOut("fast");
				setTimeout( function () {
					if($("#descrBox").html(menu[location].options[data].descr) != ""){
						$("#descrBox").html(menu[location].options[data].descr);
					}
					$("#infoBox").fadeIn("slow");
				}, 500);
			});
			$("#xIcon").click( function () {
				$("#infoBox").fadeOut("slow");
			});
		}, 1200);
	};
	
});