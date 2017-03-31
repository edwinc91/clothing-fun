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

$('.middle-left-wrapper').on('click', function() {
  var secondWrapperLeftLink = $('.second-wrapper-left-link').attr('href');
  window.location.replace(secondWrapperLeftLink);
})

$('.middle-middle-wrapper').on('click', function() {
  var secondWrapperMiddleLink = $('.second-wrapper-middle-link').attr('href');
  window.location.replace(secondWrapperMiddleLink);
})

$('.middle-right-wrapper').on('click', function() {
  var secondWrapperRightLink = $('.second-wrapper-right-link').attr('href');
  window.location.replace(secondWrapperRightLink);
})

$('.third-left-container').on('click', function() {
  var thirdContainerLeftLink = $('.third-container-left-link').attr('href');
  window.location.replace(thirdContainerLeftLink);
})

$('.third-right-container').on('click', function() {
  var thirdContainerRightLink = $('.third-container-right-link').attr('href');
  window.location.replace(thirdContainerRightLink);
})
