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

// If there is an actual sale, then this is the code to get a new link on click
$('.sale-box-top').on('click', function() {
  var saleLink = $('.sale-box-bottom').attr('href');
  window.location.replace(saleLink);
})

$('.topleft-bottom').on('click', function() {
  var topLeftBottomLink = $('.topleft-bottom-link').attr('href');
  window.location.replace(topLeftBottomLink);
})

$('.topright-container').on('click', function() {
  var topRightLink = $('.topright-link').attr('href');
  window.location.replace(topRightLink);
})
