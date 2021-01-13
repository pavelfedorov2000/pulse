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