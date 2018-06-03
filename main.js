$(document).ready(function(){
  squares = 10

  $('.grid-item').click(function(){
  if (squares > 0){
    $(this).toggleClass('clicked');
    squares--
    $('#howmanysquares').text('You can buy '+squares+' more squares.')
  }
});
})