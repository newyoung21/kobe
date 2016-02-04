		
var colck = { 

		init : function(){
			this.$sec = $('.second');
			this.$min = $('.minute');
			this.$hour = $('.hour');
			this.bb();
			this.settime();
			this.tra = "-ms-transform"+
							 "-webkit-transform"+
							 "-moz-transform"+
							 "-o-transform: xx";

		},

		bb : function(){
			var date = new Date();

	 	        second = date.getSeconds();
	            secondDeg = second*6+"deg";
	            this.secondrotate = "rotate("+secondDeg+")";  
		        
        
		        min = date.getMinutes(); 
		        minDeg = (min*60+second)/10+"deg";
		        this.minrotate = "rotate("+minDeg+")";
        
		        hour = date.getHours();
		        if(hour>12){
		        	hour=hour-12;
		        };
		        hourDeg = (hour*60+min)/2+"deg";
		        this.hourrotate = "rotate("+hourDeg+")";

		        this.band();
		},

		band : function(){
			this.$sec.css({
				"-ms-transform": this.secondrotate,
				"-webkit-transform": this.secondrotate,
				"-moz-transform": this.secondrotate,
				"-o-transform": this.secondrotate
			});
			this.$min.css({
				"-ms-transform":this.minrotate,
				"-webkit-transform":this.minrotate,
				"-moz-transform":this.minrotate,
				"-o-transform":this.minrotate
			});
			this.$hour.css({
				"-ms-transform":this.hourrotate,
				"-webkit-transform":this.hourrotate,
				"-moz-transform":this.hourrotate,
				"-o-transform":this.hourrotate
			});

		},

		settime : function(){
			var me = this;
			setInterval(function(){
				
				me.bb();
	        },1000);
	        	}

}
colck.init();