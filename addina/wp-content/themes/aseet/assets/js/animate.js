/**
 * Theme Main Scripts
 * @since 1.0.0
 */
;(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Get Device width
        let device_width = window.innerWidth;

        // 1. Menu Text Animation
        document.querySelectorAll('.navbar-nav > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');
        setTimeout(() => {
            var menu_text = document.querySelectorAll(".menu-text span")
            menu_text.forEach((item) => {
                var font_sizes = window.getComputedStyle(item, null);
                let font_size = font_sizes.getPropertyValue("font-size");
                let size_in_number = parseInt(font_size.replace("px", ""));
                let new_size = parseInt(size_in_number / 3)
                new_size = new_size + "px"
                if (item.innerHTML == " ") {
                    item.style.width = new_size
                }
            })
        }, 1000);

        // 2. Title Animation
        let splitTitleLines = gsap.utils.toArray(".title-anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });
            const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" })
            tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });

         // 2. Title Animation
        let splitTitleLines2 = gsap.utils.toArray(".title-anim-2");
        splitTitleLines2.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });
            const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" })
            tl.from(itemSplitted.lines, { duration: 1, delay: 0.6, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });

        // 3. Text Animation
        let splitTextLines = gsap.utils.toArray(".text-anim p");
        splitTextLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    duration: 2,
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });
            const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" })
            tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });

        // 4. Tilt JS
        let tilt = document.querySelectorAll(".wc-tilt");
        let tilt_2 = document.querySelectorAll(".wc-tilt-2");
        if (tilt) {
            VanillaTilt.init(document.querySelectorAll(".wc-tilt"), {
                max: 15,
                speed: 3000,
            });
        }
        if (tilt_2) {
            VanillaTilt.init(document.querySelectorAll(".wc-tilt-2"), {
                max: 10,
                speed: 3000,
            });
        }


        // 5. img JS
        let imageTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about__img-",
                markers: false,
                normalizeScroll: true,
                scrub: 1,
                start: 'top 90%',
                end: 'bottom 60%',
            }
        })
        // Image pin 
        imageTl.to(".about__img- img", {
        scale: 1.15,
        duration: 1,
        })

        // 6. Testimonial 3 Image Animation
        gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });
        gsap.to(".animation_image_zoom img", {
            scrollTrigger: {
                trigger: ".testimonial__area-3",
                start: "top center+=200",
                markers: false
            },
            opacity: 1,
            scale: 1,
            x: 20,
            ease: "power2.out",
            duration: 2.5,
            stagger: {
                each: 0.3
            }
        })

        // banner 1
        imageMoving(".banner-area-1", ".banner-move-img .move-img")
        // Image Moving with Cursor Function
        function imageMoving(wrapper, image_list) {
            let container = document.querySelector(wrapper)
            try {
                if (container) {
                    container.addEventListener("mousemove", (e) => {
                        var x = e.clientX
                        var y = e.clientY
                        let viewportWidth = window.innerWidth;
                        let viewportHeight = window.innerHeight;
                        let center = viewportWidth / 2
                        let centerHeight = innerHeight / 2
                        if (x > center) {
                            gsap.to(image_list, {
                                x: 15,
                                duration: 5,
                                ease: "power4.out"
                            })
                        }
                        else {
                        gsap.to(image_list, {
                            x: -15,
                            duration: 5,
                            ease: "power4.out"
                        })
                        }
                        if (y > centerHeight) {
                            gsap.to(image_list, {
                                y: 15,
                                duration: 5,
                                ease: "power4.out"
                            })
                        }
                        else {
                            gsap.to(image_list, {
                                y: -15,
                                duration: 5,
                                ease: "power4.out"
                            })
                        }
                    });
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        // banner 1 move 2
        imageMoving2(".banner-area-1", ".banner-move-img .move-img-2")
        // Image Moving with Cursor Function
        function imageMoving2(wrapper, image_list) {
            let container = document.querySelector(wrapper)
            try {
                if (container) {
                    container.addEventListener("mousemove", (e) => {
                        var x = e.clientX
                        var y = e.clientY
                        let viewportWidth = window.innerWidth;
                        let viewportHeight = window.innerHeight;
                        let center = viewportWidth / 2
                        let centerHeight = innerHeight / 2
                        if (x > center) {
                            gsap.to(image_list, {
                                x: 25,
                                duration: 10,
                                ease: "power4.out"
                            })
                        }
                        else {
                        gsap.to(image_list, {
                            x: -25,
                            duration: 10,
                            ease: "power4.out"
                        })
                        }
                        if (y > centerHeight) {
                            gsap.to(image_list, {
                                y: 25,
                                duration: 10,
                                ease: "power4.out"
                            })
                        }
                        else {
                            gsap.to(image_list, {
                                y: -25,
                                duration: 10,
                                ease: "power4.out"
                            })
                        }
                    });
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        // 69. Workflow Slider Animation 2 |  fade_bottom_5
        gsap.set(".fade_bottom_5", { y: 30, opacity: 0 });
        if (device_width < 1023) {
            const fadeArray = gsap.utils.toArray(".fade_bottom_5")
            fadeArray.forEach((item, i) => {
                let fadeTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top center+=200",
                    }
                })
                fadeTl.to(item, {
                    y: 0,
                    opacity: 1,
                    ease: "power2.out",
                    duration: 2.5,
                })
            })
        }
        else {
            gsap.to(".fade_bottom_5", {
                scrollTrigger: {
                    trigger: ".fade_bottom_5",
                    start: "top center+=300",
                    markers: false
                },
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 3,
                stagger: {
                    each: 0.2
                }
            })
        } 



        // registerPlugin gsap
        gsap.registerPlugin(ScrollTrigger);

        

    });

})(jQuery);