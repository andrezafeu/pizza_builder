$(document).on("ready", function () {

	$(".sauce").removeClass('sauce-white');
	$(".crust").removeClass('crust-gluten-free');
	$(".btn-sauce").toggleClass("active");
	$(".btn-crust").toggleClass("active");


	$(".btn-pepperonni").on("click", function () {
		console.log('pepperonni');
		$(".pep").toggle();
		$(".btn-pepperonni").toggleClass("active");
	});

	$(".btn-mushrooms").on("click", function () {
		$(".cap, .stem").toggle();
		$(".btn-mushrooms").toggleClass("active");
	});

	$(".btn-green-peppers").on("click", function () {
		$(".green-pepper").toggle();
		$(".btn-green-peppers").toggleClass("active");
	})

	$(".btn-sauce").on("click", function () {
		$(".sauce").toggleClass("sauce-white");
		$(".btn-sauce").toggleClass("active");
	});

	$(".btn-crust").on("click", function () {
		$(".crust").toggleClass('crust-gluten-free');
		$(".btn-crust").toggleClass("active");

	});

});
