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