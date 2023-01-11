/*
======================================================================/
============ JAVASCRIPT INDEX ============

01. Projects Slider JS 
02. Mechanic Slider JS 
03. Testimonial Slider JS 
04. Home 2 Car Service Repair Slider JS  
05. Stop Slider Item On Hover JS

======================================================================/
*/

/* ====================================================
                    01. Projects Slider JS  
======================================================= */
var swiper = new Swiper(".projects-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* ======================================================
                  02. Mechanic Slider JS 
  ======================================================= */
var swiper = new Swiper(".mechanic-slider", {
  slidesPerView: 1,
  spaceBetween: 34,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* ======================================================
                 03. Testimonial Slider JS
  ======================================================= */
var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* ======================================================
            04. Home 2 Car Service Repair Slider JS  
  ======================================================= */
var swiper = new Swiper(".car-service-repair-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 2500,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* ======================================================= 
              05. Stop Slider Item On Hover JS 
  ======================================================== */
$(".projects-slider").hover(
  function () {
    this.swiper.autoplay.stop();
    console.log("Slider Stop");
  },
  function () {
    this.swiper.autoplay.start();
    console.log("Slider Start");
  }
);
$(".mechanic-slider").hover(
  function () {
    this.swiper.autoplay.stop();
    console.log("Slider Stop");
  },
  function () {
    this.swiper.autoplay.start();
    console.log("Slider Start");
  }
);
$(".testimonial-slider").hover(
  function () {
    this.swiper.autoplay.stop();
    console.log("Slider Stop");
  },
  function () {
    this.swiper.autoplay.start();
    console.log("Slider Start");
  }
);
$(".car-service-repair-slider").hover(
  function () {
    this.swiper.autoplay.stop();
    console.log("Slider Stop");
  },
  function () {
    this.swiper.autoplay.start();
    console.log("Slider Start");
  }
);
