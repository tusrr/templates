var DEOTHEMES = DEOTHEMES || {}

;(function ($) {
  ;("use strict")

  DEOTHEMES.initialize = {
    init: function () {
      DEOTHEMES.initialize.scrollToTop()
      DEOTHEMES.initialize.mobileNavigation()
      DEOTHEMES.initialize.masonry()
      DEOTHEMES.initialize.masonryFilter()
      DEOTHEMES.initialize.socialShare()
      DEOTHEMES.initialize.countdown()
      DEOTHEMES.initialize.appSumoForm()
      DEOTHEMES.initialize.responsiveTables()
      DEOTHEMES.initialize.skipLinkFocus()
      DEOTHEMES.initialize.detectMobile()
    },

    preloader: function () {
      $(".loader").fadeOut()
      $(".loader-mask").delay(350).fadeOut("slow")
    },

    triggerResize: function () {
      $window.trigger("resize")
    },

    scrollToTopScroll: function () {
      var scroll = $window.scrollTop()
      if (scroll >= 50) {
        $backToTop.addClass("show")
      } else {
        $backToTop.removeClass("show")
      }
    },

    scrollToTop: function () {
      $backToTop.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 750)
        return false
      })
    },

    floatingCTA: function () {
      var scroll = $window.scrollTop()
      var $floatingBar = $(".deo-floating-cta")

      if (scroll > 190) {
        $floatingBar.addClass("deo-floating-cta--sticky")
      } else {
        $floatingBar.removeClass("deo-floating-cta--sticky")
      }
    },

    stickyNavbar: function () {
      var $navSticky = $(".nav--sticky")

      if (($window.scrollTop() > 190) & aboveMobile.matches ) {
        $navSticky.addClass("sticky")
      } else {
        $navSticky.removeClass("sticky")
      }

      if (($window.scrollTop() > 200) & aboveMobile.matches ) {
        $navSticky.addClass("offset")
      } else {
        $navSticky.removeClass("offset")
      }

      if (($window.scrollTop() > 500) & aboveMobile.matches ) {
        $navSticky.addClass("scrolling")
      } else {
        $navSticky.removeClass("scrolling")
      }
    },

    stickyNavbarRemove: function () {
      if (!aboveMobile.matches) {
        $(".nav--sticky").removeClass("sticky offset scrolling")
      }

      if (aboveMobile.matches) {
        $(".nav__dropdown-menu").css("display", "")
      }
    },

    mobileNavigation: function () {
      var $navDropdown = $(".nav__dropdown")
      var $navDropdownMenu = $(".nav__dropdown-menu")

      $(".nav__dropdown-trigger").on("click", function () {
        var $this = $(this)
        $this.toggleClass("nav__dropdown-trigger--is-open")
        $this.next($navDropdownMenu).slideToggle()
        $this.attr("aria-expanded", function (index, attr) {
          return attr == "true" ? "false" : "true"
        })
      })

      $(".nav__icon-toggle").on("click", function () {
        $(this).toggleClass("nav__icon-toggle--is-opened")
      })

      if ($html.hasClass("mobile")) {
        $body.on("click", function () {
          $navDropdownMenu.addClass("hide-dropdown")
        })

        $navDropdown.on("click", "> a", function (e) {
          e.preventDefault()
        })

        $navDropdown.on("click", function (e) {
          e.stopPropagation()
          $navDropdownMenu.removeClass("hide-dropdown")
        })
      }
    },

    masonry: function () {
      var $grid = $(".masonry-grid")

      if ($grid.length > 0) {
        $grid.imagesLoaded(function () {
          $grid.isotope({
            itemSelector: ".masonry-item",
            columnWidth: ".masonry-item",
            percentPosition: true,
            stagger: 30,
            hiddenStyle: {
              transform: "translateY(100px)",
              opacity: 0
            },
            visibleStyle: {
              transform: "translateY(0px)",
              opacity: 1
            }
          })
        })
      }
    },

    masonryFilter: function () {
      let $grid = $("#project-grid, #masonry-grid")

      if ($grid.length > 0) {
        $(".project-filter").on("click", "a", function (e) {
          e.preventDefault()
          var filterValue = $(this).attr("data-filter")
          $grid.isotope({ filter: filterValue })
          $(".project-filter a").removeClass("active")
          $(this).closest("a").addClass("active")
        })
      }
    },

    socialShare: function () {
      let $social = $(".entry__share-social"),
        $width = $(window).width(),
        $height = $(window).height()

      $social.on("click", function (e) {
        if (700 < $width && 500 < $height) {
          let $url = $(this).attr("href")
          window.open(
            $url,
            "",
            "width=700, height=500,left=" + ($width / 2 - 350) + ",top=" + ($height / 2 - 250) + ",scrollbars=yes"
          )
          e.preventDefault()
        }
      })
    },

    countdown: function () {
      let $countdown = $(".deo-countdown"),
        $endDate = $countdown.first().attr("data-end-date")

      if ($countdown.length > 0) {
        $countdown.countdown($endDate, function (event) {
          $(this).html(
            event.strftime(
              "" +
                '<div class="deo-countdown__item"><span class="deo-countdown__number">%D</span><label class="deo-countdown__label">Days</label></div>' +
                '<div class="deo-countdown__item"><span class="deo-countdown__number">%H</span><label class="deo-countdown__label">Hours</label></div>' +
                '<div class="deo-countdown__item"><span class="deo-countdown__number">%M</span><label class="deo-countdown__label">Minutes</label></div>' +
                '<div class="deo-countdown__item"><span class="deo-countdown__number">%S</span><label class="deo-countdown__label">Seconds</label></div>'
            )
          )
        })
      }
    },

    appSumoForm: function () {
      $("#deo-appsumo-form").on("submit", function (e) {
        var $form = $(this)
        var $button = $form.find("#deo-appsumo-form-submit")

        if (!$button.is(".clicked")) {
          $button.addClass("clicked")

          e.preventDefault()

          var $name = $form.find("#deo-appsumo-form-name").val()
          var $email = $form.find("#deo-appsumo-form-email").val()
          var $appsumoCode = $form.find("#deo-appsumo-form-appsumo-code").val()
          var $consent = $form.find("#deo-appsumo-consent")

          if ($consent.is(":checked")) {
            $consent = "true"
          } else if ($consent.is(":not(:checked)")) {
            $consent = "false"
          }

          var $alert = $form.find("#deo-appsumo-form-alert")

          $.ajax({
            url: DeoThemes_Data.ajax_url,
            type: "POST",
            data: {
              name: $name,
              email: $email,
              appsumoCode: $appsumoCode,
              consent: $consent,
              nonce: DeoThemes_Data.ajax_nonce,
              action: "deo_appsumo_submission"
            },
            beforeSend: function (xhr) {
              $button.addClass("deo-loading")
              $button.append('<div class="loader"><div></div></div>')
            },
            error: function (response) {
              $button.removeClass("deo-loading clicked")
              $button.find(".loader").remove()
            },
            success: function (response) {
              $button.removeClass("deo-loading clicked")
              $button.find(".loader").remove()

              if (true === response.success) {
                $alert.html(response.data).removeClass("elementor-alert-danger").addClass("elementor-alert-success")
              } else if (false === response.success) {
                $alert.removeClass("elementor-alert-success").addClass("elementor-alert-danger")

                if (response.data.code === "empty_name") {
                  $alert.html(response.data.message)
                } else if (response.data.code === "invalid_email") {
                  $alert.html(response.data.code)
                } else if (response.data.code === "license_not_found") {
                  $alert.html(response.data.message)
                } else {
                  $alert.html(response.data)
                }
              }
            }
          })
        }
      })
    },

    responsiveTables: function () {
      var $table = $(".wp-block-table")
      if ($table.length > 0) {
        $table.wrap('<div class="table-responsive"></div>')
      }
    },

    skipLinkFocus: function () {
      var isIe = /(trident|msie)/i.test(navigator.userAgent)

      if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener(
          "hashchange",
          function () {
            var id = location.hash.substring(1),
              element

            if (!/^[A-z0-9_-]+$/.test(id)) {
              return
            }

            element = document.getElementById(id)

            if (element) {
              if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1
              }

              element.focus()
            }
          },
          false
        )
      }
    },

    detectMobile: function () {
      if (
        /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
          navigator.userAgent || navigator.vendor || window.opera
        )
      ) {
        $html.addClass("mobile")
      } else {
        $html.removeClass("mobile")
      }
    }
  }

  DEOTHEMES.documentOnReady = {
    init: function () {
      DEOTHEMES.initialize.init()
    }
  }

  DEOTHEMES.windowOnLoad = {
    init: function () {
      DEOTHEMES.initialize.preloader()
      DEOTHEMES.initialize.triggerResize()
    }
  }

  DEOTHEMES.windowOnResize = {
    init: function () {
      DEOTHEMES.initialize.stickyNavbarRemove()
    }
  }

  DEOTHEMES.windowOnScroll = {
    init: function () {
      DEOTHEMES.initialize.scrollToTopScroll()
      DEOTHEMES.initialize.stickyNavbar()
      DEOTHEMES.initialize.floatingCTA()
    }
  }

  var $window = $(window),
    $html = $("html"),
    $body = $("body"),
    $backToTop = $("#back-to-top"),
    aboveMobile = window.matchMedia("(min-width: 992px)")

  $(document).ready(DEOTHEMES.documentOnReady.init)
  $window.on("load", DEOTHEMES.windowOnLoad.init)
  $window.on("resize", DEOTHEMES.windowOnResize.init)
  $window.on("scroll", DEOTHEMES.windowOnScroll.init)
})(jQuery)
