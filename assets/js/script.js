$(document).ready(function() {
	/*Entry*/
		let $loginForm = $('#login-form')
			$login = $('.login')
			$registrationForm = $('#registration-form')
			$registration = $('.registration')
			$close = $('.entry-form__close');


		$login.on('click', function(event) {
			event.preventDefault();

			$loginForm.addClass('show')
		});
		$close.on('click', function(event) {
			$loginForm.removeClass('show')
		});

		$registration.on('click', function(event) {
			event.preventDefault();

			$registrationForm.addClass('show')
		});
		$close.on('click', function(event) {
			$registrationForm.removeClass('show')
		});

		/*Slider*/
	$('.slider').slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.arrow-prev'),
		nextArrow: $('.arrow-next')
	});
})


