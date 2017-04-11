$(function() {
	$('#myCarousel').carousel({
		interval: 6000, //自动轮播
		pause: "hover", //鼠标移入停止轮播
		wrap: true //是否循环
	});

	$('.slideCompile').carousel({
		interval: 2000, //自动轮播
		pause: "false", //鼠标移入停止轮播
		wrap: true //是否循环
	});
	
	$(".section-one .inner").on("mouseover",function(){
		$('.slideCompile').carousel("pause");
	});
	$(".section-one .inner").on("mouseout",function(){
		$('.slideCompile').carousel("cycle");
	});
	

});

