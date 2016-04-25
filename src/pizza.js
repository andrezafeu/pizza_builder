$(document).on("ready", function () {

	$(".sauce").removeClass('sauce-white');
	$(".crust").removeClass('crust-gluten-free');
	$(".btn-sauce").toggleClass("active");
	$(".btn-crust").toggleClass("active");

	$(".js-whiteSauce").hide();
	$(".js-glutenFree").hide();

	$(".btn-pepperonni").on("click", function () {
		console.log('pepperonni');
		$(".pep").toggle();
		$(".btn-pepperonni").toggleClass("active");
		$(".js-pepperonni").toggle();
	});

	$(".btn-mushrooms").on("click", function () {
		$(".cap, .stem").toggle();
		$(".btn-mushrooms").toggleClass("active");
		$(".js-mushrooms").toggle();
	});

	$(".btn-green-peppers").on("click", function () {
		$(".green-pepper").toggle();
		$(".btn-green-peppers").toggleClass("active");
		$(".js-greenPeppers").toggle();
	})

	$(".btn-sauce").on("click", function () {
		$(".sauce").toggleClass("sauce-white");
		$(".btn-sauce").toggleClass("active");
		$(".js-whiteSauce").toggle();
	});

	$(".btn-crust").on("click", function () {
		$(".crust").toggleClass('crust-gluten-free');
		$(".btn-crust").toggleClass("active");
		$(".js-glutenFree").toggle();
	});

	$(".js-update-price").on("click", function () {
		console.log("update price")
		
		var pizzaPrice = 10;

		var prices = {
			".btn-pepperonni": 1,
			".btn-green-peppers": 1,
			".btn-mushrooms": 1,
			".btn-sauce": 3,
			".btn-crust": 5
		}

		for (selector in prices) {
			thePrice = prices[selector]

			if ($(selector).hasClass("active")) {
				pizzaPrice += thePrice;
			}
		}

		$ ("strong").text(pizzaPrice);
	});
	
});
