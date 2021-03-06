$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".overlay-box").fadeIn(300);
      $(".navgition").addClass("reset-left");
      $("body").addClass("overflow");
    });
    $(".nav-head .close-btn, .overlay-box").click(function () {
      $(".overlay-box").fadeOut(300);
      $(".navgition").removeClass("reset-left");
      $("body").removeClass("overflow");
    });
    //dropdown inside menu
    $(".lang-word, .chevron-down").click(function (e) {
      e.preventDefault();
      var item = $(this).siblings(".dropdown-content");
      item.slideToggle(400);
    });
    //This is to Open Search Box
    $(".header-icons .search").click(function () {
      $("body").toggleClass("overflow");
      $(".search .search-icon").toggleClass("open-search");
      $(".search .search-icon").toggleClass("close-search");
      $(".search-section").toggleClass("search-open");
      $(".overlay-box2").fadeToggle(500);
    });
    // $(".overlay-box2").click(function () {
    //   $("body").removeClass("overflow");
    //   $(".search .search-icon").addClass("open-search");
    //   $(".search .search-icon").removeClass("close-search");
    //   $(".search-section").removeClass("search-open");
    //   $(".overlay-box2").fadeOut(500);
    // });
  }
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  ///////// ** product slider** /////////
  var specialsO = new Swiper(".product-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".product-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-slider .swiper-btn-next",
      prevEl: ".product-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  ////////////////add swiper carsoul to class feature////////////////////////////////

  if ($(window).width() < 1199) {
    $(".features .col-md-3.col-xs-12").contents().unwrap();
    $(".features .row").contents().unwrap();
    $(".feature-section .features").addClass("swiper-container");
    $(".feature-section .features-div").addClass("swiper-wrapper");
    $(".feature-section .features-box").addClass("swiper-slide");
    var feature = new Swiper(".feature-section .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".feature-section .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
});
