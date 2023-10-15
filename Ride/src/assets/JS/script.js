$(document).ready(function () {
    $(".price-card .part-description, .price-card .part-price").hide();

    $(".price-card").mouseover(function () {
        $(this).find('.part-description, .part-price').show();
    });

    $(".price-card").mouseout(function () {
        $(this).find('.part-description, .part-price').hide();
    });
});
