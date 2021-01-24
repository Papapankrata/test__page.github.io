$('.multiple-items').slick({
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1
});

$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
$(window).scroll(function() {
  if ($(this).scrollTop()>200) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});   
    