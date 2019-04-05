$(document).ready(function () {
    window.onload = function () {
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

        function clockStart() {
            timer = setInterval(clock, 1000);
            clock();
        }

        clockStart()
    }

    var banner = $(".ban");
    banner.owlCarousel({
        items: 1,
        dotsContainer: ".dots",
        loop: true,
        autoplay: true,
        autoplayHoverPause: true
    })

    $("select").selectric();

    $('.newsSlider .slider').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        margin: 40,
        navText: ['<span class="icon-left"></span>', '<span class="icon-right"></span>'],
        loop: true,
    })

})