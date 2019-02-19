(function ($) {
    //navigation smooth scrolling

       $('.navbar-nav li a').on('click', function(event) {

           if (this.hash !== "") {
               event.preventDefault();

               // Store hash
               var hash = this.hash;

               $('html, body').animate({
                   scrollTop: $(hash).offset().top
               }, 1500,'easeInOutQuart', function () {


                   window.location.hash = hash;
               });
           }
       });

    // Instantiate MixItUp:
    $('#images').mixItUp();

    new WOW().init();

    $('.cta-1 p i').hover(function(e){
      $('.building').slideDown(1000);
    },function(){
      $('.building').slideUp(1000);
    })
    $('.cta-1 a').hover(function() {
      $('.cta-1 a').text("طراحی سایت شما با ما");
    }, function() {
      $('.cta-1 a').text("بیشتر");
    });
    $('.consub').mouseenter(function(){
      $('.navsub').slideDown(1500);
    })
    $('.consub').mouseout(function(){
      $('.navsub').slideUp(1500);
    })

    
  
})(jQuery)
$(document).ready(function($){
  $(window).scroll(function(){
    if($(this).scrollTop() > 550){
      $("#smooth").fadeIn();
    }else{
      $("#smooth").fadeOut();
    }
  })
  $("#smooth").click(function(){
    $("html,body").animate({scrollTop : 0} , 1000);
    return false;
  })
})
