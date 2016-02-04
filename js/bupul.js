
var waterfall = {

	colHeight:[],

	init : function($img){
		this.$img = $img;
		this.$main = $('.main');
		this.bind();
		this.array();
		this.gg();
	},

	bind : function(){
		me = this;
		$(window).on('resize',function(){
			me.array();
			me.gg();
		})
	},

	array : function(){
		var imgH = this.$img.outerWidth(true);
			mainH = this.$main.width();
			colmun = Math.floor(mainH/imgH);
		for(i = 0; i<this.$img.length; i++){
			if(i<colmun){
				this.colHeight[i]=this.$img.eq(i).outerHeight(true);
				this.$img.eq(i).css({
					left : i*imgH+"px",
					top : "0px"
				})
			}else{

				var obj = this.setHeight(this.colHeight);
				    idx = obj.idx,
		            min = obj.min;
		        this.$img.eq(i).css({
					left: idx * imgH+"px",
					top: min+"px"
				});
		        this.colHeight[idx] += this.$img.eq(i).outerHeight(true);
		        this.gg();
			}
		}
		
	},

	setHeight : function($arr){
		var arr = $arr,
		 	min = arr[0],
			idx = 0;
		for(var i = 0; i< arr.length; i++){
			if(min > arr[i]){
				min = arr[i];
				idx = i;
			}
				}
				return {min: min, idx: idx};
	},

	gg : function(){
		var mia = this.colHeight;
		console.log(mia);
			best= mia[0];
		for(var i=1; i<mia.length;i++){
			if(mia[i]>best){
				best= mia[i];
			}
		}
		console.log(best);
		$('.main').css("height",best);
	}

} 

waterfall.init($(".main .item"));