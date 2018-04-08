$(function () {

    //E-mail Ajax Send
    $(".form-btn").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо!"); //Change
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    //Anti-drag
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

    //Maskedinput
    $('[name="phone"]').mask("+7(999) 999-99-99");

    //**************
    $('.gallery-a').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});
    
    $('.servisy-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#garantya'
	});
    
    var burgerCliked = false
    $('.burger').click(function(){
        if(!burgerCliked){
            $('.menu-nav>ul').addClass('mobile-nav');
            burgerCliked = !burgerCliked;
        } else {
            $('.menu-nav>ul').removeClass('mobile-nav');
            burgerCliked = !burgerCliked;
        }
    });
    $(window).resize(function(){
        
        if ($(window).width() > 992){
            $('.menu-nav>ul').removeClass('mobile-nav');
            burgerCliked = false;
        }
    });
    $('.menu-nav a').click(function(){
        $('.menu-nav>ul').removeClass('mobile-nav');
        burgerCliked = false;
    });
});