$(document).ready( function () {

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
					$("#menuPage, #back").fadeIn();
				}
				else if ( id === "pickup" ) {
					$("#menuPage, #back").fadeIn();
				}
				else if ( id === "location" ) {
					$("#locationPage, #back").fadeIn();
				}
				else if ( id === "review" ) {
					$("#reviewPage, #back").fadeIn();
				}
			}
		});
	});

});