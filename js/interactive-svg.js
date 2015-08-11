$(function(){

	$("#stage").load('interactive.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('<img src="interactive-mobile.svg">').css({"width": "25%", "min-width": "250px"});
		}

	});
});