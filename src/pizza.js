// // Write your Pizza Builder JavaScript in this file.
// $('.pizza').toggleClass('pep one')
// $('.pizza').toggleClass('pep two')
// $('.pizza').toggleClass('green-pepper one')
// $('.pizza').toggleClass('green-pepper two')
// $('.pizza').toggleClass('mushroom one')
// $('.pizza').toggleClass('mushroom two')



$(document).on("ready", function () {

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
		$(".sauce-white").toggle();
	});

	$(".btn-crust").on("click", function () {
		$(".crust").toggleClass('crust-gluten-free');

	});



});