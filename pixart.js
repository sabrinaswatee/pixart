var $input = $('#color-field');
var $button = $('#set-color');
var $brush = $('.brush');

$button.on('click', function(event) {
  event.preventDefault();
  $brush.css({ 'background-color': $input.val() });
})
