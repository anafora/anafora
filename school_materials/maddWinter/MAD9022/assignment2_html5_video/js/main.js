/**
 * Created by Min on 2016-01-15.
 */
$(function(){
    $(".slides").slidesjs({
        width: 600,
        height: 400,
        play: {
            active: false,
            effect: "slide",
            interval: 1000,
            auto: true,
            swap: true,
            pauseOnHover: false,
            restartDelay: 2500
        }
    });
});