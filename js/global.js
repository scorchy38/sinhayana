
$(function () {
  "use strict";

  /*================*/
  /* 01 - VARIABLES */
  /*================*/
  var swipers = [],
    winW,
    winH,
    _isresponsive,
    xsPoint = 767,
    smPoint = 991,
    mdPoint = 1199;

  /*========================*/
  /* 02 - page calculations */
  /*========================*/
  function pageCalculations() {
    winW = $(window).width();
    winH = $(window).height();
    if ($(".open-icon").is(":visible")) _isresponsive = true;
    else _isresponsive = false;
    $(".block").css({ "padding-bottom": $("footer").height() });
  }

  /*=================================*/
  /* 03 - function on document ready */
  /*=================================*/
  $(".simple-input input, .simple-input textarea").each(function () {
    if ($(this).val() !== "") $(this).parent().addClass("active");
  });
  pageCalculations();

  /*============================*/
  /* 04 - function on page load */
  /*============================*/
  $(window).load(function () {
    $("#loader-wrapper").fadeOut(1500);
  });

  /*==============================*/
  /* 05 - function on page resize */
  /*==============================*/
  function resizeCall() {
    pageCalculations();
  }
  $(window).resize(function () {
    resizeCall();
  });
  window.addEventListener(
    "orientationchange",
    function () {
      resizeCall();
    },
    false
  );

  /*=====================*/
  /* 06 - CLICKS, HOVERS */
  /*=====================*/

  //material design fields
  $(".simple-input input, .simple-input textarea").on("focus", function () {
    $(this).parent().addClass("active");
  });

  $(".simple-input input, .simple-input textarea").on("blur", function () {
    if ($(this).val() === "") $(this).parent().removeClass("active");
  });

  //Parallax
  var ww = $(window).width();
  $(window).on("mousemove", function (e) {
    var ww = $(window).width();
    if (ww > 992) {
      var offsetX = 0.5 - e.pageX / ww;
      $(".parallax").each(function (i, el) {
        var offset = parseInt($(el).data("offset"), 10);
        var translate =
          "translate3d(" +
          Math.round(offsetX * offset) +
          "px," +
          Math.round(0) +
          "px, 0px)";
        $(el).css({
          "-webkit-transform": translate,
          transform: translate,
          "moz-transform": translate,
        });
      });
    }
  });
});
