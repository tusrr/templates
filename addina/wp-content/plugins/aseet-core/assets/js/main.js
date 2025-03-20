;(function ($) {

    "use strict";
    /*---------------------------------------------------
      * Initialize all widget js in elementor init hook
      ---------------------------------------------------*/
    $(window).on('elementor/frontend/init', function () {

        // blog Slider one
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-blog-slider-widget.default', function ($scope) {
            activeBlogSliderOne($scope);
        });
        // blog Slider two
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-blog-slider-two-widget.default', function ($scope) {
            activeBlogSliderTwo($scope);
        });
        // blog Slider three
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-blog-slider-three-widget.default', function ($scope) {
            activeBlogSliderThree($scope);
        });
        // team Slider one
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-team-slider-widget.default', function ($scope) {
            activeTeamSliderOne($scope);
        });
        // image Slider one
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-image-slider-one-widget.default', function ($scope) {
            activeImageSliderOne($scope);
        });

        // testimonial Slider two
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-testimonial-slider-two.default', function ($scope) {
            activeTestimonialSliderTwo($scope);
        });
        

        // banner Slider one
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-banner-slider-widget.default', function ($scope) {
            activeBannerSliderOne($scope);
        });

        // testimonial Slider one
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-testimonial-slider-one.default', function ($scope) {
            activeTestimonialSliderOne($scope);
        });

        // service Slider one
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-service-slider-one-widget.default', function ($scope) {
            activeServiceSliderOne($scope);
        });

        // team Slider two
        elementorFrontend.hooks.addAction('frontend/element_ready/stoky-team-member-slider-one-widget.default', function ($scope) {
            activeMemberSliderOne($scope);
        });

    });

    
    // JS for rtl
    var rtlEnable = $('html').attr('dir');
    var SlickRtlValue = !(typeof rtlEnable === 'undefined' || rtlEnable === 'ltr');

    /*----------------------------
        Blog Slider One
    * --------------------------*/
    function activeBlogSliderOne($scope) {
        var el = $scope.find('.blog-slider');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }

    /*----------------------------
        Blog Slider One
    * --------------------------*/
    function activeBlogSliderTwo($scope) {
        var el = $scope.find('.blog-slider-two');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '220px',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0',
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }
    // Slick Scroll
    jQuery(function () {
      const slider = jQuery(".blog-slider-two");
      slider;

      slider.on("wheel", function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
          jQuery(this).slick("slickNext");
        } else {
          jQuery(this).slick("slickPrev");
        }
      });
    });

    /*----------------------------
        Blog Slider Three
    * --------------------------*/
    function activeBlogSliderThree($scope) {
        var el = $scope.find('.blog-slider-three');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }

    /*----------------------------
        Team Slider One
    * --------------------------*/
    function activeTeamSliderOne($scope) {
        var el = $scope.find('.team-slider');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '220px',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }

    

    /*----------------------------
        Testimonial Slider Two
    * --------------------------*/
    function activeTestimonialSliderTwo($scope) {
        var el = $scope.find('.testimonial-slider');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }

        let $selector = '#' + el.attr('id');

        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls .slider-nav'),
            appendDots: $scope.find('.slick-carousel-controls .slider-dots'),
            prevArrow: '<div class="prev-arrow testimonial-1-prev-icon">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow testimonial-1-next-icon">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            fade: true,
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }




    /*----------------------------
        Testimonial Slider One
    * --------------------------*/
    function activeImageSliderOne($scope) {
        var el = $scope.find('.image-slider-one');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }

        let $selector = '#' + el.attr('id');

        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls .slider-nav'),
            appendDots: $scope.find('.slick-carousel-controls .slider-dots'),
            prevArrow: '<div class="prev-arrow image-1-prev-icon">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow image-1-next-icon">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }
    

    /*----------------------------
        banner Slider One
    * --------------------------*/
    function activeBannerSliderOne($scope) {
        var el = $scope.find('.banner-slider');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }

    /*----------------------------
        Testimonial Slider One
    * --------------------------*/
    function activeTestimonialSliderOne($scope) {
        var el = $scope.find('.testimonial-slider');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }

        let $selector = '#' + el.attr('id');

        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls .slider-nav'),
            appendDots: $scope.find('.slick-carousel-controls .slider-dots'),
            prevArrow: '<div class="prev-arrow testimonial-1-prev-icon">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow testimonial-1-next-icon">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }

    /*----------------------------
        Service Slider One
    * --------------------------*/
    function activeServiceSliderOne($scope) {
        var el = $scope.find('.service-slider');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items === '0' || elSettings.items === '' || typeof elSettings.items == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }


    /*----------------------------
        Team Slider Two
    * --------------------------*/
    function activeMemberSliderOne($scope) {
        var el = $scope.find('.team-member');
        var elSettings = el.data('settings');
        if ((el.children('div').length < 2) || (elSettings.items_2 === '0' || elSettings.items_2 === '' || typeof elSettings.items_2 == 'undefined')) {
            return
        }
        let $selector = '#' + el.attr('id');
        let sliderSettings = {
            infinite: elSettings.loop === 'yes',
            slidesToShow: elSettings.items_2,
            slidesToScroll: 1,
            arrows:  elSettings.nav === 'yes',
            dots:  elSettings.dot === 'yes',
            appendArrows: $scope.find('.slick-carousel-controls'),
            appendDots: $scope.find('.slick-carousel-controls'),
            prevArrow: '<div class="prev-arrow">' + elSettings.navleft + '</div>',
            nextArrow: '<div class="next-arrow">' + elSettings.navright + '</div>',
            autoplaySpeed: elSettings.autoplaytimeout,
            autoplay: elSettings.autoplay === 'yes',
            centerMode: elSettings.center === 'yes',
            centerPadding: '0',
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        wowSlickInit($selector, sliderSettings);
    }

    //slick init function
    function wowSlickInit($selector, settings, animateOut = false) {
        $($selector).slick(settings);
    };
    

    /*------------------------------
        counter section activation
      -------------------------------*/
    function counterupInit($scope) {
        $scope.counterUp({
            delay: 20,
            time: 3000
        });
    }

    //Odometer
    if ($(".single-counterup-01").length) {
        $(".single-counterup-01").each(function () {
            $(this).isInViewport(function (status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });
    }

    //Masonary Gallery
    var $caseStudyThreeContainer = $('.grid');
    if ($caseStudyThreeContainer.length > 0) {
        $('.grid').imagesLoaded(function () {
            var caseMasonry = $caseStudyThreeContainer.isotope({
                itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
                masonry: {
                    gutter: 0
                }
            });
            $(document).on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                caseMasonry.isotope({
                    filter: filterValue
                });
            });
        });
        $(document).on('click', 'button', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }

    $(document).ready(function () {
        /*--------------------
          wow js init
      ---------------------*/
        new WOW().init();

        /*---------------------------------
        * Magnific Popup
        * --------------------------------*/
        $('.video-play-btn, .video-play-btn-02, .video-play-btn-hover, .play-video-btn, .button-video').magnificPopup({
            type: 'video',
            removalDelay: 400,
            preloader: false,
        });
        // Nice select
        // $("select").niceSelect();

    });

})(jQuery);

