$(document).ready(function() {
  // Mobile menu trigger script
  $(document).on("click", ".menu-trigger", function() {
    $(this).toggleClass('active');
    $(".mobile-menu").toggleClass('visible');
});
  // Smoothscroll script
  $(document).on("click", ".nav-link", function() {
    var dis = $(this),
        disTarget = dis.data('target'),
        ScrollTo = $(disTarget).offset().top;

    dis.addClass('active').siblings('.nav-link').removeClass('active');
    $('html, body').animate({ scrollTop: ScrollTo });
});
  // contact form script
  $(document).on("blur", ".form-wrap input", function() {
    var tmpval = $(this).val();
    if (tmpval == '') {
        $(this).addClass('empty').removeClass('not-empty');
    } else {
        $(this).addClass('not-empty').removeClass('empty');
    }
});
  // testimonial slider
  $(document).on("init", ".testimonial-slider", function(){
    // Code inside this block will run after the slider is initialized
}).bxSlider({
    auto: true,
    mode: 'fade',
    infiniteLoop: true,
    controls: false
});
  // Changing the defaults 
  window.sr = ScrollReveal();
  // Customizing a reveal set 
  sr.reveal('.each-service', { origin: 'bottom', distance: '100px', duration: 1000, delay: 0, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
  // sript for fixed header on scroll
  $(document).on("scroll", function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 60) {
        $("#Header").addClass("header-fixed");
    } else {
        $("#Header").removeClass("header-fixed");
    }
});
});