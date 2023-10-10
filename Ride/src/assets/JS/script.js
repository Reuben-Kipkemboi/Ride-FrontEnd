$(document).ready(function() {
    $(".card").hover(
      function() {
        $(this).find(".part-description, .part-price").fadeIn(200);
      },
      function() {
        $(this).find(".part-description, .part-price").fadeOut(200);
      }
    );
  });