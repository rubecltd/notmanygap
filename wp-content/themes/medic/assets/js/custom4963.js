(function($) {
	'use strict';

	/*====================
	MEAN MENU JS
	======================*/
	$('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	/*====================
	PRELOADER JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	/*====================
	NICE SELECT JS
	======================*/
	$('select').niceSelect();
	
	/*====================
	HEADER STICKY JS
	======================*/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
			$('body').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
			$('body').removeClass("is-sticky");
		}
	});

	$( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {

			/*====================
			HERO SLIDER WRAP JS
			======================*/
			$('.hero-slider-wrap').owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				mouseDrag:true,
				items:1,
				dots:false,
				autoHeight:true,
				autoplay:true,
				smartSpeed:800,
				autoplayHoverPause:true,
				navText: [
					"<i class='bx bx-chevrons-left'></i>",
					"<i class='bx bx-chevrons-right'></i>"
				]
			});

			/*====================
			TESTIMONIAL WRAP JS
			======================*/
			$('.testimonial-wrap').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				mouseDrag:true,
				items:1,
				dots:true,
				autoHeight:true,
				autoplay:true,
				smartSpeed:1500,
				autoplayHoverPause:true,
				center:false,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0:{
						items:1,
						margin: 10
					},
					576:{
						items:1
					},
					768:{
						items:2,
						margin: 20
					},
					992:{
						items:2
					},
					1200:{
						items:2
					}
				}
			});

			/*====================
			DEPARTMENT WRAP JS
			======================*/
			$('.department-wrap').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				mouseDrag:true,
				items:1,
				dots:true,
				autoHeight:true,
				autoplay:false,
				smartSpeed:1500,
				autoplayHoverPause:true,
				center:false,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0:{
						items:1,
						margin:10
					},
					576:{
						items:1
					},
					768:{
						items:2,
						margin:20
					},
					992:{
						items:2
					},
					1200:{
						items:3
					}
				}
			});

			/*====================
			Blog WRAP JS
			======================*/
			$('.blog-wrap').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				mouseDrag:true,
				items:1,
				dots:true,
				autoHeight:true,
				autoplay:false,
				smartSpeed:1500,
				autoplayHoverPause:true,
				center:false,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0:{
						items:1
					},
					576:{
						items:1				
					},
					768:{
						items:2
					},
					992:{
						items:2
					},
					1200:{
						items:3
					}
				}
			});

			/*====================
			Blog Sidebar WRAP JS
			======================*/
			$('.blog-sidebar-wrap').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				mouseDrag:true,
				items:1,
				dots:true,
				autoHeight:true,
				autoplay:false,
				smartSpeed:1500,
				autoplayHoverPause:true,
				center:false,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0:{
						items:1
					},
					576:{
						items:1
					},
					768:{
						items:2
					},
					992:{
						items:2
					},
					1200:{
						items:2
					}
				}
			});

			/*====================
			Doctor WRAP JS
			======================*/
			$('.doctor-wrap').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				mouseDrag:true,
				items:1,
				dots:true,
				autoHeight:true,
				autoplay:true,
				smartSpeed:1500,
				autoplayHoverPause:true,
				center:false,
				navText: [
					"<i class='fa fa-arrow-left'></i>",
					"<i class='fa fa-arrow-right'></i>"
				],
				responsive: {
					0:{
						items:1,
						margin: 10
					},
					576:{
						items:1,
						margin: 10
					},
					768:{
						items:2,
						margin: 20
					},
					992:{
						items:2,
						margin:20
					},
					1200:{
						items:3,
						margin:20
					}
				}
			});

			/*====================
			Product Slider
			======================*/
			$('.product-slider').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				mouseDrag:true,
				items:1,
				dots:true,
				autoplay:false,
				smartSpeed:1500,
				autoplayHoverPause:true,
				center:false,
				navText: [
					"<i class='bx bx-chevrons-left'></i>",
					"<i class='bx bx-chevrons-right'></i>"
				],
				responsive:{
					0:{
						items:1
					},
					576:{
						items:1
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:3
					}
				}
			});

			// Accordion JS
		    $('.faq-area .accordion .accordion-item:nth-child(1)').addClass('active');
		    $('.faq-area .accordion .accordion-item:nth-child(1) .accordion-content').addClass('show');
            
            /*====================
			ODOMETER JS
			======================*/
			$('.odometer').appear(function(e) {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});

		    /*====================
			POPUP JS
			======================*/
			$('.popup-youtube, .popup-vimeo').magnificPopup({
				disableOn: 300,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
			});

			/*====================
			Tabs JS
			======================*/
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			$('.tab ul.tabs li').on('click', function (g) {
				var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();
				g.preventDefault();
			});

			// Data Aos
		    AOS.init({
		        once: true,
		        disable: function() {
		            var maxWidth = 991;
		            return window.innerWidth < maxWidth;
		        }
		    });

	    });
    });

    if (!$( "body" ).hasClass('elementor-page')) {  

	    // Data Aos
	    AOS.init({
	        once: true,
	        disable: function() {
	            var maxWidth = 991;
	            return window.innerWidth < maxWidth;
	        }
	    });

    }

	/*====================
	FAQ JS
	======================*/
	$('.accordion').find('.accordion-title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	/*====================
	SCROLL JS
	======================*/
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	/*====================
	GO-TOP JS
	======================*/
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  50);
	});
	
	/*====================
	WOW JS
	======================*/
	new WOW().init();

	/*====================
	LTR & RTL JS
	======================*/
	$('.ltr-rtl-button .medic-default-btn.ltr').on('click', function() {
		$("html").attr('dir', 'ltr');
	});

	$('.ltr-rtl-button .medic-default-btn.rtl').on('click', function() {
		$("html").attr('dir', 'rtl');
	});

	/*====================
	INPUT COUNTER JS
	======================*/
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	/*====================
	Comment Form JS
	======================*/
	$('.comment-respond textarea').attr('placeholder', 'Comment');
	$('.comment-respond input[type="text"]').attr('placeholder', 'Full Name');
	$('.comment-respond input[type="email"]').attr('placeholder', 'Email Address');
	$('.comment-respond input[type="url"]').attr('placeholder', 'Website URL');

})(jQuery);
