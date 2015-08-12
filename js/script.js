(function () {

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
    var timer;
    $('.circle').mouseenter(function (e) {
      e.stopPropagation();
      console.log($(this)[0]);
      console.log('hover');
      var dataTabValue = $(this).data('tab');
      $(this).addClass('flipper').siblings().removeClass('flipper');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.user-stories:visible').fadeOut(function () {
          $('.user-story-' + dataTabValue).fadeIn('fast');
        });
      }, 300);
    });

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
}());

