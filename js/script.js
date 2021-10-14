$(function() {
	var pagetop = $('#center');
	pagetop.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				pagetop.fadeIn(1000);
			} else {
				pagetop.fadeOut();
			}
		});

	var left = $('#left');
	left.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 650) {
				left.fadeIn(1000);
			} else {
				left.fadeOut();
			}
		});

	var right = $('#right');
	right.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 650) {
				right.fadeIn(1000);
			} else {
				right.fadeOut();
			}
		});
	var right = $('#photo_gallary');
	right.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 650) {
				right.fadeIn(1000);
			} else {
				right.fadeOut();
			}
		});

	var banaLeft = $('#bana_left');
	banaLeft.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1250) {
				banaLeft.fadeIn(1000);
			} else {
				banaLeft.fadeOut();
			}
		});

	var banaRight = $('#bana_right');
	banaRight.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1250) {
				banaRight.fadeIn(1000);
			} else {
				banaRight.fadeOut();
			}
		});

	var footer = $('footer');
	footer.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1200) {
				footer.fadeIn(1000);
			} else {
				footer.fadeOut();
			}
		});
});
