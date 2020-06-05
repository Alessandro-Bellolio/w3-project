$(document).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.logo').addClass('smaller');
	} else {
		if ($('.logo').hasClass('smaller')) {
			$('.logo').removeClass('smaller');
		}
	}

	const homeHeight = $('#home').height();

	if ($(this).scrollTop() > 0) {
		$('#home .box').fadeIn('slow');
	}

	if ($(this).scrollTop() > 700) {
		$('#quienes-somos .box').fadeIn('slow', function() {
			$('#quienes-somos a').fadeIn('slow');
		});
	}

	if ($(this).scrollTop() > 1800) {
		$('#nuestro-estilo .box').fadeIn('slow', function() {
			$('#nuestro-estilo a').fadeIn('slow');
		});
	}

	if ($(this).scrollTop() > 2500) {
		$('#galeria .box').fadeIn('slow');
		$('#galeria .box2').fadeIn('slow');
		$('#galeria a').fadeIn('fast');
	}

	if ($(this).scrollTop() > 4000) {
		$('#contactate .box').fadeIn('slow', function() {
			$('#contactate .box2').fadeIn('slow');
		});
	}
});

$(document).ready(function() {
	$('section .box').hide();
	$('section a').hide();
	$('section .box2').hide();

	$('#home .box').fadeIn('slow', function() {
		$('#home a').fadeIn('slow');
	});

	$('.submit').click(function(event) {
		let nombre = $('#nombre').val();
		let apellido = $('#apellido').val();
		let comentario = $('#comentario').val();

		if (nombre.length >= 1) {
			console.log('Nombre validado');
		} else {
			event.preventDefault();
			alert('Nombre inválido');
		}
		if (apellido.length > 2) {
			console.log('Apellido validado');
		} else {
			event.preventDefault();
			alert('Apellido inválido');
		}
		if (comentario.length > 15) {
			console.log('Comentario validado');
		} else {
			event.preventDefault();
			alert('Ingrese almenos 15 caracteres en su comentario');
		}
	});
});
