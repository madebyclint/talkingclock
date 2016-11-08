var Clock = (function() {
    var display = document.getElementById('timedisplay'),
        hourDisplay = document.getElementById('hour'),
        minuteDisplay = document.getElementById('minute'),
        secondDisplay = document.getElementById('second'),
        initTime = new Date(),
        initHour = initTime.getHours(),
        initMinute = initTime.getMinutes(),
        alarmTriggered = false;
    var checkMinute = function(min) {
        if (initMinute < min) {
            console.log('hello new minute', min);
            responsiveVoice.speak('The time is now ' + initHour + ':' + min);
            initMinute = min;
        }
    };
    var checkAlarm = function(hr, min) {
        if (alarmTriggered) {
            if (min > 51) {
                checkMinute(min);
            }
            console.log('nope', alarmTriggered);
            console.log(hr, min);
        } else {
            console.log('yep', alarmTriggered);
            console.log(hr, min);
            if (hr === 21 && min === 51) {
                alarmTriggered = true;
                responsiveVoice.speak('Good morning. Time to wake up. The time is now ' + initHour + ':' + min);
                console.log('Good morning');
            }
        }
    };
    var padTime = function(n) {
        return n < 10 ? '0' + n : n;
    };
    var timer = setInterval(function() {
        var time = new Date(),
            s = padTime(time.getSeconds()),
            m = padTime(time.getMinutes()),
            h = time.getHours();
        hourDisplay.innerHTML = h;
        minuteDisplay.innerHTML = m;
        secondDisplay.innerHTML = s;
        checkAlarm(h, m);
    }, 500);
})();