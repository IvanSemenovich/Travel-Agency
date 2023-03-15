$(function () {
   
    $('.testimonials__slider').slick({
        dots: true,
        arrows:false,
        fade:false,
        
        autoplay:true,
        vertical:true,
    });
    
$('.slick-prev').click(function(){
    $('.testimonials__slider').slick('slickPrev');
  })
  
  $('.slick-next').click(function(){
    $('.testimonials__slider').slick('slickNext');
  })
})