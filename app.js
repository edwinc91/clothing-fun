var navbar = $('.main-nav');

var mainNavTopPadding = function() {
  if (navbar.hasClass('main-nav-scrolled')) {
    $('#main-wrapper').css('padding-top', navbar.height());
  } else {
    $('#main-wrapper').css('padding-top', $('#header').height() + navbar.height());
  }
}


$(window).scroll(function() {
  if ($(this).scrollTop() > ($(window).height() * 0.05)) {
    navbar.addClass('main-nav-scrolled');
    // mainNavTopPadding();
  } else {
    navbar.removeClass('main-nav-scrolled');
    // mainNavTopPadding();
  };
});
