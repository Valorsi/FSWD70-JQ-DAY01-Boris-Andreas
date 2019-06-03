$( document ).ready(function() {
    /*$("form").submit(function(e) {
		e.preventDefault();
	});*/

    // Change the links to "www.codefactory.wien"
	$('a').attr('href', 'www.codefactory.wien');

	// Change the text color to red for the <code> tags
	$('code').css('color', '#d00');

	// Change the background color to "#2a7b90" for all <li> elements
	// which are direct child of an <ol> element
	$('ol > li').css('background-color', '#2a7b90');

	// Within the form, change the placeholder text to "Express your opinion"
	$('textarea').attr('placeholder', 'Express your opinion');

	// Replace all images on the page with this one:
	// "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png"
	$('img').attr('src', 'http://blog.covingtonaircraft.com/wp-content/uploads/2018/03/3.9.2018PilatusPC12-768x768.jpg');

	// Change the background color to orange for all blockquote elements and the font-style to italic
	$('blockquote').css({
		'background-color': 'orange',
		'font-style': 'italic'
	});

	// At the top of the page, change the logo color "Simple" to black and "Blog" to white
	$('#logo').css('color', '#000');
	$('#logo > .gray').css('color', '#fff');

	//  Remove the "Oct 01, 2006" Date from the page
	$('span.date').remove();

	// Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"
	$('.sidemenu:first-of-type').append('<li><a href="#">New Templates</a></li>');
	$('.sidemenu:first-of-type').append('<li><a href="#">Order Template</a></li>');
	$('.sidemenu:first-of-type').append('<li><a href="#">Contact Us</a></li>');

	// Change the sentence
	$('#sidebar p:first').text('When someone says: "I want a programming language in which I need only to say what I wish, and done", give him a lollipop.');

});
	