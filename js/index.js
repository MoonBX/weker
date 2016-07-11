$(function() {
	$('#myCarousel').carousel({
		interval: 2000, //自动轮播
		pause: "hover", //鼠标移入停止轮播
		wrap: true //是否循环
	});

	$('.slideCompile').carousel({
		interval: 2000, //自动轮播
		pause: "false", //鼠标移入停止轮播
		wrap: true //是否循环
	});
	
	$(".section-one .inner").hover(function(){
		$('.slideCompile').carousel("pause");
	},function(){
		$('.slideCompile').carousel("cycle");
	})

});

