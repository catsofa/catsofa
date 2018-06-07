//common js

//highlight
hljs.initHighlightingOnLoad();

$(document).ready(function(){
	
	//menu button
	$('.menu').bind('click',function(){
		if( $(this).hasClass('on') ){
			$(this).removeClass('on');
			$('nav').removeClass('on');
		}else{
			$(this).addClass('on');
			$('nav').addClass('on');
		}
	});


});
$(window).resize(function(){
	
	
});