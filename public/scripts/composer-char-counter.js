$(document).ready(function() {

  const $input = $('textarea');
  $input.on('input', function() {

    const maxCharacters = 140;
    const inputLength = $(this).val().length;
    
    const counter = $(this).parent('form').find('.counter'); 
    const remainingCharacters = maxCharacters - inputLength;

    if (remainingCharacters > 0) {
      counter.val(remainingCharacters).css('color', '#545149');
    } else {
      counter.val(remainingCharacters).css('color', 'red');
    }
  });
});