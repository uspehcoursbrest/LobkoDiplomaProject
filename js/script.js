window.onload = function() {
    function clock() {
        var date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            second = date.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (second < 10) second = "0" + second;
        document.getElementById("period").innerHTML = hour + ":" + min + ":" + second;
    }
    var timer;
    function  clockStart() {
        timer =setInterval(clock, 60000);
        clock();
    }
    clockStart()
}