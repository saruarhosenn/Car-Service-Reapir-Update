/*
======================================================================/
============ JAVASCRIPT INDEX ============

01. Sticky Menu JS   

======================================================================/
*/

(function ($) {
  "use strict";
/* ==============================================
                01. Sticky Menu JS 
================================================= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 200) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });
})(jQuery);
