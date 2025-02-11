/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  'use strict';

  var swiper = new Swiper('.main-slider', {
    loop: true,
    spaceBetween: 20,
    speed: 2000,
    // autoplay: {
    //   delay: 7000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.s-next',
      prevEl: '.s-prev',
    }
  });

  var swiper1 = new Swiper('.slider1', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.s-next1',
      prevEl: '.s-prev1',
    }
  });

  var swiper2 = new Swiper('.slider2', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 5,
    navigation: {
      nextEl: '.s-next2',
      prevEl: '.s-prev2',
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    },
  });


  var swiper3 = new Swiper('.slider3', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.s-next3',
      prevEl: '.s-prev3',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
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