$(document).ready(function () {
  'use strict';

  var swiper = new Swiper('.main-slider', {
    loop: true,
    spaceBetween: 20,
    speed: 2000,
    navigation: {
      nextEl: '.s-next',
      prevEl: '.s-prev',
    }
  });

  $("#back-top").click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  var headr = $("#mainNav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headr.addClass('scrolled');
  } else {
    headr.removeClass('scrolled');
  };

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    $('#back-top').fadeIn();
  } else {
    $('#back-top').fadeOut();
  };
  $(document).on('load scroll', function (e) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headr.addClass('scrolled');
    } else {
      headr.removeClass('scrolled');
    };

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    };
  });

  if ($('.preloader').length) {
    $(window).on('load', function () {
      $('.preloader').delay(1000).fadeOut(500);
    });
  }

});