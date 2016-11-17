var Clock = (function() {
    var display = document.getElementById('timedisplay'),
        hourDisplay = document.getElementById('hour'),
        minuteDisplay = document.getElementById('minute'),
        secondDisplay = document.getElementById('second'),
        initTime = new Date(),
        initHour = initTime.getHours(),
        initMinute = initTime.getMinutes(),
        alarmTriggered = false,
        i = 0;
    var getParameterByName = function(name, url) {
        if (!url) {
          url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    var alarm = {
            hr: parseInt(getParameterByName('hr')) || 0,
            min: parseInt(getParameterByName('min')) || 0
        };
    var checkMinute = function(min) {
        if (initMinute < min) {
            console.log('hello new minute', min);
            responsiveVoice.speak('The time is now ' + initHour + ':' + min);
            initMinute = min;
        }
    };
    var checkAlarm = function(hr, min) {
        hr = parseInt(hr);
        min = parseInt(min);
        if (alarmTriggered) {
            if (min > alarm.min) {
                checkMinute(min);
            }
            console.log('yep', i++);
        } else {
            // console.log('yep', alarmTriggered);
            // console.log(hr, min);
            if (hr === alarm.hr && min === alarm.min) {
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