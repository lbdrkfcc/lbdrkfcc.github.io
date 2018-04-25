$(function(){
  function game(){
    console.log('Next');
  }

  function setFocus(){
    let inputVal = $('.js-input').val();
    inputVal = onlyNum(inputVal);
    $('.js-input').val(inputVal)
    $('.js-input').focus();
  }
  setFocus();

  $(document).on('mouseup',function(){
    setFocus();
  });
  $(document).on('keyup',function(e){
    let key = e.keyCode;
    if(key == 13){
      game();
    }
    setFocus();
  });
  $(document).on('click','.js-next',function(){
    game();
  });

  function onlyNum(str){
    return str = str.replace(/\D+/g,"");
  }


  $(document).on('click','.js-num',function(){
    let data = $(this).data('num');
    let inputVal = $('.js-input').val();
    inputVal += data;
    $('.js-input').val(inputVal);
    setFocus();
  });
  $(document).on('click','.js-erase',function(){
    let inputVal = $('.js-input').val();
    inputVal = inputVal.slice(0,-1);
    $('.js-input').val(inputVal);
    setFocus();
  });
});
