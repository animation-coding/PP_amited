
(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function (e) {
            imJs.stickyHeader();
            imJs.wowActive();
            imJs.SwiperActivation();
            imJs.backToTopInit();
            imJs.salActive();
            imJs.splitText();
            imJs.smoothScroll(); 
            imJs.onePageNav(); 
            imJs.menuActive(); 
            imJs.counterUp(); 
            imJs.marqueActivation(); 
            imJs.parallaxJS(); 
            imJs.progressVarticle(); 
            imJs.radialProgress(); 
            imJs.vedioActivation(); 
            imJs.preloader(); 
            imJs.vedioMovement(); 
        },

        stickyHeader: function (e) {
            $(window).on().scroll(function () {
                if ($(this).scrollTop() > 150) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },
        wowActive: function () {
          new WOW().init();
        },

        SwiperActivation: function () {
            $(document).ready(function () {
                var swiper = new Swiper(".mySwipers", {
                    loop: true,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    spaceBetween: 30,

                    // effect: 'fade',
                    effect: "creative",
                    speed: 1000,

                    autoplay: {
                        delay: 2500,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    creativeEffect: {
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        },
                    },


                });
            });
            // swiper mazin portolio
            $(document).ready(function () {
                var swiper = new Swiper(".Swiper-mazin-portfolio", {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  loop: true,
                  loopFillGroupWithBlank: true,
                  autoplay: {
                    delay: 3000,
                  },
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 2.5,
                    },
                    1199: {
                      slidesPerView: 2.5,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".Swiper-mazin-testimonials", {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-paginations",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-nexts",
                    prevEl: ".swiper-button-prevs",
                  },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".Swiper-mazin-blog", {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".Swiper-mazin-service", {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },

                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".swiper-testimonials", {
                    loop: true,
                    loopedSlides: 50,
                    autoHeight: true,
                    shortSwipes: false,
                    longSwipes: false,
                    spaceBetween: 30,
                    grabCursor: true,
                    // effect: 'fade',
                    speed: 500,
                    autoplay: {
                        delay: 2000,
                    },
                });
            });
            $(document).ready(function() {
                let swiperContainer = $('.project-h3-swiper');
                if (swiperContainer.length) {
                var swiper = new Swiper(".project-h3-swiper", {
                  slidesPerView: 2.5,
                  spaceBetween: 200,
                  slidesPerGroup: 1,
                  loop: true,
                  loopFillGroupWithBlank: true,
                  centeredSlides: true,
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                      spaceBetween: 100,
                    },
                    1199: {
                      slidesPerView: 2,
                      spaceBetween: 100,
                    },
                    991: {
                      slidesPerView: 2,
                      spaceBetween: 100,
                    },
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 90,
                    },
                    575: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    }
                  },
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: true
                  },
                  navigation: {
                    nextEl: ".testimonials-slider-next-btn",
                    prevEl: ".testimonials-slider-prev-btn"
                  }
                });
              }
            });
            $(document).ready(function() {
                let swiperContainer = $('.mySwiperblog-1');
                if (swiperContainer.length) {
                var swiper = new Swiper(".mySwiperblog-1", {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  loop: true,
                  loopFillGroupWithBlank: true,
                  centeredSlides: true,
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: true
                  },
                  navigation: {
                    nextEl: ".testimonials-slider-next-btn",
                    prevEl: ".testimonials-slider-prev-btn"
                  }
                });
              }
            });
        },

        backToTopInit: function () {
            $(document).on().ready(function () {
                "use strict";

                var progressPath = document.querySelector('.progress-wrap path');
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
                var updateProgress = function () {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                }
                updateProgress();
                $(window).scroll(updateProgress);
                var offset = 50;
                var duration = 550;
                jQuery(window).on('scroll', function () {
                    if (jQuery(this).scrollTop() > offset) {
                        jQuery('.progress-wrap').addClass('active-progress');
                    } else {
                        jQuery('.progress-wrap').removeClass('active-progress');
                    }
                });
                jQuery('.progress-wrap').on('click', function (event) {
                    event.preventDefault();
                    jQuery('html, body').animate({ scrollTop: 0 }, duration);
                    return false;
                })


            });

        },

        salActive: function () {
            sal({
                threshold: 0.1,
                once: true,
            });
        },

        splitText: function () {

            // For Banner area animation

            // without scroll tigger
            var quote = $(".quote");
            if (quote.length){
              $(document).ready(function () {
                gsap.registerPlugin(SplitText);

                var tl = gsap.timeline(),
                  mySplitText = new SplitText(".quote", { type: "words,chars" }),
                  chars = mySplitText.chars; //an array of all the divs that wrap each character
                
                gsap.set(".quote", { perspective: 400 });
                
                
                tl.from(chars, {
                  duration: 1.5,
                  opacity: 0,
                  scale: 0,
                  y: 80,
                  rotationX: 180,
                  transformOrigin: "0% 50% -50",
                  ease: "back",
                  stagger: 0.07
                });
                
            });
          }

          // without scroll tigger
          var quote_2 = $(".quote-2");
          if (quote_2.length){
            $(document).ready(function () {
              gsap.registerPlugin(SplitText);

              var tl = gsap.timeline(),
                mySplitText = new SplitText(".quote-2", { type: "words,chars" }),
                chars = mySplitText.chars; //an array of all the divs that wrap each character
              
              gsap.set(".quote-2", { perspective: 400 });
              
              console.log(chars);
              
              tl.from(chars, {
                duration: .8,
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50",
                ease: "back",
                stagger: 0.01
              });
            });
          }


          // scroll trigger for body
          var split_me =  $('.split-me');
          if(split_me.length){ 
            $(document).ready(function () {
                let p = gsap.utils.toArray(".split-me");

                gsap.set(p, { autoAlpha: 1 });

                p.forEach((p) => {
                let splitHide = new SplitText(p, {
                    type: "words",
                    wordsClass: "hide"
                });

                let split = new SplitText(p, {
                    type: "words,lines",
                    linesClass: "lines",
                    wordsClass: "words"
                });

                gsap.from(split.words, {
                    duration: 1.2,
                    yPercent: 100,
                    ease: "power3.out",
                    stagger: 0.02,
                    scrollTrigger: {
                    trigger: p
                    }
                });
                });

            });
          }

          // scroll trigger for body
          $(document).ready(function () {
              let splitTextLines = gsap.utils.toArray(".text-anim p, .text-anim");

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
              tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
              });

          });

        },

        smoothScroll: function (e) {
            $(document).on('click', '.onepage .main-nav a[href^="#"]', function (event) {
              event.preventDefault();
          
              $('html, body').animate({
                  scrollTop: $($.attr(this, 'href')).offset().top
              }, 1500);
            });

            $(document).on('click', '.smooth-scroll-1', function (event) {
              event.preventDefault();
          
              $('html, body').animate({
                  scrollTop: $($.attr(this, 'href')).offset().top
              }, 1500);
            });
        },

        onePageNav: function (e) {
            $(document).ready(function() {
                var nav = $('#nav');
                if(nav.length){
                    $('#nav').onePageNav();
                }
            });
        },

        menuActive:function(){
            // mobile menu menu area start
            $(document).on('click', '#menu-btn', function () {
                $("#side-bar").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '.close-icon-menu', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '.onepage .mainmenu li a', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#side-bar .mainmenu li a', function () {
                $("#side-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            // menu area End

        },

        counterUp: function (){
            $(document).ready(function(){
              $('.counter').counterUp({
                delay: 10,
                time: 1000
              });
              $('.counter').addClass('animated fadeInDownBig');
              $('h3').addClass('animated fadeIn');
            });
        },

        marqueActivation: function (e) {
            if('.marquee_text'.length){
              $('.marquee_text').marquee({
                direction: 'left',
                duration: 50000,
                gap: 50,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true,
              });
            }
        },

        parallaxJS: function (e) {
            // Parallax Stuff
          if ($(".stuff").length) {
              var stuff = $('.stuff').get(0);
              var parallaxInstance = new Parallax(stuff);
          }
          if ($(".stuff2").length) {
              var stuff = $('.stuff2').get(0);
              var parallaxInstance = new Parallax(stuff);
          }
          if ($(".stuff3").length) {
              var stuff = $('.stuff3').get(0);
              var parallaxInstance = new Parallax(stuff);
          }
          if ($(".stuff4").length) {
              var stuff = $('.stuff4').get(0);
              var parallaxInstance = new Parallax(stuff);
          }
        },

        progressVarticle: function (){
          $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
              var bars = document.querySelectorAll('.meter > span');
              console.clear();
              setInterval(function(){
                bars.forEach(function(bar){
                  var getWidth = parseFloat(bar.dataset.progress);
                  for(var i = 0; i < getWidth; i++) {
                    bar.style.width = i + '%';
                  }
                });
              }, 100);
            }
          })
        },

        radialProgress: function () {
          function radial_animate() { 
            $('svg.radial-progress').each(function( index, value ) { 
  
                $(this).find($('circle.bar--animated')).removeAttr( 'style' );    
                // Get element in Veiw port
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                
                if(elementBottom > viewportTop && elementTop < viewportBottom) {
                    var percent = $(value).data('countervalue');
                    var radius = $(this).find($('circle.bar--animated')).attr('r');
                    var circumference = 2 * Math.PI * radius;
                    var strokeDashOffset = circumference - ((percent * circumference) / 100);
                    $(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
                }
            });
        }
        // To check If it is in Viewport 
        var $window = $(window);
        function check_if_in_view() {    
            $('.countervalue').each(function(){
                if ($(this).hasClass('start')){
                    var elementTop = $(this).offset().top;
                    var elementBottom = elementTop + $(this).outerHeight();
  
                    var viewportTop = $(window).scrollTop();
                    var viewportBottom = viewportTop + $(window).height();
  
                    if (elementBottom > viewportTop && elementTop < viewportBottom) {
                              $(this).removeClass('start');
                              $('.countervalue').text();
                              var myNumbers = $(this).text();
                              if (myNumbers == Math.floor(myNumbers)) {
                                  $(this).animate({
                                      Counter: $(this).text()
                                  }, {
                                      duration: 2800,
                                      easing: 'swing',
                                      step: function(now) {
                                          $(this).text(Math.ceil(now)  + '%');                                
                                      }
                                  });
                              } else {
                                  $(this).animate({
                                      Counter: $(this).text()
                                  }, {
                                      duration: 2800,
                                      easing: 'swing',
                                      step: function(now) {                                
                                          $(this).text(now.toFixed(2)  + '$'); 
                                      }
                                  });
                              }
  
                              radial_animate();
                          }
                }
            });
        }
  
        $window.on('scroll', check_if_in_view);
        $window.on('load', check_if_in_view);
  
        },
        

        vedioActivation: function (e) {
          $('#play-video, .play-video').on('click', function (e) {
              e.preventDefault();
              $('#video-overlay, .video-overlay').addClass('open');
              $("#video-overlay, .video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
          });

          $('.video-overlay, .video-overlay-close').on('click', function (e) {
              e.preventDefault();
              close_video();
          });

          $(document).keyup(function (e) {
              if (e.keyCode === 27) {
                  close_video();
              }
          });

          function close_video() {
              $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };
        },

        preloader:function(){
          $(window).on('load', function() {
            // Animate loader off screen
            const preloader = $(".preloader");
            preloader.addClass('loaded');                    
            preloader.delay(600).fadeOut();
          
          }); 
        },
        vedioMovement:function(){
           /////////////////////////////////////////////////////
          const all_btns = gsap.utils.toArray(".vedio-icone");
          if (all_btns.length > 0) {
            var all_btn = gsap.utils.toArray(".vedio-icone");
          }
          else {
            var all_btn = gsap.utils.toArray("#btn_wrapper");
          }
          const all_btn_cirlce = gsap.utils.toArray(".video-play-button");
          all_btn.forEach((btn, i) => {
            $(btn).mousemove(function (e) {
              callParallax(e);
            });
            function callParallax(e) {
              parallaxIt(e, all_btn_cirlce[i], 80);
            }

            function parallaxIt(e, target, movement) {
              var $this = $(btn);
              var relX = e.pageX - $this.offset().left;
              var relY = e.pageY - $this.offset().top;

              gsap.to(target, 0.5, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
              });
            }
            $(btn).mouseleave(function (e) {
              gsap.to(all_btn_cirlce[i], 0.5, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
              });
            });
          });
          /////////////////////////////////////////////////////
        },



    }
    


 imJs.m();

})(jQuery, window)












