$(function(){
	//popup
	$(".popup a").click(function(){
		$(".popup").hide();
	});
	$(".logo").click(function(){
		$(".popup").show();
	});
	
	//img slide
	$('.slide').each(function(index){
		$(this).css({left:index*1200});
	});
	
	setInterval(function(){
		$('.slide').each(function(index){
			var nowLeft=parseInt($(this).css("left"));
			var moveLeft=nowLeft-1200;
			$(this).animate({left:moveLeft},1000,function(){
				if(moveLeft<=-2400){
					$(this).css({left:1200});
				}
			});
		});
	},3000);
	
	//submenu
	$(".sub a").mouseover(function(){
		$(".sub").children("ul").stop().slideDown();
	});
	
	$(".sub a").mouseout(function(){
		$(".sub").children("ul").stop().slideUp(1000);
	});
	
	//room
	$(".room li a").mouseover(function(){
		$(this).parent().siblings().removeClass("on");
		$(this).parent().addClass("on");
	});
	
	$(".room li a").mouseout(function(){
		$(".room li a").parent().siblings().removeClass("on");
	});
	
	//content2
	$(".rightArrow").click(function(){
		$(".place li:first").appendTo(".place");
	});
	
	$(".leftArrow").click(function(){
		$(".place li:last").prependTo(".place");
	});
	
	$(".place").children().removeClass("last");
	$(".place").children().last().addClass("last");
});