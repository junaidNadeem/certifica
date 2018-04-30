$(document).ready(function() {
	$('.main-content').fadeIn("slow");
	$('.laptop-container').animate({"top": '0px'}, 900);
	$('#sign-in').click(function(){
		$('.sign-up-main-content').fadeOut("fast");
		$('.sign-in-main-content').fadeIn("slow");
	});
	$('#sign-up').click(function(){
		$('.sign-in-main-content').fadeOut("fast");
		$('.sign-up-main-content').fadeIn("slow");
	});
});