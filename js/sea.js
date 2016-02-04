
var sea = {
	init : function(){
		this.$side = $('.side');
		this.sideTop = this.$side.offset().top;
		this.bind();
	},

	bind : function(){
		var me = this; 
		$(document).on('scroll',function(){
			me.do();
		})
	},

	do : function(){
		var srcollTop = $(document).scrollTop();
			console.log(this.sideTop);
		if(srcollTop > this.sideTop){
			this.on();
			}else{
			this.move();
			}
		},

	on : function(){
		if(this.$side.hasClass('sticked')){
				return;
		}
		this.$side.addClass('sticked');
		this.$
	},

	move : function(){
		if(!this.$side.hasClass('sticked')){
			return;
		}
		this.$side.removeClass('sticked');
	}
}


sea.init();