//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "28 jan 2023 19:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	