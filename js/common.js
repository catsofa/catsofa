//common js
$(document).ready(function(){

	//menu button
	$('.menu').bind('click',function(){
		if( $(this).hasClass('on') ){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
		}
	});


});
$(window).resize(function(){
	
	
});