function Carousel($ct,setSec){
	this.init($ct,setSec);
	this.bind();
	this.autoPlay();
}
Carousel.prototype = {
	init : function($ct,setSec){
		this.$ct = $ct;
		this.second = setSec*1000;
		this.$left = this.$ct.find('.left-btn');
		this.$right = this.$ct.find('.right-btn');
		this.$list = this.$ct.find('.btn-bottom li');
		this.$imgCt = this.$ct.find('.img-ct');
		this.$imgs = this.$ct.find('.img-ct>li');

		this.imgWidth = this.$imgs.width();
		this.imgCount = this.$imgs.length;
		this.index = 0;
		this.isAnimate = false;

		this.$imgCt.prepend(this.$imgs.last().clone());
		this.$imgCt.append(this.$imgs.first().clone());
		this.$imgCt.width(this.imgWidth * (this.imgCount + 2));
		this.$imgCt.css('left', -this.imgWidth);
	},
	bind : function(){
		var _this = this;
		this.$left.on('click',function(){
			_this.leftBtn(1);
		})
		this.$right.on('click',function(){
			_this.rightBtn(1);
		})
		this.$list.on('click',function(){
			console.log($(this).index());
			var index = $(this).index();
			if (_this.index < index) {
				_this.rightBtn(index - _this.index);
			}else {
				_this.leftBtn(_this.index - index);
			}
		})
		this.$ct.on('mouseover',function(){
			clearInterval(_this.clock);
		})
		this.$ct.on('mouseout',function(){
			_this.autoPlay(_this.second);
		})
	},
	leftBtn : function(len) {
		var _this = this;
		if (this.isAnimate) {return}
		this.isAnimate = true;
		this.$imgCt.animate({left : '+=' + this.imgWidth * len}, function(){
			_this.isAnimate = false;
			_this.index -= len;
			if (_this.index < 0 ) {
				_this.$imgCt.css('left', -_this.imgWidth*_this.imgCount);
				_this.index = _this.imgCount-1;
			}
			_this.$list.eq(_this.index).addClass('active').siblings().removeClass('active');
		});
	},
	rightBtn : function(len) {
		var _this = this;
		if (this.isAnimate) {return}
		this.isAnimate = true;
		this.$imgCt.animate({left : '-=' + this.imgWidth * len}, function(){
			_this.isAnimate = false;
			_this.index += len;
			if (_this.index === _this.imgCount ) {
				_this.$imgCt.css('left', -_this.imgWidth);
				_this.index = 0;
			}
			_this.$list.eq(_this.index).addClass('active').siblings().removeClass('active');
		});
	},
	autoPlay : function(){
		var _this = this;
		this.clock = setInterval(function(){
			_this.rightBtn(1);
		},this.second)
	}
}

var a = new Carousel($('.panel').eq(0),2.4);
var b = new Carousel($('.panel').eq(1),3.2);
var b = new Carousel($('.panel').eq(2),4);