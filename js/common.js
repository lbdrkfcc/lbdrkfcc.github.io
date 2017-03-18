$(function() {

	//E-mail Ajax Send
	$('form').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail.php", //Change
          type: "POST",
          data: $('form').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

