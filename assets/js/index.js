var toggleSidebar = function() {
	if($('.side_nav').width() > 50) {
		$('.side_nav').width(50);
		$('#content').removeClass('js-sidebar-border');
		$('#content').addClass('js-sidebar-border--closed');
    // setTimeout(function(){
      $('#content').css('width', 'calc(100% - 50px)');
    // }, 1);

		$('.side_nav__list__item__heading').addClass('js-translate');
		$('.side_nav__list__item__link span').addClass('js-left');
		$('#js-nav-header').removeClass('side_nav__list__item--full');
		$('#js-nav-header').addClass('side_nav__list__item--collapsed');
		$('.side_nav__list__item__link').addClass("side_nav__list__item__link--collapsed");
		$('.side_nav__list__item__subheading').toggle();
		$('.js-admin').toggleClass('js-hide-height');
	} else {
		$('.side_nav').width(216);
		$('#content').removeClass('js-sidebar-border--closed');
		$('#content').addClass('js-sidebar-border');
    $('#content').css('width', 'calc(100% - 248px)');
		$('.side_nav__list__item__heading').removeClass('js-translate');
		$('.side_nav__list__item__link span').removeClass('js-left');
		$('#js-nav-header').removeClass('side_nav__list__item--collapsed');
		$('#js-nav-header').addClass('side_nav__list__item--full');
		$('.side_nav__list__item__link').removeClass("side_nav__list__item__link--collapsed");
		$('.side_nav__list__item__subheading').toggle();
		$('.js-admin').toggleClass('js-hide-height');
	}
}

$(document).ready(function() {
  $('.side_nav__list__item').each(function(){
    if($(this).find('.side_nav__list__item__submenu').length !== 0) {
      $(this).click(function(e){
        e.preventDefault();
        if($('.side_nav').width() === 216) {
          $(this).find('.side_nav__list__item__submenu').slideToggle();
        }
      });
    }
  });
});
  //
  // e.preventDefault();
  // if($('.side_nav').width() === 216) {
  //   $(this).find('.side_nav__list__item__submenu').slideToggle();
  // }
