$(document).ready(function() {

  // ANIMATE SCROLL TO INTERNAL LINKS
  $('a[href^="#"]').click(function(e){
    e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({'scrollTop': $target.offset().top}, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  // INSIGHTS ANIMATION
  $(function(){
    $("#stage").load('interactive.svg', function(response){

      $(this).addClass("svgLoaded");
      
      if(!response){
        // Error loading SVG!
        // Make absolutely sure you are running this on a web server or localhost!
      }

    });
  });

  // COMMUNITY ANIMATION
  // $('.circle').click(function () {
  //   var dataTabValue = $(this).data('tab');
  //   $(this).addClass('selected').siblings().removeClass('selected');
  //   $('.user-stories:visible').fadeOut(function () {
  //     $('.user-story-' + dataTabValue).fadeIn('fast');
  //   });
  // });

  // NAV TRANSITION AND ANIMATION
  $(window).scroll(function() {
    var navHeight = $('header').outerHeight();
    var sectionHeight = $('section').outerHeight() - navHeight;

    if ($(document).scrollTop() > sectionHeight){
      $("header").css("background-color", "#E1E1E1");
    } else {
      $("header").css("background-color", "rgba(255,255,255,0.5)");
    }

    var scrollPos = $(document).scrollTop();

    if (scrollPos > $('#benefits').offset().top - 300) {
      $('#benefits .pulseband img').addClass('is-showing');
    }

    if (scrollPos > $('#benefits').offset().top - 100) {
      $('#benefits .grid-33').addClass('is-showing');
    }

    if (scrollPos > $('#app .header').offset().top - 200) {
      $('#app .phone-and-band').addClass('is-showing');
    }


    $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 101 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("selected");
            currLink.addClass("selected");
        }
        else{
            currLink.removeClass("selected");
        }
    });
  });

  // ENSURE APPROPRIATE NAV CLASS IS APPLIED
  setHeaderClass();

});

//DETERMINE NAV CLASS ON WINDOW RESIZE
$(window).resize(function(){
  setHeaderClass();
});

//HAMBURGER MENU
$('.hamburger').click(function() {
  $(this).find('i').toggleClass('fa-align-right fa-times');
  if ($('header ul').hasClass('nav-mobile')) {
    $('header .nav-mobile').slideToggle();
  }
});

$('header li a').click(function(){
  $('.hamburger').find('i').addClass('fa-align-right').removeClass('fa-times');
  $('header .nav-mobile').slideUp();
});

//DETERMINE NAV CLASS
function setHeaderClass(){
  if($(window).width() >= 992){
    $('header ul')
      .addClass('nav-desktop')
      .removeClass('nav-mobile')
      .css('display', 'block');
  }
  else{
    $('header ul')
      .addClass('nav-mobile')
      .removeClass('nav-desktop')
      .css('display', 'none');
  }
}


/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})};}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);

  $('.circle').onClick(function () {

    var dataTabValue = $(this).data('tab');
    $(this).addClass('selected').siblings().removeClass('selected');

    $('.user-stories:visible').fadeOut(function () {
      $('.user-story-' + dataTabValue).fadeIn('fast');
    });

  });

