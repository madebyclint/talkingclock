var Clock = (function() {
    var display = document.getElementById('timedisplay'),
        hourdisplay = document.getElementById('hour'),
        minutedisplay = document.getElementById('minute'),
        seconddisplay = document.getElementById('second');
    var timer = setInterval(function() {
        var time = new Date(),
            s = time.getSeconds(),
            m = time.getMinutes(),
            h = time.getHours();
        hourdisplay.innerHTML = h;
        minutedisplay.innerHTML = m;
        seconddisplay.innerHTML = s;
    }, 500);
})();