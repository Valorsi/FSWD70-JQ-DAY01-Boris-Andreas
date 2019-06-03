$(document).ready(function() {
	for (var i = 0; i < 7; i++) {
		var items = '<figure class="item"><figcaption class="description">' + products[i].productName + '</figcaption><img src="' + products[i].image + '"><span id="status"></span>&nbsp;<span id="price"></span></figure>';

		$('h1').after(items);
		$('#status').text('Stückzahl: ' + products[i].status);
		$('#price').text('Preis in €: ' + products[i].price);
	}

	$('.description').css('font-size', '1.5rem');
	$('span').css('width', '5rem');
});