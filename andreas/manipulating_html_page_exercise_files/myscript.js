$("form").submit(function(e) {

	e.preventDefault();
	

});

// remove the "form"
//$( "form" ).remove();

// add 5 DIVs in "article"-tag
$('article').prepend('<div></div>');
$('article').prepend('<div></div>');
$('article').prepend('<div></div>');
$('article').prepend('<div></div>');
$('article').prepend('<div></div>');

// Within the input field change the value to "Search for..."
$('#myform > input').val('Search for...');

// Add a class name of "box" to each new DIV
$('div').addClass('box');

// Change the link to "www.codefactory.wien"
$('a').attr('href', 'www.codefactory.wien');