$(document).ready(function() {
	for (var i = 0; i < 7; i++) {
		var items = '<figure class="item"><figcaption class="description">' + products[i].productName + '</figcaption><img src="' + products[i].image + '"><p id="status"></p><p id="price"></p></figure>';

		$('h1').after(items);
		$('#status').text('Stückzahl: ' + products[i].status);
		$('#price').text('Preis in €: ' + products[i].price);

		console.log(products[i].status);
	}

	$('.item').css({
		'margin-top': '2rem',
		'padding': '0.75rem'
	});

	$('img').css({
		'width': '17rem',
		'height': 'auto'
	});

	$('.description').css('font-size', '1.5rem');


	if (parseFloat(products.status) < 3) {
		$('.item').css({
			'border': '3px solid #e00'
		});


	} else {
		$('.item').css({
			'border': '3px solid green'
		});

	}
	
});