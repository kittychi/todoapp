var clock = document.getElementById("countdown-holder"), 
	targetDate = new Date(2015, 4, 1);
	clock.innerHTML = countdown(targetDate, null, countdown.DAYS).toString(); 
	setInterval(function() { 
		clock.innerHTML = countdown(targetDate, null, countdown.DAYS).toString(); 
	}, 1000)