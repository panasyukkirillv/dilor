$(document).ready(function () {

    // Header Button

    $('.header .btn').click(function () {
        $('.header .btn').toggleClass('active');
        $('.header .nav').toggleClass('active');
    });

    // Header Color

    if($(this).scrollTop() > 1) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }

    $(window).scroll(function () {
        if($(this).scrollTop() > 1) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });


    // Scroll to Top Button

    $(window).scroll(function () {
        if($(this).scrollTop() > 300) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Nav Scroll

    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        $('.header .btn').toggleClass('active');
        $('.header .nav').toggleClass('active');
        e.preventDefault();
      });

    // Video Popup

    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            // disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    });

    // Hero Slider

    $('.hero .slick-slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.hero .slick-dots',
        adaptiveHeight: true,
    });

    // Registration

    $('.registration .slick .slick-slider').slick({
        appendArrows: '.registration .slick-arrows',
        dots: true,
        appendDots: '.registration .slick-dots',
        slidesToShow: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
        
    });

    // Gymnastics

    $('.gymnastics .slick .slick-slider').slick({
        appendArrows: '.gymnastics .slick-arrows',
        appendDots: '.gymnastics .slick-dots',
        slidesToShow: 1,
        mobileFirst: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,

            },
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                dots: true,
            },
        }],
        
    });

    // Programmes

    $('.programmes .slick .slick-slider').slick({
        mobileFirst: true,
        arrows: false,
        appendDots: '.programmes .slick-dots',
        slidesToShow: 1,
        fade: true,
        dots: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                draggable: false,
                arrows: true,
                appendArrows: '.programmes .slick-arrows',
            },
        }],
    });

    // Results

    $('.results .slick .slick-slider').slick({
        appendArrows: '.results .slick-arrows',
        appendDots: '.results .slick-dots',
        dots: true,
        slidesToShow: 1,
        mobileFirst: true,
    });

    // Tooltip

    $('.tooltip').click(function () {
        $(this).toggleClass('active');
    });

    // Form Validation

    $("#contact-form").validate({
        errorElement: "p",
        rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true,
            },
            checkbox: "required",
        },
        messages: {
            name: "Это поле обязательно для заполнения",
            phone: "Это поле обязательно для заполнения",
            email: {
              required: "Это поле обязательно для заполнения",
              email: "Введите корректный адрес эл.почты"
            },
            checkbox: {
                required : "Подтвердите свое согласие на обработку персональных данных",
            },
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "checkbox" || element.attr("name") == "checkbox" ) {
              error.insertAfter(".checkbox-error");
            } else {
              error.insertAfter(element);
            }
          }
    });


});