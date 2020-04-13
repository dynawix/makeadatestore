$(document).ready(function(){
  "use strict";
  
/* ===================================
 client side slider
 ===================================== */

  $('.client-slider').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    items:2.5,
    dots:false,
    margin:10,
    stagePadding: 0
  });

  $('.offer-slider').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    items:1.1,
    dots:false,
    margin:10,
    stagePadding: 0
  });

  $('.beauty-slider').owlCarousel({
    rtl:true,
    loop:true,
    nav:false,
    items:1,
    dots:true
  });

 /*==============================================================
  Fullscreen Height
  ==============================================================*/
  function resizefullscreen() {
    var minheight = $(window).height();
    $(".fullscreen").css('min-height', minheight);
  }
  resizefullscreen();
});


$(document).ready(function(){
    $('.oper-acc').on('click', function (e) {
        if($('.top-search-option, .top-search').hasClass('active')){
            $('.top-search-option, .top-search').removeClass('active');
        }else{
            $('.top-search-option, .top-search').addClass('active');
        }
    });
    $('.navbar-toggler').on('click', function (e) {
        if($('.side-menu').hasClass('active')){
            $('.side-menu').removeClass('active');
            $(this).removeClass('active');
        }else{
            $('.side-menu').addClass('active');
            $(this).addClass('active');
        }
    });
    $('.nav-item .home-link').on('click', function (e) {
        if($('.filter-seacrh .home-link').hasClass('active')){
            $('.filter-seacrh .home-link').removeClass('active');
        }else{
            $('.filter-seacrh .fl-ser-icon').removeClass('active');
            $('.filter-seacrh .reservation-top-title').removeClass('active');
            $('.filter-seacrh .arithmetic-top-title').removeClass('active');
            $('.filter-seacrh .fl-ser-icon, .filter-seacrh .home-link').addClass('active');
        }
    });
    $('.nav-item .reser-link').on('click', function (e) {
        if($('.filter-seacrh .reservation-top-title').hasClass('active')){
            $('.filter-seacrh .reservation-top-title').removeClass('active');
        }else{
            $('.filter-seacrh .fl-ser-icon').removeClass('active');
            $('.filter-seacrh .arithmetic-top-title').removeClass('active');
            $('.filter-seacrh .home-link').removeClass('active');
            $('.filter-seacrh .reservation-top-title').addClass('active');
        }
    });
    $('.nav-item .arithmetic-link').on('click', function (e) {
        if($('.arithmetic-top-title').hasClass('active')){
            $('.arithmetic-top-title').removeClass('active');
        }else{
            $('.filter-seacrh .fl-ser-icon').removeClass('active');
            $('.filter-seacrh .reservation-top-title').removeClass('active');
            $('.filter-seacrh .home-link').removeClass('active');
            $('.arithmetic-top-title').addClass('active');
        }
    });

    // client bottom tab
    $('.nav-item .client-arithmetic').on('click', function (e) {
        if($('.filter-seacrh .setting-top-title').hasClass('active')){
            $('.filter-seacrh .setting-top-title').removeClass('active');
        }else{
            $('.filter-seacrh .setting-top-title').removeClass('active');
            $('.filter-seacrh .client-reserv-top-title').removeClass('active');
            $('.filter-seacrh .setting-time-top-title').removeClass('active');
            $('.filter-seacrh .add-offer-title').removeClass('active');
            $('.filter-seacrh .client-arithmetic').addClass('active');
        }
    });
    $('.nav-item .setting-link').on('click', function (e) {
        if($('.filter-seacrh .setting-top-title').hasClass('active')){
            $('.filter-seacrh .setting-top-title').removeClass('active');
        }else{
            $('.filter-seacrh .fl-ser-icon').removeClass('active');
            $('.filter-seacrh .arithmetic-top-title').removeClass('active');
            $('.filter-seacrh .client-reserv-top-title').removeClass('active');
            $('.filter-seacrh .setting-top-title').addClass('active');
        }
    });
    $('.nav-item .setting-time-link').on('click', function (e) {
        if($('.filter-seacrh .setting-time-top-title').hasClass('active')){
            $('.filter-seacrh .setting-top-title').removeClass('active');
        }else{
            $('.filter-seacrh .setting-time-top-title').removeClass('active');
            $('.filter-seacrh .client-arithmetic-top-title').removeClass('active');
            $('.filter-seacrh .client-reserv-top-title').removeClass('active');
            $('.filter-seacrh .setting-time-top-title').addClass('active');
        }
    });
    $('.nav-item .client-reservation-link').on('click', function (e) {
        if($('.filter-seacrh .setting-time-top-title').hasClass('active')){
            $('.filter-seacrh .setting-top-title').removeClass('active');
        }else{
            $('.filter-seacrh .setting-time-top-title').removeClass('active');
            $('.filter-seacrh .client-arithmetic-top-title').removeClass('active');
            $('.filter-seacrh .setting-top-title').removeClass('active');
            $('.filter-seacrh .add-offer-title').removeClass('active');
            $('.filter-seacrh .client-reserv-top-title').addClass('active');
        }
    });
    $('.add-of-setting-link').on('click', function (e) {
        if($('.add-offer-title').hasClass('active')){
            $('.client-reserv-top-title').removeClass('active');
        }else{
            $('.add-offer-title').addClass('active');
        }
    });
});

