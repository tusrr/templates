;(function ($) {
  "use strict"

  var $window = $(window)

  /* Load More
	-------------------------------------------------------*/
  function initLoadMore() {
    $(".deo-load-more__button").on("click", function (e) {
      var button = $(this)

      if (!button.is(".clicked")) {
        button.addClass("clicked")

        e.preventDefault()
        e.stopPropagation()

        var widget = button.parent(".deo-load-more").siblings(".deo-load-more-container")
        var widgetRow = widget.find(".row")
        var page = widget.data("page")
        var newPage = page + 1
        var settings = widget.data("settings")

        var data = {
          action: "deo_widget_load_more",
          security: deo_elementor_data.ajax_nonce,
          data: {
            page: page,
            settings: settings
          }
        }

        $.ajax({
          type: "POST",
          url: deo_elementor_data.ajax_url,
          data: data,
          beforeSend: function (xhr) {
            button.addClass("deo-loading")
            button.append('<div class="loader"><div></div></div>')
          },
          success: function (response) {
            if (response) {
              button.removeClass("deo-loading clicked")
              button.find(".loader").remove()

              widget.data("page", newPage)

              var $items = $(response).hide()
              widgetRow.append($items)

              // recalc masonry items
              widgetRow.imagesLoaded(function () {
                $items.show()
                widgetRow.masonry("appended", $items)
              })

              if (widget.data("page_max") == widget.data("page")) {
                button.remove()
              }
            } else {
              button.remove()
            }
          }
        })
      }

      return false
    })
  }

  function isValidUrl(string) {
    try {
      const newUrl = new URL(string)
      return newUrl.protocol === "http:" || newUrl.protocol === "https:"
    } catch (err) {
      return false
    }
  }

  function initThemeDetector() {
    $("#deo-theme-detector-form__btn").on("click", function (e) {
      const button = $(this)
      const form = $(".deo-theme-detector-form")
      const resultContainer = $("#deo-theme-detector-result")
      const input = $("#deo-theme-detector-form__input")
      const message = form.find(".deo-theme-detector-form__message")

      if (!button.is(".clicked")) {
        button.addClass("clicked")

        e.preventDefault()
        e.stopPropagation()

        resultContainer.empty()

        // URL Validation
        if (isValidUrl(input.val())) {
          input.removeClass("error")
          $(".form-item-message").hide()
        } else {
          input.addClass("error")
          message.addClass("error").text("The URL must start with http:// or https://")
          input.focus()
          button.removeClass("deo-loading clicked")
          return
        }

        var data = {
          action: "deo_widget_theme_detector",
          security: deo_elementor_data.ajax_nonce,
          data: {
            url: input.val()
          }
        }

        $.ajax({
          type: "POST",
          url: deo_elementor_data.ajax_url,
          data: data,
          beforeSend: function (xhr) {
            button.addClass("deo-loading")
            button.append('<div class="loader"><div></div></div>')
          },
          success: function (response) {
            if (response) {
              // console.log(response)
              const { Author, AuthorURI, Name, Description, Version, Screenshot } = response.data
              button.removeClass("deo-loading clicked")
              button.find(".loader").remove()

              if (response.data === "not wordpress") {
                resultContainer.append(`
                  <div class="deo-theme-detector-result__header">
					          <p>No Theme Found</p>
				          </div>
                  <div class="deo-theme-detector-result__container deo-theme-detector-result__container--not-wp">
                    <p>This site is not using WordPress. You can however check our amazing collection of beautiful WordPress themes right here.</p>
                    <a href="${deo_elementor_data.site_url}/wordpress-themes/" class="btn btn--md btn--color">View WordPress Themes</a>
                  </div>
                `)
                return
              }

              resultContainer.append(`
                <div class="deo-theme-detector-result__header">
					        <p>${input.val()} is using ${Name} theme.</p>
				        </div>
                <div class="deo-theme-detector-result__container">
                  ${
                    Screenshot
                      ? `<img src="${Screenshot}" class="deo-theme-detector-result__screenshot" alt="${Name}" width="240" height="180" />`
                      : ""
                  }
									<div class="deo-theme-detector-result__info">
										<h2 class="deo-theme-detector-result__title">${Name}</h2>
										<ul class="deo-theme-detector-result__details">
                      ${
                        AuthorURI
                          ? `<li class="deo-theme-detector-result__details-item">
                            <span>Author:</span>
                            <a href="${AuthorURI}">${Author}</a>
                          </li>`
                          : ""
                      }
                      ${
                        Version
                          ? `
                          <li class="deo-theme-detector-result__details-item">
                            <span>Version:</span>
                            <span>${Version}</span>
                          </li>`
                          : ""
                      }
                      ${
                        Description
                          ? `
                          <li class="deo-theme-detector-result__details-item">
                            <span class="deo-theme-detector-result__details-item-desc">Description:</span>
                            ${Description}
                          </li>`
                          : ""
                      }
										</ul>
									</div>
								</div>
							`)
            }
          },
          error: function (response) {
            // console.log(response)
            if (response.status === 404) {
              button.removeClass("deo-loading clicked")
              button.find(".loader").remove()
              resultContainer.append(`
                <div class="deo-theme-detector-result__header">
                  <p>No Theme Found</p>
                </div>
                <div class="deo-theme-detector-result__container deo-theme-detector-result__container--not-wp">
                  <p>Oops. It looks like ${input.val()} can’t be found or may be running a custom theme.</p>
                  <p>Let’s try another URL.</p>
                </div>
              `)
            }
          }
        })
      }

      return false
    })
  }

  /* Testimonials Slider
	-------------------------------------------------------*/
  var deoTestimonialsSlider = function ($scope, $) {
    var slider = $(".deo-testimonials-slider")
    var settings = slider.data("slider-settings")
    const Swiper = elementorFrontend.utils.swiper

    if (slider.length > 0) {
      initSwiper()
      async function initSwiper() {
        var swiper = await new Swiper(slider, settings)

        // Watch the changes of spacing control
        if (elementorFrontend.isEditMode()) {
          elementor.channels.editor.on("change", function (view) {
            let changed = view.container.settings.changed

            if (changed.dots_top_space) {
              swiper.update()
            }

            if (changed.space_between) {
              settings.spaceBetween = +changed.space_between.size
              swiper.destroy()

              reinitSwiper()
              async function reinitSwiper() {
                swiper = await new Swiper(slider, settings)
              }
            }
          })
        }
      }
    }
  }

  /* Countdown
	-------------------------------------------------------*/
  var deoCountdown = function ($scope, $) {
    let id = $scope.data("id"),
      $countdown = $(".deo-countdown-" + id),
      $endDate = $countdown.attr("data-end-date")

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
  }

  /* Magnific Popup
	-------------------------------------------------------*/
  var deoMagnificPopup = function ($scope, $) {
    $(".lightbox-img, .lightbox-video").magnificPopup({
      callbacks: {
        elementParse: function (item) {
          if (item.el.context.className == "lightbox-video") {
            item.type = "iframe"
          } else {
            item.type = "image"
          }
        }
      },
      type: "image",
      closeBtnInside: false,
      fixedContentPos: false,
      gallery: {
        enabled: true
      },
      image: {
        titleSrc: "title",
        verticalFit: true
      }
    })

    // Single video lightbox
    $(".single-video-lightbox").magnificPopup({
      type: "iframe",
      closeBtnInside: true,
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.iframe.markup = this.st.iframe.markup.replace("mfp-iframe-scaler", "mfp-iframe-scaler mfp-with-anim")
          this.st.mainClass = this.st.el.attr("data-effect")
        }
      },
      fixedContentPos: false,
      tLoading: "Loading image #%curr%..."
    })
  }

  /* Masonry
	-------------------------------------------------------*/
  function initMasonry() {
    var $grid = $(".masonry-grid").imagesLoaded(function () {
      $grid.masonry({
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-item:not(.entry--first-post)",
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

  $(document).ready(function () {
    initLoadMore()
    initThemeDetector()
  })

  $window.on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/deo-blog-posts.default", initMasonry)
    elementorFrontend.hooks.addAction("frontend/element_ready/deo-video-icon.default", deoMagnificPopup)
    elementorFrontend.hooks.addAction("frontend/element_ready/deo-testimonials-slider.default", deoTestimonialsSlider)
    elementorFrontend.hooks.addAction("frontend/element_ready/deo-countdown.default", deoCountdown)
  })
})(jQuery)
