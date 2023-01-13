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
                    01. Services Slider JS  
======================================================= */
$('.services-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1500,
  arrows: false,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

/* ======================================================
                  02. Packages Slider JS 
  ======================================================= */
  $('.packages-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    arrows: false,
    dots: true,
    infinite: true
  });



/* ======================================================= 
              05. Stop Slider Item On Hover JS 
  ======================================================== */
$(".services-slider, .packages-slider").hover(
  function () {
    this.swiper.autoplay.stop();
    console.log("Slider Stop");
  },
  function () {
    this.swiper.autoplay.start();
    console.log("Slider Start");
  }
);

