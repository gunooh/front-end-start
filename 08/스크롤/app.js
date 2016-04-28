$(document).ready(function(){
$(window).scroll(function()
{

  if($(this).scrollTop() > 50)
  {
    $('#image').fadeIn();
  }
  else
  {
    $('#image').fadeOut();
  }
});

$('#image').click(function()
{
  $('html,body').animate({scrollTop : 0}, 500);
  return false;
});

});
