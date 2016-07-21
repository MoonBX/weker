 // 定义

Vue.component('my-info', {
  // 声明 props
  props: ['msg'],
  // prop 可以用在模板内
  // 可以用 `this.msg` 设置
  template: '<div class="footer-bottom">Copyright® 2014-2015 维氪智能 京ICP备14039007号-1</div>'
});

//定义头部
Vue.component('my-nav', {
  // 声明 props
  props: ['nav'],
  // prop 可以用在模板内
  // 可以用 `this.msg` 设置
  template:  '<div class="nav-com">\
			<div class="nav-inner">\
				<img src="http://weker.img-cn-shanghai.aliyuncs.com/images/logo.png" class="logo" />\
				<ul class="nav">\
					<li  :class="{curNav:nav==1}"><a href="index.html">产品展示</a></li>\
					<li  :class="{curNav:nav==2}"><a href="deal.html">解决方案</a></li>\
				</ul>\
				<span class="phone">\
				<div class="down-box"><i></i><img src="http://weker.img-cn-shanghai.aliyuncs.com/images/download.jpg" alt="下载二维码"/></div>\
				</span>\
				<span :class="{curNav:nav==3}" class="about"><a href="about.html">关于我们</a></span>\
			</div>\
		</div>'
		,
		 methods: {
	   		dd:function(){
	   			
   			}
  		 }
});

//定义尾部
Vue.component('my-footer', {
	props: ['footer'],
	template:'<div class="footer-top">\
	<div class="col col-sm-9 top-left">\
		<dl>\
			<dt><img src="http://weker.img-cn-shanghai.aliyuncs.com/images/logo.png"/></dt>\
			<dd>\
				<p>延续家的温度，缩小家的距离</p>\
				<p>feel the temperature of the house</p>\
			</dd>\
		</dl>\
		<div class="link-box">\
			<ul>\
				<h3>关于我们</h3>\
				<li v-if="footer == 1"><a href="#contact">联系我们</a></li>\
				<li v-else><a href="about.html#contact">联系我们</a></li>\
				<li v-if="footer == 1"><a href="#join">加入团队</a></li>\
				<li v-else><a href="about.html#join">加入团队</a></li>\
			</ul>\
			<ul>\
				<h3>更多服务</h3>\
				<li><a href="question.html">常见问题</a></li>\
			</ul>\
			<ul>\
				<h3>友情链接</h3>\
				<li><a href="http://www.mc-www.com/">众核万维</a></li>\
				<li><a href="http://www.uzuer.com/">U租</a></li>\
				<li><a href="http://www.ix-work.cn/">IX-work</a></li>\
				<li><a href="http://www.chedaoshanqian.com/">车到山前</a></li>\
			</ul>\
		</div>\
	</div>\
	<div class="col col-sm-3 top-right">\
		<p class="phone">客服电话：400-150-5088</p>\
		<ul class="share-box">\
			<li>\
				<a href="http://weibo.com/p/1006065943459622/home?from=page_100606&mod=TAB#place"><div class="icon weibo"></div></a>\
			</li>\
			<li class="code-box">\
				<div class="icon weixin">\
				<div class="code">\
				<img src="http://weker.img-cn-shanghai.aliyuncs.com/images/code.png"/>\
				<i></i>\
							</div>\
				</div>\
			</li>\
		</ul>\
	</div>\
</div>',
	
	 methods: {
	   		dd:function(){
	   			
   			}
  		}
	
});



// 创建根实例
new Vue({
  el: 'body',
  
})

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?ef5e954a0dc570ae9f3a3d74d9425cb4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

	
	

