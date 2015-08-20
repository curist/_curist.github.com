function bindScroll() {
  var $window = $(window);
  var $body = $('body');
  var $bar = $('.skills-bar');
  var barOffsetTop = $bar.offset().top;

  $window.on('scroll', onScroll);
  $window.on('resize', resize);


  function onScroll() {
    if(barOffsetTop < $window.scrollTop()) {
      $body.addClass("has-docked-nav");
    } else {
      $body.removeClass("has-docked-nav");
    }
  }

  function resize() {
    $body.removeClass("has-docked-nav");
    barOffsetTop = $bar.offset().top;
    onScroll();
  }
}

$(function bindIt() {
    if($('.skills-bar').length > 0) {
      return bindScroll();
    }
    setTimeout(bindIt, 80);
})

