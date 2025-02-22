(function ($) {

	/* ================= Configure functions  =================  */

	// Enhance Contact Form 7 plugin behavior to fit theme design.
	function cf7_extra() {
		// Hide status message by click.
		$('.wpcf7-response-output').on('click', function () {
			$(this).hide(300);
		});

		// Hide notifications by click.
		$('.wpcf7-form-control-wrap').each(function () {
			$(this).on('click', function () {
				$(this).find('.wpcf7-form-control').focus().next().remove();
			})
		})
	}

	cf7_extra();

	// Show drop down on first menu click.
	function preventMenuAction() {
		if ($(window).width() > 767) {
			$('.touch .menu-item-has-children > a').one('click', function (e) {
				e.preventDefault();
			})
		}
	}

	preventMenuAction();

	// Show secondary header on page scroll.
	function stickyHeader() {
		var header_offset = 140;
		$(window).scroll(function () {
			if ($(window).scrollTop() > header_offset && !($('.site-header').hasClass('sticky'))) {
				$('.site-header').addClass('sticky');
			}
			else {
				if ($(window).scrollTop() < header_offset) {
					$('.site-header').removeClass('sticky');
				}
			}

		});
	}

	stickyHeader();

	// Parallax effect for header image and text on the home page.
	/*function scrollBanner() {
		$(window).scroll(function () {
			var scrollPos = $(this).scrollTop();
			// console.log(scrollPos);
			$('.home .header-pr-text').css({
				'top': (scrollPos / 2) + 'px',
				'opacity': 1 - (scrollPos / 600)
			});
			/*$('#line1 .header-pr-text').css({
				'background-position': 'center ' + (-scrollPos / 9) + 'px'
			});
		});
	}

	// Parallax effect for header image and text on sub pages.
	function scrollBanner() {
		$(window).scroll(function () {
			var scrollPos = $(this).scrollTop();
			// console.log(scrollPos);
			$('.not-home .background-parallax .container').css({
				'top': (scrollPos / 2) + 'px',
				'opacity': 1 - (scrollPos / 200)
			});
			$('.background-parallax ').css({
				'background-position': 'center ' + (-scrollPos / 9) + 'px'
			});
		});
	}*/


	// Parallax effect for header image and text on sub pages.
	function scrollBanner() {
		$(window).scroll(function () {
			if ( $( "body.home" ).length) {
				var hideclass = '.home .header-pr-text';
				var visibilitispeed = 500;
			} else if ( $( "body.not-home" ).length) {
				var hideclass = '.not-home .background-parallax .container';
				var visibilitispeed = 200;
			};
			var scrollPos = $(this).scrollTop();
			// console.log(scrollPos);
			$(hideclass).css({
				'top': (scrollPos / 2) + 'px',
				'opacity': 1 - (scrollPos / visibilitispeed)
			});
		});
	}
	
	scrollBanner();

	

	$(document).ready(function () {


		/* ================= Custom theme scripts  =================  */

		// Mobile slider touch icon.
		$('.flexslider').append('<div class="touch-indicator visible-xs"></div>');

		// Main menu structure
		//$('.flexslider').append('<div class="touch-indicator visible-xs"></div>');

		/* ================= Initialize external plugins  ================ */

		// Images gallery.
		$(".gallery").lightGallery({
			selector: 'a'
		});

		/*====Home menu tabs=====*/
		/*add current class to first item*/
		$('.dishes-items').first().addClass('current');
		$('.d-image').first().addClass('current');
		$('.d-title').first().addClass('current');


		
		$('ul.dishes-title li').click(function(){
		var tab_id = $(this).attr('data-tab');



		$('ul.dishes-title li').removeClass('current');
		$('.dishes-items').removeClass('current');
		$('.dishes-image img').removeClass('current');


		$(this).addClass('current');
		$("."+tab_id).addClass('current');

	})
		/*End Home menu tabs*/

		// Home gallery carousel.
		$('.home-gallery-carousel > div').owlCarousel({
			items: 1,
			margin: 0,
			lazyLoad: true,
			dots: false,
			nav: true,
			rewind: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			loop: true,
			stagePadding: 0,
			//smartSpeed: 450,
			//animateIn: 'flipInX',
			//animateOut: 'slideOutDown'
		});

		// Testimonials carousel.
		$('.testimonials-items').owlCarousel({
			items: 1,
			lazyLoad: true,
			dots: true,
			nav: false,
			rewind: false,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			loop: true,
			//stagePadding: 30,
			smartSpeed: 450,
			animateIn: 'flipInX',
			animateOut: 'slideOutDown'
		});

		// On scroll animations.
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 100,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true,       // act on asynchronously loaded content (default is true)
				callback: function (box) {
					// the callback is fired every time an animation is started
					// the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null // optional scroll container selector, otherwise use window
			}
		);
		wow.init();

		// Equal height for blocks.
		$('.match').matchHeight();

		// Scripts for mobile devices.
		if ($(window).width() < 768) {
			// Mobile menu.
			$('nav#menu_mobile').mmenu();

		}
		// Scripts for non mobile
		else {

			// Default Menu dropdown.
			$('.nav-primary ul.main-menu').superfish({
				animation: false,
				animationOut: false
			});

			// Forbid click event for phone links
			$('a[href^="tel:"]').on('click', function (e) {
				e.preventDefault();
			});

		}

				 // Smooth scroll



		// Add smooth scrolling to all links
  /*$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-100
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });*/

	// Add smooth scrolling to all links
	  var scrollWin = function (selector) {
	  	if ($(window).width() < 768) {
					// Mobile menu.
					var topmargin = 38;

				} else {
					var topmargin = 111;
				};
	    	jQuery('html, body').animate({
	    	scrollTop: (jQuery(selector).offset().top-topmargin)
	    	}, 800);
	    }
		    jQuery(".main-menu>li.menu-item-object-custom>[href^=#]").click(function(e) {
		    	scrollWin(jQuery(this).attr("href"));

		    if ($(window).width() > 768) {
					// Mobile menu.
					return false;

				}
		    	
		    	jQuery("#mm-blocker").click();
		    });

		    jQuery("#line1 a[href^=#]").click(function(e) {
		    	scrollWin(jQuery(this).attr("href"));
		    	return false;
		    
		    });


	    /*Map scrool off*/
			$('.block-map iframe').addClass('scrolloff'); 
			  $('.block-map').on('click', function () {
			      $('.block-map iframe').removeClass('scrolloff'); // set the pointer events true on click
			  });
			  $(".block-map").mouseleave(function () {
			      $('.block-map iframe').addClass('scrolloff'); 
			  });




	});


	$(window).load(function () {
		$('body').addClass('loaded');
		// Hide touch indicator.
		setTimeout(function () {
			$('.flexslider .touch-indicator').addClass('disabled');
		}, 4500);
	});

	// Window resize
	$(window).resize(function () {
	});

	// Window scroll actions.


	// Orientation change
	window.addEventListener("orientationchange", function () {
	});

})(jQuery);
