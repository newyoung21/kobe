

var prelude = {
	init : function(){
		this.$zi = $('.zi');
		this.bind();
		this.bb();
		this.cc();
		this.setHeight();
	},

	bb : function(){
		setTimeout(function(){
			 $('#prelude').css({
    		height : '0px'
    });},7000);

	},

	bind : function(){

		for(i = 0 ;i < this.$zi.length; i++){
			this.coo(i);
			
		}
	},

	coo : function(i){
		console.log(i);
		setTimeout(function(){
			$('.zi').eq(i).css('display','block');
		},i*1000);
	},

	cc : function(){
		setTimeout(function(){
			$('.zi').css('display','none');
		},7000);
	},
	setHeight : function(){
		var Height ="700px";
		Height=$(window).height();
		$('#prelude').css('height',Height);
	}
}

prelude.init();