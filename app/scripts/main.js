$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".parallax-zoom-blur img").css({
    width: (80 + scroll/5)  + "%",
    top: -(scroll/10)  + "%",
    "-webkit-filter": "blur(" + (scroll/80) + "px)",
    filter: "blur(" + (scroll/80) + "px)"
  });
});
