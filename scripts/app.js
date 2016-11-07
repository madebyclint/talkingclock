var Clock = (function() {
    var display = document.getElementById('timedisplay'),
        hourDisplay = document.getElementById('hour'),
        minuteDisplay = document.getElementById('minute'),
        secondDisplay = document.getElementById('second'),
        initTime = new Date(),
        initHour = initTime.getHours(),
        initMinute = initTime.getMinutes();
    var checkMinute = function(min) {
        if (initMinute < min) {
            console.log('hello new minute', min);
            responsiveVoice.speak('The time is now ' + initHour + ':' + min);
            initMinute = min;
        }
    };
    var timer = setInterval(function() {
        var time = new Date(),
            s = time.getSeconds(),
            m = time.getMinutes(),
            h = time.getHours();
        hourDisplay.innerHTML = h;
        minuteDisplay.innerHTML = m;
        secondDisplay.innerHTML = s;
        checkMinute(m);
    }, 500);
})();