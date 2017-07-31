var $input = $('#color-field');
var $button = $('#set-color');
var $brush = $('.brush');

$button.on('click', function(event) {
  event.preventDefault();
  $brush.css({ 'background-color': $input.val() });
})


var $body = $('body');
for (var i = 0; i < 20; i++) {
  var newItem = $('<div>');
  newItem.addClass('square');
  $body.append(newItem);
};
