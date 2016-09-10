$(function(){
	$(".main_menu").on("click","li",function(){
		if(!$(this).hasClass("current")){
			$(this).addClass("current").siblings().removeClass("current");
			var index = +$(this).attr("val");
			$(".inner").eq(index).addClass("current").siblings().removeClass("current");
		}							 
	});
});