$(document).on("ready", function () {

	$(".sauce").removeClass('sauce-white');
	$(".crust").removeClass('crust-gluten-free');


	$(".btn-pepperonni").on("click", function () {
		console.log('pepperonni');
		$(".pep").toggle();
	});

	$(".btn-mushrooms").on("click", function () {
		$(".cap, .stem").toggle();
	});

	$(".btn-green-peppers").on("click", function () {
		$(".green-pepper").toggle();
	})

	$(".btn-sauce").on("click", function () {
		$(".sauce").toggleClass("sauce-white");
	});

	$(".btn-crust").on("click", function () {
		$(".crust").toggleClass('crust-gluten-free');

	});

});
