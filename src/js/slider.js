$('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrows/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrows/arrow-right.svg"></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                dots: true,
                arrows: false,
            }
        }
    ]
});