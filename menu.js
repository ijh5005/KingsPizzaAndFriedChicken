$(document).ready( function () {

	var Track = function () {};
	var Page = new Track();
	Page.current = "menu";

	Track.prototype.page = "menu"
;
	//slide main menu when option is clicked
	$(".option").click( function () {
		var id = $(this).attr("data");
		var windowWidth = $("body").width();
		$("#mainMenu").animate({
			right: "100vw"
		}, {
			duration: 1000,
			complete: function () {
				//fade out main menu
				$("#mainMenu").css("display", "none");
				//back button fideIn
				//fade in appropriate page
				if ( id === "delivery" ){
					$("#menuPage").addClass("active");
					$("#menuPage, #back").fadeIn();
					$(".dish").removeClass("menuImg").addClass("deliverImg");
					Page.current = "menuPage";
				}
				else if ( id === "pickup" ) {
					$("#menuPage").addClass("active");
					$("#menuPage, #back").fadeIn();
					$(".dish").removeClass("menuImg").addClass("pickupImg");
					Page.current = "menuPage";
				}
				else if ( id === "location" ) {
					$("#locationPage").addClass("active");
					$("#locationPage, #back").fadeIn();
					$(".dish").removeClass("menuImg").addClass("locationImg");
					Page.current = "locationPage";
				}
				else if ( id === "review" ) {
					$("#reviewPage").addClass("active");
					$("#reviewPage, #back").fadeIn();
					$(".dish").removeClass("menuImg").addClass("reviewImg");
					Page.current = "reviewPage";
				}
			}
		});
	});

	//back button functionality
	$("#back").click( function () {
		if (Page.current === "menuPage" | Page.current === "locationPage" | Page.current === "reviewPage") {
			$(".active").css("display", "none");
			$("#mainMenu").css("right", 0).fadeIn("slow");
			$(".dish").attr("class", "").addClass("dish").addClass("menuImg");
			$("#back").fadeOut();
		}
	});

});