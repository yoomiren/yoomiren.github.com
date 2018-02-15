$(function() {
  $('.box').on('click touchstart', function(e) {
    event.stopPropagation();
    $('.box').not(this).removeClass('touched');
    $(this).toggleClass('touched').removeClass('hovered');
  });
  $('.box').on('mouseenter', function(e) {
    $(this).addClass('hovered');
  });
  $('.box').on('mouseleave', function(e) {
      $(this).removeClass('hovered');
  });
});

$(document).on("click touchstart touchend", function () {
    $('.box').removeClass('touched');
	});