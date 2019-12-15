$(function(){


		var introHeight = $("#intro").innerHeight();//Присваеваем innerHeight селектор
		var header = $("#header");
		var scrollOfset = $(window).scrollTop;//Начальная высота блока



		// Фиксированное меню
		checkScroll(scrollOfset);//Проверка на скролл при закрузке страницы

	$(window).on("scroll", function(){

		scrollOfset = $(this).scrollTop();//Сохраняем скролл при перезагрузке
		checkScroll(scrollOfset);

	});  // При скроле фиксируем меню

	function checkScroll(scrollOfset){// Если скролл больше блока то фиксируем меню

		if (scrollOfset > introHeight) {
			header.addClass("fixed");
		}	else{
			header.removeClass("fixed");
		}
	}

		// Плавный скролл к элементам
		$("[data-scroll]").on("click", function(event){
			event.preventDefault();

			var $this = $(this),
					blockId = $this.data('scroll'),
					blockOffset = $(blockId).offset().top;


			$("#nav a").removeClass("active");
			$this.addClass("active");
			$("#hmara").removeClass("active");

			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);



		});

		//Бургер меню
		$("#nav_toggle").on("click", function(event){
				event.preventDefault();

				$(this).toggleClass("active");
				$("#nav").toggleClass("active");

				checkScroll(scrollOfset);//Проверка на скролл при закрузке страницы

		});

		//Аккордеон
		$("[data-collapse]").on("click", function(event){
				event.preventDefault();

				var $this = $(this),
					blockId = $this.data('collapse');

				$this.toggleClass("active");
				// $(blockId).slideToggle();//Плавное открытие
		});

		// Slider
		$("[data-slider]").slick({
				infinite: true,

				// fade:true,

				slidesToShow: 1,
  			slidesToScroll: 1
		});






});