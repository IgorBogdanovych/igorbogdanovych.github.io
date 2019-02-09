var socialMedia = {
  facebook : 'http://facebook.com/profile.php?id=100004690685995',
  youtube: 'http://youtube.com/watch?v=tvEQQFOq4ls',
  twitter: 'https://twitter.com/?lang=uk',
  linkedin: 'https://www.linkedin.com/'
};

var socialList = function() {
  var output = '<ul>',
  myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output += '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output += '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);


$(function(){
 var topPos = $('.floating').offset().top;
 $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > topPos) $('.floating').addClass('fixed'); 
  else $('.floating').removeClass('fixed');
 });
});

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);
