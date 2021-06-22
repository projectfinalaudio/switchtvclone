$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            
            $(this).carousel('next');
        }
        else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev'); 
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});


jQuery(function ($) {
    $('.mobile-categories-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        arrows: true,
        swipeToSlide: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow btn border-0" aria-label="Previous" role="button" style="background-color:transparent; color:#fff"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow btn border-0" aria-label="Previous" role="button" style="background-color:transparent; color:#fff"><i class="fas fa-chevron-right"></i></button>',
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 4 }
            }, {
                breakpoint: 520,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, arrows: false, centerMode: true }
            },
            {
                breakpoint: 360,
                settings: { slidesToShow: 1, arrows: false, centerMode: true }
            }
        ]
    });
});