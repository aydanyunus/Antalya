// live chat 

$('.live__chat__btns .chat__btn').click(function(e){
    e.preventDefault();
    $('.live__chat__btns li').css('display', 'block')
  })
  $('.live__chat__btns .close__btn').click(function(e){
    e.preventDefault();
    $('.live__chat__btns li').css('display', 'none')
    $('.live__chat__btns .chat__btn').css('display', 'block')
  })