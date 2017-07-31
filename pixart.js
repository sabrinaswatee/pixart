var $input = $('#color-field');
var $button = $('#set-color');
var $brush = $('.brush');
var $body = $('body');

// commit 1 and 2
$button.on('click', function(event) {
  event.preventDefault();
  $brush.css({ 'background-color': $input.val() });
});

// commit 3
for (var i = 0; i < 20; i++) {
  var newItem = $('<div>');
  newItem.addClass('square');
  $body.append(newItem);
};

//commit 4
$body.on('click', function(event) {
  if (event.target.className == 'square') {
    event.target.style.backgroundColor = 'green';
  };
});

//commit 5
$body.on('click', function(event) {
  if (event.target.className == 'square') {
    event.target.style.backgroundColor = $input.val();
  };
});
