(function(){
 "use strict";
 //nav

$('a.closed').click(function(e) {
	e.preventDefault();
	$('body').toggleClass('body-push');
	$('#boxWrapp').toggleClass('box-push');
	$('.main-header').toggleClass('head-push');
});
$('.navToggle').click(function(){
	$('body').toggleClass('body-push');
	$('#boxWrapp').toggleClass('box-push');
	$('.main-header').toggleClass('head-push');
	return false;
});

$('#myNav ul').onePageNav({
scrollSpeed: 1000,
scrollThreshold: 0.25
});
 $('a.about-more').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
 //=========== jquery flexslider ====================
	$('#testiSlide').flexslider({
    animation: "slide"
	});	
 //=========== jquery invew ====================
$('.hidding').bind('inview', function(event, visible) {
var effect = $(this).attr('data-animated');
$(this).addClass(effect);
$(this).addClass('visible');
});

 //function
	HeadHeight();
	folioHOver();

//navScroll();
})();
// ===========================================

$(window).resize(function(){
HeadHeight();
});
function HeadHeight(){
var wHeight = $(window).height();
$('.main-header').css('height', wHeight);
}
function folioHOver(){
var animIn = $('.onHover').attr('data-animatedin');
var animInCap = $('.onHoverCap').attr('data-animatedin');
var animOut = $('.onHover').attr('data-animatedout');
var animOutCap = $('.onHoverCap').attr('data-animatedout');
 $('.caption, .main-cap').fadeOut();
$('.hcaption').hover(function(){

	$(this).find('.myToggle').fadeIn();
	$(this).find('.attr-icon, .attr-cap').fadeIn();
    $(this).find('.caption').removeClass(animOut).addClass(animIn);
    $(this).find('.main-cap').removeClass(animOutCap).addClass(animInCap);
    //$(this).find('.right').removeClass('bounceOutRight').addClass('bounceInRight');
    $(this).find('.caption, .main-cap').fadeIn();
    

}, function(){
$(this).find('.myToggle').fadeOut();
//$(this).find('.attr-icon').fadeOut();
    $(this).find('.caption').removeClass(animIn).addClass(animOut);
    $(this).find('.main-cap').removeClass(animInCap).addClass(animOutCap);
 //$(this).find('.right').removeClass('bounceInRight').addClass('bounceOutRight');
    $(this).find('.caption, .main-cap').fadeOut();
});
}

/* function navScroll(){
 $(window).scroll(function() {

var top = $(window).scrollTop();
var boxCWidth = $(window).width();
if (top > 0) {


$('.main-nav .btn-group button.btn').css({'color':'#f57365'});

}else{

    $('.main-nav .btn-group button.btn').css({'color':'#fff'});
}

});

} */
 