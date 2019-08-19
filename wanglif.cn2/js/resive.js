//resive-size
$(function() {
	//定义类
	var Size = ['header','footer'];
	// 判断是否是火狐
	function getOs() {
		if(isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
			return "Firefox";
		} else {
			return false;
		}
	}
	var firefox = getOs();
	//循环赋值
	for(var i = 0; i < Size.length; i++) {
		$(Size[i]).width(1920);
	}
	function SizeFn(firefox) {
		var sen = $(window).width();
		for(var i = 0; i < Size.length; i++) {
			if(firefox) {
				$(Size[i]).css({
					'-moz-transform': 'scale(' + sen / 1920 + ')',
					'-moz-transform-origin': 'top left'
				});
			} else {
				$(Size[i]).css({
					'zoom': sen / 1920
				});
			}
		}
	}
	SizeFn(firefox);
	$(window).resize(function() {
		SizeFn(firefox);
	});
});















