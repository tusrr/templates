/**
 * Theme Main Scripts
 * @since 1.0.0
 */
;(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // Default Navigation Bar
        $(".navbar-toggler").click(function () {
            $(".navbar-nav").toggleClass("show", 1000);
            $(".navbar-area-2 .navbar-collapse").toggleClass("show", 1000);
        });
        $('#nav-icon3').click(function () {
            $(this).toggleClass('open', 1000);
        });

        // navbar-click
        $(".menu-item-has-children a").on("click", function () {
            var element = $(this).parent("li");
            if (element.hasClass("show")) {
                element.removeClass("show");
                element.children("ul").slideUp(500);
            }
            else {
                element.siblings("li").removeClass('show');
                element.addClass("show");
                element.siblings("li").find("ul").slideUp(500);
                element.children('ul').slideDown(500);
            }
        });

        window.addEventListener('resize', function () {
            if (screen.width > 991) {
                $('.sub-menu').show();
            }else{
                $('.sub-menu').hide();
            }
        }, true);
        //sidebar Menu
        $(document).on('click', '.header-toggle-area', function () {
            $('.page-wrapper').toggleClass('show');
        });

        //Cross Menu
        $('.nav-menu-close').on('click', function () {
            $('.page-wrapper').removeClass('show');
        });

        /*----------------------
           Search Popup
       -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('.search-popup');
        var videoitemPopup = $('.video-item-popup');

        bodyOvrelay.on('click', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            videoitemPopup.removeClass('active');
        });
        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            videoitemPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '.search-', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });
        $(document).on('click', '.videoitem', function (e) {
            e.preventDefault();
            videoitemPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        var bodyOvrelay = $('#body-overlay');
        var sidebarMenu = $('#sidebar-menu');

        // sidebar menu 
        $(document).on('click', '.sidebar-menu-close', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function (e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /*----------------------------------
           Magnific popup activation
       ----------------------------------*/
        $('.video-play-btn').magnificPopup({
            type: 'video',
            removalDelay: 400,
            preloader: false,
        });

        

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        if ($('.counter').length){
            $('.counter').counterUp({
                delay: 15,
                time: 2000
            });
        }

        /* -----------------------------------------
            audio player
        ----------------------------------------- */
        $(function() {
            $('audio').audioPlayer();
        });

        /* -----------------------------------------
            banner video  player
        ----------------------------------------- */
        var figure = $(".banner-video-1").hover( hoverVideo, hideVideo );
        function hoverVideo(e) {
            $('video', this).get(0).play();
        }
        function hideVideo(e) {
            $('video', this).get(0).pause();
        }

        /* -----------------------------------------
            banner video  player
        ----------------------------------------- */
        var figure = $(".banner-video-2").hover( hoverVideo, hideVideo );
        function hoverVideo(e) {
            $('video', this).get(0).play();
        }
        function hideVideo(e) {
            $('video', this).get(0).pause();
        }

        /* -----------------------------------------
            video auto player
        ----------------------------------------- */
        var figure = $(".single-video-list-inner").hover( hoverVideo, hideVideo );
        function hoverVideo(e) {
            $('video', this).get(0).play();
        }
        function hideVideo(e) {
            $('video', this).get(0).pause();
        }

        /* -----------------------------------------
            video auto player
        ----------------------------------------- */
        var figure = $(".single-video-list-inner-popup").hover( hoverVideo, hideVideo );
        function hoverVideo(e) {
            $('video', this).get(0).play();
        }
        function hideVideo(e) {
            $('video', this).get(0).pause();
        }

        /* -----------------------------------------
            video auto player
        ----------------------------------------- */
        var figure = $(".single-video-slider").hover( hoverVideo, hideVideo );
        function hoverVideo(e) {
            $('video', this).get(0).play();
        }
        function hideVideo(e) {
            $('video', this).get(0).pause();
        }


        /*-------------------------------------------------
            LocomotiveScroll
        --------------------------------------------------*/
        (function($) {
            // Make elements equal to the viewport height. 
            // Or at least as tall as the viewport height, if second parameter is true. Sets the 'height' or 'min-height' property.
            function setToViewportHeight( selector, forceViewportMax )
            {
            var viewportHeight = $(window).innerHeight();

            $(selector).each(function(){
            var height = $(this).height();

            if ( forceViewportMax == true ){
            // Set height to same as viewport height.
            if ( height < viewportHeight ){
            $(this).height(viewportHeight);
            }  
            } 
            else {
            // Min height of element that is the same as the viewport
            $(this).css('min-height', viewportHeight + "px");
            }

            });
            }

            // Reverse scroll of the middle column in the Image Column Grid.
            //   (Organized within the "module pattern": self-executes an 
            //    anonymous function that returns an object) 
            var reverseScroll = (function(){

            var selector = '.image-column-grid .reverse';
            var selectorNotReverse = '.image-column-grid .column:not(.reverse)';
            var wrapSelector = '.image-column-grid';
            // Number of column pixels always visible, until scrolling begins
            var fixedOffsetEdge = 1200; 

            var setupBindings = function(){

            // Regular column element(s)
            $(selectorNotReverse).each(function(index, el){
            var startOffset = window.innerHeight - fixedOffsetEdge;
            });

            // Reversed column element(s)
            $(selector).each(function(index, el){
            // Get container
            var container = $(el).closest(wrapSelector);
            if ( $(container).length == 0){ return; }

            // Get heights
            var wrapHeight = $(container).outerHeight();
            var elHeight = $(el).outerHeight();
            var firstChildHeight = $('*:first-child', el).outerHeight();
            var lastChildHeight = $('*:last-child', el).outerHeight();

            // Total amount that margin changes (top to bottom of scroll) 
            // And don't scroll past last item (first child)
            var scrollTotal = (wrapHeight + elHeight) -firstChildHeight - fixedOffsetEdge;

            // Set a negative top value to move it out of sight.

            // When scrolling, change margin proportionately.
            $(window).on('scroll', function(){
            // Any part of element enters viewport
            if ( isScrolledIntoView( $(container)[0], false) && wrapHeight > 0 )
            {
            // Start scrolling when this point is reached
            var scrollStart = window.innerHeight;

            // Where element is offset from top of the page. 
            // If it's visible on load, the starting scroll point 
            // starts there, rather than when element comes into view.
            var containerOffset = $(container).offset().top;
            //console.log(containerOffset);
            if (containerOffset < window.innerHeight){
            scrollStart = window.innerHeight - containerOffset;
            }
            //console.log("scrollStart:"+scrollStart);

            // Where top of container is scrolled to in the window
            var elemTop = $(container)[0].getBoundingClientRect().top;

            // Percent scaled ratio (0 to 1.0)
            var minToStartScroll = fixedOffsetEdge;
            if (scrollStart > minToStartScroll){
            minToStartScroll = scrollStart;
            }
            var percentScrolled = (window.innerHeight - elemTop - minToStartScroll) / (wrapHeight - window.innerHeight + lastChildHeight + fixedOffsetEdge);
            //console.log("min to start scroll:"+minToStartScroll);
            // console.log("percentScrolled: "+percentScrolled);
            if (percentScrolled < 0){ percentScrolled = 0; }
            if (percentScrolled > 1){ percentScrolled = 1.0; }

            // Scale total margin change by percent scrolled.
            var newMargin = (scrollTotal * percentScrolled);
            // Set new margin
            $(el).css('transform', 'translateY(' + newMargin + 'px)');
            }
            });

            });

            } // end setupBindings

            var init = function(){
            setupBindings();
            }

            // Public API
            return {
            init: init
            };
            })();


            // Check if element is scrolled into view.
            // Pass true to "fullyInView" if the whole element must be visible
            function isScrolledIntoView(el, fullyInView) {
            var elemTop = el.getBoundingClientRect().top;
            var elemBottom = el.getBoundingClientRect().bottom;
            var isVisible = false;

            if (fullyInView == true){
            // element must be fully within viewport
            isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            } else {
            // any part of element is visible in the viewport
            isVisible = elemTop <= window.innerHeight;
            }
            return isVisible;
            }

            // INIT
            setToViewportHeight('.viewport-height', false);
            reverseScroll.init();

            // Window Resize
            // To-Do/Should Do: debounce
            $(window).resize(function() {
            setToViewportHeight('.viewport-height', false);
            reverseScroll.init();
            //console.log('resize');
            });

        })(jQuery);
        

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        if ($('.counter').length){
            new WOW().init();
        }

        /*-------------------------------
            back to top
        ------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        /*-------------------------------
            Navbar Fix
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }

    });

    $(window).on('resize', function () {
        /*-------------------------------
            Navbar Fix
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }
    });


    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        /*--------------------------
         sticky menu activation
        ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;

    });

    $(window).on('load', function () {
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

    function navbarFix() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
    }

})(jQuery);
