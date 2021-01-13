$(function() {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

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

    function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});
$('.button_mini').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
});
$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    });
});
$('.button_submit').on('click', function() {
    $('#consultation, #order').fadeOut();
    $('#thanks').fadeIn('slow');
});

    function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            tel: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name:  {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} cимвола!")
            },
            tel: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        }
    });
}

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

    $('input[name=tel]').mask("+375 (99) 999-99-99");

    $('form').submit(function(e) {
    e.preventDefault(); // Отключаем перезагрузку страницы просле отправки формы - стандартное поведение браузера.
    $.ajax({
        type: "POST", // Отдаем данные
        url: "mailer/smart.php", // куда будет отправляться запрос
        data: $(this).serialize() // Данные, которые отправляются
    }).done(function() {
        $(this).find("input").val(""); // Очищаем инпуты
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset'); // Все формы должны очиститься
    });
    return false;
});

    $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

    $("a[href^='#']").click(function(){
    const href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
    return false;
});

    new WOW().init();
});


