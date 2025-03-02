
(function ($) {
  "use strict";

  /*----------------------------- Site Loader & Popup --------------------*/
  $(window).on("load", function () {
    $("#ms-overlay").fadeOut("slow");
  });

  /*--------------------- Mobile menu sidebar JS -------------------------------- */
  $('.ms-site-menu-icon').on("click", function () {
    $('.ms-mobile-menu-overlay').fadeIn();
    $('.ms-mobile-menu').addClass("ms-menu-open");
  });

  $('.ms-mobile-menu-overlay, .ms-close-menu').on("click", function () {
    $('.ms-mobile-menu-overlay').fadeOut();
    $('.ms-mobile-menu').removeClass("ms-menu-open");
  });

  function ResponsiveMobilemsMenu() {
    var $msNav = $(".ms-menu-content, .overlay-menu"),
      $msNavSubMenu = $msNav.find(".sub-menu");
    $msNavSubMenu.parent().prepend('<span class="menu-toggle"></span>');

    $msNav.on("click", "li a, .menu-toggle", function (e) {
      var $this = $(this);
      if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  ResponsiveMobilemsMenu();

  /*--------------------- Replace all SVG images with inline SVG -------------------------------- */
  $(document).ready(function () {
    $('img.svg_img[src$=".svg"]').each(function () {
      var $img = $(this);
      var imgURL = $img.attr('src');
      var attributes = $img.prop("attributes");

      $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');

        $svg = $svg.removeAttr('xmlns:a');

        $.each(attributes, function () {
          $svg.attr(this.name, this.value);
        });

        $img.replaceWith($svg);
      }, 'xml');
    });
  });

  /*----------------------------- Category Sidebar js | Toggle Icon OnClick Open sidebar  -----------------------------------*/
  $(".ms-category-toggle").on("click", function () {
    $(".ms-side-cat-overlay").fadeIn();
    $(".ms-category-sidebar").addClass("ms-open-cat");
  });

  $(".ms-close").on("click", function () {
    $(".ms-category-sidebar").removeClass("ms-open-cat");
    $(".ms-side-cat-overlay").fadeOut();
  });

  $(".ms-side-cat-overlay").on("click", function () {
    $(".ms-category-sidebar").removeClass("ms-open-cat");
    $(".ms-side-cat-overlay").fadeOut();
  });

  /*--------------------- Category Sidebar Dropdowns js ---------------------- */
  $(document).ready(function () {
    $(".ms-sidebar-block .ms-sb-block-content ul li ul").addClass("ms-cat-sub-dropdown");

    $(".ms-sidebar-block .ms-sidebar-block-item").on("click", function () {
      var $this = $(this).closest('.ms-sb-block-content').find('.ms-cat-sub-dropdown');
      $this.slideToggle('slow');
      $('.ms-cat-sub-dropdown').not($this).slideUp('slow');
    });
  });

  /*--------------------- Cart sidebar JS -------------------------------- */
  $('.ms-cart-toggle').on("click", function (e) {
    e.preventDefault();
    $(".ms-side-cart-overlay").fadeIn();
    $('.ms-side-cart').addClass("ms-open-cart");
  });
  $('.ms-side-cart-overlay, .ms-cart-close').on("click", function (e) {
    e.preventDefault();
    $(".ms-side-cart-overlay").fadeOut();
    $('.ms-side-cart').removeClass("ms-open-cart");
  });

  /*---------------------- dropdown-Tailwindcss -------------------------*/
  $('.dropdown > button').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('ms-active-toggle');
    $(this).parent().find('ul').first().toggle();
    $(this).parent().siblings().find('ul').hide();
    $(this).parent().find('ul').parent().mouseleave(function () {
      var thisUI = $(this);
      $('html').on("click", function () {
        thisUI.children(".dropdown-active").hide();
        thisUI.children("a").removeClass('ms-active-toggle');
        $('html').unbind('click');
      });
    });
  });

  /*--------------------- Wishlist sidebar JS -------------------------------- */
  $('.ms-wish-toggle').on("click", function (e) {
    e.preventDefault();
    $(".ms-side-wish-overlay").fadeIn();
    $('.ms-side-wish').addClass("ms-open-wish");
  });
  $('.ms-side-wish-overlay, .ms-wish-close').on("click", function (e) {
    e.preventDefault();
    $(".ms-side-wish-overlay").fadeOut();
    $('.ms-side-wish').removeClass("ms-open-wish");
  });

  /*--------------------- Get live location on menubar ---------------------- */

  $.getJSON('https://ipapi.co/json/', function (data) {
  })

    .then(function (data) {

      var el = document.getElementById('ms_location');

      el.style.display = 'block';

      if (data == 0) {
        el.innerText = "Select Location";
      } else {

        var is_all_empty = "NO";

        if (data.city == 0 && data.country == 0) {
          data.city = "";
          data.country = "";

          el.innerText = "Enter Your Location";

        } else {
          el.innerText = data.city + ", " + data.country;
        }

        $("#ms_location").parent().attr("title", data.city + ", " + data.country);

        $('.ms-detail-current').on('click', function () {
          el.innerText = data.city + ", " + data.country;
          $("#ms_location").parent().attr("title", data.city + ", " + data.country);
        });
      }
    })

  /*--------------------- location Toggle MenuBar ---------------------- */
  jQuery(".ms-location-toggle").on("click", function () {
    jQuery(this).parent().toggleClass('active');
    var $locationItem = $(this).closest('.ms-location-menu').find('.ms-location-dropdown');
    $locationItem.slideToggle('slow');
  });

  $('.loc-list').on('click', function () {
    var mslocname = $(this).find('.ms-detail').html();
    $("#ms_location").html(mslocname);
    $("#ms_location").parent().attr("title", mslocname);
    $('.ms-location-dropdown').slideToggle('slow');
  });

  /*---------------------------- Custom select ----------------------------*/
  $("select").each(function () {
    var $this = $(this),
      selectOptions = $(this).children("option").length;

    $this.addClass("hide-select");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="custom-select active"></div>');

    var $customSelect = $this.next("div.custom-select.active");
    $customSelect.text($this.children("option").eq(0).text());

    var $optionlist = $("<ul />", {
      class: "select-options",
    }).insertAfter($customSelect);

    for (var i = 0; i < selectOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($optionlist);
    }

    var $optionlistItems = $optionlist.children("li");

    $customSelect.click(function (e) {
      e.stopPropagation();
      $("div.custom-select.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").slideToggle();
    });

    $optionlistItems.click(function (e) {
      e.stopPropagation();
      $customSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $optionlist.hide();
    });

    $(document).click(function () {
      $customSelect.removeClass("active");
      $optionlist.hide();
    });
  });

  /*----------- modal ----------------*/
  $(".ms-modal-toggle").on("click", function () {
    $(".ms-modal-overlay").fadeIn();
    $(".ms-modal").fadeIn();
    $("body").addClass("ms-overflow-hidden")
    $(".ms-modal-dialog").addClass("ms-fadeOutUp");
    $(".ms-modal-dialog").removeClass("ms-fadeInDown");
  });

  $(".ms-close-modal, .ms-modal-overlay").on("click", function () {
    $(".ms-modal-overlay").fadeOut();
    $(".ms-modal").fadeOut();
    $("body").removeClass("ms-overflow-hidden")
    $(".ms-modal-dialog").removeClass("ms-fadeOutUp");
    $(".ms-modal-dialog").addClass("ms-fadeInDown");
  });

  /*-------------- tabs-ProductTab-Tailwindcss -------------------*/
  $("#ProductTab li:nth-child(1)").addClass("active");
  $(".tab-product-pane").hide();
  $(".tab-product-pane:nth-child(1)").show();
  $("#ProductTab li").click(function () {
    $("#ProductTab li").removeClass("active");
    $(this).addClass("active");
    $(".tab-product-pane").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  /*-------------- tabs-singleprotab-Tailwindcss -------------------*/
  $("#singleprotab li:nth-child(1)").addClass("active");
  $(".tab-singleprotab-pane").hide();
  $(".tab-singleprotab-pane:nth-child(1)").show();
  $("#singleprotab li").click(function () {
    $("#singleprotab li").removeClass("active");
    $(this).addClass("active");
    $(".tab-singleprotab-pane").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  /*----------------------------- Qty Plus Minus Button  ------------------------------ */
  var QtyPlusMinus = $(".qty-plus-minus");
  QtyPlusMinus.prepend('<div class="dec ms-qtybtn">-</div>');
  QtyPlusMinus.append('<div class="inc ms-qtybtn">+</div>');

  $("body").on("click", ".ms-qtybtn", function () {

    var $qtybutton = $(this);
    var QtyoldValue = $qtybutton.parent().find("input").val();
    if ($qtybutton.text() === "+") {
      var QtynewVal = parseFloat(QtyoldValue) + 1;
    } else {

      if (QtyoldValue > 1) {
        var QtynewVal = parseFloat(QtyoldValue) - 1;
      } else {
        QtynewVal = 1;
      }
    }
    $qtybutton.parent().find("input").val(QtynewVal);
  });

  /*--------------------- Team (About Page) ---------------------- */
  $('.ms-team').owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      },
      1400: {
        items: 4
      }
    }
  });

  /*--------------------- New product section Slider ---------------------- */
  $('.new-product-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      421: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1367: {
        items: 5
      }
    }
  });

  /*--------------------- Category slider section (Home Page) ---------------------- */
  $('.ms-category-block').owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    autoplay: true,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      420: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  });

  /*--------------------- Add More Product slider section (Single Product Page) ---------------------- */
  $('.ms-add-more-slider').owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1500,
    autoplay: false,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 3
      }
    }
  });

  /*--------------------- Testimonial Slider ---------------------- */
  $('#ms-testimonial-slider').owlCarousel({
    margin: 0,
    loop: true,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    smartSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1367: {
        items: 1
      }
    }
  });

  /*--------------------- Quick view modal images select js ---------------------- */
  $('.modal').on('shown.bs.modal', function (e) {
    $(".qty-product-cover").slick("setPosition");
    $(".qty-nav-thumb").slick("setPosition");
  });
  $('.qty-product-cover', this).not('.slick-initialized').slick({
    autoplay: false,
    lazyLoad: 'ondemand',
    fade: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.qty-nav-thumb',
    infinite: false
  });

  $('.qty-nav-thumb', this).not('.slick-initialized').slick({

    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.qty-product-cover',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    infinite: false,
    prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
    nextArrow: '<button class="slide-arrow next-arrow">></button>',
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        }
      }
    ]
  });

  /*----------------------------- Filter Icon OnClick Open filter Sidebar on shop page -----------------------------------*/
  $(".filter-toggle-icon").on("click", function () {
    $(".filter-sidebar-overlay").fadeIn();
    $(".ms-filter-sidebar").addClass("filter-sidebar-open");
  });

  $(".filter-close, .filter-sidebar-overlay").on("click", function () {
    $(".ms-filter-sidebar").removeClass("filter-sidebar-open");
    $(".filter-sidebar-overlay").fadeOut();
  });

  /*--------------------- Footer Toggle -------------------------------- */
  $(document).ready(function () {
    $(".ms-footer-links").addClass("ms-footer-dropdown");

    $('.ms-footer-heading').append("<div class='ms-heading-res'><i class='msicon msi-angle-down'></i></div>");

    $(".ms-footer-heading .ms-heading-res").click(function () {
      var $this = $(this).closest('.footer-top .col-sm-12').find('.ms-footer-dropdown');
      $this.slideToggle('slow');
      $('.ms-footer-dropdown').not($this).slideUp('slow');
    });
  });

  /*--------------------- Wishlist notify js ---------------------- */
  $('.wishlist').on("click", function () {
    $('.ms-wish-notify').fadeIn().append('<p class="wish-note">Add product in <a href="wishlist.html"> Wishlist</a> Successfully!</p>');
    setTimeout(function () {
      $('.wish-note').fadeOut()
    }, 1000);
  });

  /*--------------------- Compare notify js ---------------------- */
  $('.compare').on("click", function () {
    $('.ms-compare-notify').fadeIn().append('<p class="compare-note">Add product in <a href="compare.html"> Compare list</a> Successfully!</p>');
    setTimeout(function () {
      $('.compare-note').fadeOut()
    }, 2000);
  });

  /*--------------------- Add to cart button notify js ---------------------- */
  $('.add-to-cart').on("click", function () {
    $('.ms-cart-notify').fadeIn();
    setTimeout(function () {
      $('.ms-cart-notify').fadeOut()
    }, 2000);
  });

  /*----------------------------- Cart page Shipping Toggle -------------------------------- */
  $(document).ready(function () {
    $(".ms-sb-block-content .ms-ship-title").click(function () {
      $('.ms-sb-block-content .ms-cart-form').slideToggle('slow');
    });
  });

  /*----------------------------- Cart page Apply Coupen Toggle -------------------------------- */
  $(document).ready(function () {
    $(".ms-cart-coupan").click(function () {
      $('.ms-cart-coupan-content').slideToggle('slow');
    });
    $(".ms-checkout-coupan").click(function () {
      $('.ms-checkout-coupan-content').slideToggle('slow');
    });
  });

  /*----------------------------- Cart Page Qty Plus Minus Button  ------------------------------ */
  var CartQtyPlusMinus = $(".cart-qty-plus-minus");
  CartQtyPlusMinus.append('<div class="ms_cart_qtybtn"><div class="inc ms_qtybtn">+</div><div class="dec ms_qtybtn">-</div></div>');
  $(".cart-qty-plus-minus .ms_cart_qtybtn .ms_qtybtn").on("click", function () {
    var $cartqtybutton = $(this);
    var CartQtyoldValue = $cartqtybutton.parent().parent().find("input").val();
    if ($cartqtybutton.text() === "+") {
      var CartQtynewVal = parseFloat(CartQtyoldValue) + 1;
    } else {

      if (CartQtyoldValue > 1) {
        var CartQtynewVal = parseFloat(CartQtyoldValue) - 1;
      } else {
        CartQtynewVal = 1;
      }
    }
    $cartqtybutton.parent().parent().find("input").val(CartQtynewVal);
  });

  /*----------------------------- Sidebar Block Toggle (Checkout & Cart page) -------------------------------- */
  $(document).ready(function () {
    $(".ms-shop-sidebar .ms-sidebar-block .ms-sb-block-content, .ms-blogs-leftside .ms-sidebar-block .ms-sb-block-content, .ms-cart-rightside .ms-sidebar-block .ms-sb-block-content, .ms-checkout-rightside .ms-sidebar-block .ms-sb-block-content").addClass("ms-sidebar-dropdown");

    $('.ms-sidebar-title').append("<div class='ms-sidebar-res'><i class='msicon msi-angle-down'></i></div>");

    $(".ms-sidebar-title .ms-sidebar-res").click(function () {
      var $this = $(this).closest('.ms-shop-sidebar .ms-sidebar-block, .ms-blogs-leftside .ms-sidebar-block, .ms-cart-rightside .ms-sidebar-block, .ms-checkout-rightside .ms-sidebar-wrap').find('.ms-sidebar-dropdown');
      $this.slideToggle('slow');
    });
  });

  /*----------------------------- Remove Product (Compare page) -------------------------------- */
  $('.remove-compare-product').on("click", function () {
    $(this).parent().fadeOut();
  });

  /*----------------------------- Accordians toggle (faq page) -------------------------------- */
  $('.ms-accordion-header').on("click", function () {
    $(this).parent().siblings().children(".ms-accordion-body").slideUp();
    $(this).parent().find(".ms-accordion-body").slideToggle();
  });

  /*----------------------------- List Grid View -------------------------------- */
  $('.ms-gl-btn').on('click', 'button', function () {
    var $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
  });

  function showList(e) {
    var $gridCont = $('.shop-pro-inner');
    var $listView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.addClass('list-view');
    $listView.addClass('width-100');
  }

  function gridList(e) {
    var $gridCont = $('.shop-pro-inner');
    var $gridView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.removeClass('list-view');
    $gridView.removeClass('width-100');
  }

  $(document).on('click', '.btn-grid', gridList);
  $(document).on('click', '.btn-list', showList);

  function showList50(e) {
    var $gridCont = $('.shop-pro-inner');
    var $listView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.addClass('list-view-50');
    $listView.addClass('width-50');
  }

  function gridList50(e) {
    var $gridCont = $('.shop-pro-inner');
    var $gridView = $('.pro-gl-content');
    e.preventDefault();
    $gridCont.removeClass('list-view-50');
    $gridView.removeClass('width-50');
  }

  $(document).on('click', '.btn-grid-50', gridList50);
  $(document).on('click', '.btn-list-50', showList50);

  /*----------------------------- Price Range slider ( Shop page ) -------------------------------- */
  const slider = document.getElementById('ms-sliderPrice');
  if (slider) {
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = document.querySelectorAll('input.filter__input');

    noUiSlider.create(slider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: step,
      range: {
        'min': rangeMin,
        'max': rangeMax
      },

      format: {
        to: value => value,
        from: value => value
      }
    });

    slider.noUiSlider.on('update', (values, handle) => {
      filterInputs[handle].value = values[handle];
    });

    filterInputs.forEach((input, indexInput) => {
      input.addEventListener('change', () => {
        slider.noUiSlider.setHandle(indexInput, input.value);
      })
    });
  }

  /*----------------------------- Product Image Zoom --------------------------------*/
  $('.zoom-image-hover').zoom();

  /*----------------------------- single product Slider  ------------------------------ */
  $('.single-product-cover').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.single-nav-thumb',
  });

  $('.single-nav-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.single-product-cover',
    dots: false,
    arrows: true,
    focusOnSelect: true
  });

  /*----------------------------- Single Product Color and Size Click to Active -------------------------------- */
  $(document).ready(function () {
    $(".ms-pro-variation-content ul li").click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

  /*----------------------------- Back to top button  ------------------------------ */
  var btn = $('.ms-back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  /*----------------------------- Template run directly --------------------*/
  $(window).on("load", function () {

    setTimeout(function () {
      switch (window.location.protocol) {
        case 'file:':
          var alertBody = '<div id="ms-direct-run" class="ms-direct-run"><div class="ms-direct-body"><h4>Template Run Directly</h4><p>As we seeing you are try to load template without Local | Live server. it will affect missed or lost content. Please try to use Local | Live Server. </p></div></div>';
          $("body").append(alertBody);

          break;
        default:
      }
    }, 3000);
  });

  /*----------------------------- Features sidebar ---------------------- */
  $(".ms-tools-sidebar-toggle").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open-features")) {
      $(".ms-features-sidebar").stop().animate({ right: "0px" }, 100);
      $(".ms-features-sidebar-overlay").fadeIn();
      if ($(".ms-tools-sidebar-toggle").not("open-features")) {
        $(".ms-features-sidebar").stop().animate({ right: "-250px" }, 100);
        $(".ms-tools-sidebar-toggle").addClass("open-features");
      }
      if ($(".ms-tools-sidebar-toggle").not("open-features")) {
        $(".ms-features-sidebar").stop().animate({ right: "0" }, 100);
        $(".ms-tools-sidebar-toggle").addClass("open-features");
        $(".ms-features-sidebar-overlay").fadeIn();
      }
    } else {
      $(".ms-features-sidebar").stop().animate({ right: "-250px" }, 100);
      $(".ms-features-sidebar-overlay").fadeOut();
    }

    $(this).toggleClass("open-features");
    return false;

  });

  $(".ms-features-sidebar-overlay").on("click", function (e) {
    $(".ms-tools-sidebar-toggle").addClass("open-features");
    $(".ms-features-sidebar").stop().animate({ right: "-250px" }, 100);
    $(".ms-features-sidebar-overlay").fadeOut();
  });

  /*----------------------------- Change Template Color -------------------------------- */
  $('.ms-features-block').on('click', 'li', function () {
    $('link[href^="assets/css/color-"]').remove();
    var dataValue = $(this).attr('data-color');
    $('link.dark').remove();
    $("#ms-change-mode").removeClass('active');
    if ($(this).hasClass('active')) return;

    $(this).toggleClass('active').siblings().removeClass('active');

    if (dataValue != undefined) {
      $("link[href='assets/css/responsive.css']").before('<link rel="stylesheet" class="color-css" href="assets/css/color-' + dataValue + '.css" rel="stylesheet">');
    }

    return false;
  });

  /*----------------------------- Change Template Dark mode -------------------------------- */
  $(".ms-mode-switch").on("click", function (e) {
    e.preventDefault();
    $('link.color-css').remove();
    $(".ms-change-color li").removeClass('active');
    var $link = $('<link>', {
      rel: 'stylesheet',
      href: 'assets/css/dark-mode.css',
      class: 'dark'
    });
    $(this).parent().toggleClass('active');
    var modevalue = "light";
    if ($(this).parent().hasClass('ms-change-mode') && $(this).parent().hasClass('active')) {
      $("link[href='assets/css/responsive.css']").after($link);

    } else if ($(this).parent().hasClass('ms-change-mode') && !$(this).parent().hasClass('active')) {
      $('link.dark').remove();
      modevalue = "light";
    }
    if ($(this).parent().hasClass('active')) {
      $("body").addClass("dark");
      modevalue = "dark";
    } else {
      $("body").removeClass("dark");
      $('link.dark').remove();
    }
  });

  /* rtl-mode */
  $(".ms-mode-rtl .ms-rtl").on("click", function () {
    $(".ms-rtl").removeClass("active-rtl-mode");
    $(this).addClass("active-rtl-mode");
  });

  $(".rtl").on("click", function () {
    $("#add_rtl_mode").remove();
    $("head").append('<link rel="stylesheet" class="dark-link-mode" href="assets/css/rtl-mode.css" id="add_rtl_mode">');
  });
  $(".ltr").on("click", function () {
    $("#add_rtl_mode").remove();
  });

  /* bg */
  $(".bg-panel .ms-panel-bg").on("click", function () {
    $(".ms-panel-bg").removeClass("active-bg-panel");
    $(this).addClass("active-bg-panel");
  });

  $(".bg-1").on("click", function () {
    $("#add_bg").remove();
    $("body").addClass('body-bg-1').removeClass();
    $("head").append('<link rel="stylesheet" class="bg" href="assets/css/bg-1.css" id="add_bg">');
    $("body").addClass('body-bg-1');
  });

  $(".bg-2").on("click", function () {
    $("#add_bg").remove();
    $("body").addClass('body-bg-2').removeClass();
    $("head").append('<link rel="stylesheet" class="bg" href="assets/css/bg-2.css" id="add_bg">');
    $("body").addClass('body-bg-2');
  });

  $(".bg-3").on("click", function () {
    $("#add_bg").remove();
    $("body").addClass('body-bg-3').removeClass();
    $("head").append('<link rel="stylesheet" class="bg" href="assets/css/bg-3.css" id="add_bg">');
    $("body").addClass('body-bg-3');
  });

  $(".bg-4").on("click", function () {
    $("#add_bg").remove();
    $("body").addClass('body-bg-4').removeClass();
    $("head").append('<link rel="stylesheet" class="bg" href="assets/css/bg-4.css" id="add_bg">');
    $("body").addClass('body-bg-4');
  });

  $(".bg-5").on("click", function () {
    $("#add_bg").remove();
    $("body").addClass('body-bg-5').removeClass();
    $("head").append('<link rel="stylesheet" class="bg" href="assets/css/bg-5.css" id="add_bg">');
    $("body").addClass('body-bg-5');
  });

  $(".bg-6").on("click", function () {
    $("body").addClass('body-bg-6').removeClass();
    $("#add_bg").remove();
  });

})(jQuery);
