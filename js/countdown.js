
	setInterval(function(){


var date = new Date();
	time = date.getTime();
	
	date2 = new Date(2016,4,14);
	time2 = date2.getTime();
	
	during = (time2-time)/1000;
	
	day = Math.floor(during/(60*60*24));
	t1 = during-day*60*60*24;

	hour = Math.floor(t1/60/60);
	t2 = t1-hour*60*60;

	minute = Math.floor(t2/60);
	seconed = Math.floor(t2-minute*60);

	a = day+'天'+hour+'小时'+minute+'分钟'+seconed+'秒';

	$('.countdown .time').text(a);

	},1000)
	

