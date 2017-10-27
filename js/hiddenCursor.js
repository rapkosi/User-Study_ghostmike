$(function () {
    var timer;
    var fadeInBuffer = false;
    $(document).mousemove(function () {
        if (!fadeInBuffer) {
            if (timer) {
                // console.log("clearTimer");
                clearTimeout(timer);
                timer = 0;
            }

            // console.log("fadeIn");
            $('html').css({
                cursor: ''
            });
        } else {
            $('.reveal').css({
                cursor: 'default'
            });
            fadeInBuffer = false;
        }


        timer = setTimeout(function () {
            // console.log("fadeout");
            $('.reveal').css({
                cursor: 'none'
            });

            fadeInBuffer = true;
        }, 2000)
    });
    $('.reveal').css({
        cursor: 'default'
    });
});