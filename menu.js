$(window).on('load', function() {
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.navbar').toggleClass('navbar--active');
  });
  
   //hover effect
   $(".mousehover .btn").hover(
     function () {
      $(this).closest('div').addClass("box--active");
    },
    function () {
      $(this).closest('div').removeClass("box--active");
    }
  );
 });