(function() {
   $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
         $('#scrollTop').fadeIn(200);
      } else {
         $('#scrollTop').hide();
      }
   });
 
   $('#scrollTop').click(function(event) {
      event.preventDefault();
 
      $('html, body').animate({scrollTop: 0}, 700);
   });
 
})();
 
