//$(document).ready(function() {
//	/* Pick a random number and apply it to the first slide in the slideshow item */
//	$('.carousel-item').eq(Math.floor((Math.random() * $('.carousel-item').length))).addClass("active");
//});
//$(document).ready(
//    function () {
//       // $('.slickscroll').hide();

//        //show the div after 2 seconds
//        $('.slickscroll').delay(2000).fadeIn(100);
//    });
jQuery(function($){
	$('.show-promos-slider').slick({
		slidesToShow  : 4,
		slidesToScroll: 1,
		autoplay      : false,
		autoplaySpeed : 3500,
		arrows        : true,
		swipeToSlide  : true,
		prevArrow     : '<button type="button" data-role="none" class="slick-prev slick-arrow btn border-0" aria-label="Previous" role="button" style="background-color:transparent; color:#fff"><i class="fas fa-chevron-left"></i></button>',
		nextArrow     : '<button type="button" data-role="none" class="slick-next slick-arrow btn border-0" aria-label="Previous" role="button" style="background-color:transparent; color:#fff"><i class="fas fa-chevron-right"></i></button>',
		dots          : false,
		pauseOnHover  : false,
		responsive    : [
			{
				breakpoint: 768,
				settings: { slidesToShow: 4 }
			}, {
				breakpoint: 520,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 480,
				settings: { slidesToShow:1, arrows:false,centerMode:true }
			},
			{
				breakpoint: 360,
				settings: { slidesToShow:1,arrows:false,centerMode:true }
			}
		]
	});
});
jQuery(function ($) {

    //var initslide = document.getElementById('ctl00_ContentPlaceHolder1_ltinitialSlide').value;
    var initslide = document.getElementById('sliderinitValue').value;
    console.log(initslide);

    $('.slickscroll').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        initialSlide: parseInt(initslide)-5,
        autoplaySpeed: 3500,
        arrows: true,
        swipeToSlide: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow btn border-0" aria-label="Previous" role="button" style="background-color:transparent; color:#fff;left:10px;"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow btn border-0" aria-label="Previous" role="button" style="background-color:transparent; color:#fff;right:10px;"><i class="fas fa-chevron-right"></i></button>',
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

