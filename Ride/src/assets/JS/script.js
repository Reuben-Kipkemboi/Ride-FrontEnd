$(document).ready(function() {
    $("#price-card1").mouseover(function () {
        $(this).find('.part-description, .part-price').show();
    });

    $("#price-card1").mouseout(function () {
        $(this).find('.part-description, .part-price').hide();
    });
});

