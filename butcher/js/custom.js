(function($) {
    "use strict";
	
	var tpj = jQuery;
    var revapi24;

	 // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(450).fadeOut("slow");
    });
    
	// on ready function
    jQuery(document).ready(function($) {
		
		
	$(window).scroll(function () {
		var window_top = $(window).scrollTop() + 1;
		if (window_top > 100) {
		  $('.menu-items-wrapper').addClass('menu-fixed animated fadeInDown');
		} else {
		  $('.menu-items-wrapper').removeClass('menu-fixed animated fadeInDown');
		}
	  });

    
    // index1 memnu

    $(document).ready(function(){
      $(".menu-click").click(function(){
        $(".menu-open").slideToggle();
      });
        $('body').on('click', function (e) {
            if (!$('.menu-click').is(e.target)
                && $('.menu-click').has(e.target).length === 0
                && $('.open').has(e.target).length === 0
            ) {
                $('.menu-open').slideUp();
            }
        });
    });


    $(document).ready(function(){
      $(".menu-click1").click(function(){
        $(".menu-open1").slideToggle();
      });
        $('body').on('click', function (e) {
            if (!$('.menu-click1').is(e.target)
                && $('.menu-click1').has(e.target).length === 0
                && $('.open').has(e.target).length === 0
            ) {
                $('.menu-open1').slideUp();
            }
        });
    });


    $(document).ready(function(){
      $(".menu-click2").click(function(){
        $(".menu-open2").slideToggle();
      });
     $('body').on('click', function (e) {
            if (!$('.menu-click2').is(e.target)
                && $('.menu-click2').has(e.target).length === 0
                && $('.open').has(e.target).length === 0
            ) {
                $('.menu-open2').slideUp();
            }
        });
    });



    $(document).ready(function(){
      $(".menu-click3").click(function(){
        $(".menu-open3").slideToggle();
      });
     $('body').on('click', function (e) {
            if (!$('.menu-click3').is(e.target)
                && $('.menu-click3').has(e.target).length === 0
                && $('.open').has(e.target).length === 0
            ) {
                $('.menu-open3').slideUp();
            }
        });
    });



    $(document).ready(function(){
      $(".menu-click4").click(function(){
        $(".menu-open4").slideToggle();
      });
     $('body').on('click', function (e) {
            if (!$('.menu-click4').is(e.target)
                && $('.menu-click4').has(e.target).length === 0
                && $('.open').has(e.target).length === 0
            ) {
                $('.menu-open4').slideUp();
            }
        });
    });



    $(document).ready(function(){
      $(".menu-click5").click(function(){
        $(".menu-open5").slideToggle();
      });
     $('body').on('click', function (e) {
            if (!$('.menu-click5').is(e.target)
                && $('.menu-click5').has(e.target).length === 0
                && $('.open').has(e.target).length === 0
            ) {
                $('.menu-open5').slideUp();
            }
        });
    });
    
    
   
    
    
    // ===== Scroll to Top ==== //
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });	

   
		// responsive sab menu
		(function ($) {
            $(document).ready(function () {

                $('#cssmenu li.active').addClass('open').children('ul').show();
                $('#cssmenu li.has-sub>a').on('click', function () {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    }
                    else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);
// menu fixed

  
// toggle cross btn js
$(".toggle-main-wrapper , #toggle_close").on("click", function () {
    $("#sidebar").toggleClass("open")
});

// index1 profile

    $(document).ready(function(){
      $(".login-btn").on('click', function(){
        $(".user-text").slideToggle();
      });
      $('body').on('click', function (e) {
                if (!$('.login-btn').is(e.target)
                    && $('.login-btn').has(e.target).length === 0
                    && $('.open').has(e.target).length === 0
                ) {
                    $('.user-text').slideUp();
                }
            });
    });


// slider blog single

$('.blog-page-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: false,
    smartSpeed: 1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('.chef-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: false,
    smartSpeed: 1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.company-logo-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: false,
    smartSpeed: 1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})








$('.blog-post-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: false,
    smartSpeed: 1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.sec-post-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: false,
    smartSpeed: 1200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// vedio popupe


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image', 
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });


 });

})(jQuery);

