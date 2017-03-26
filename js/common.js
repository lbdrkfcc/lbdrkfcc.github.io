$(function() {

	//E-mail Ajax Send
	$('#order-wood').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail-wood.php", //Change
          type: "POST",
          data: $('#order-wood').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
            $.magnificPopup.close();
            $('input[type="text"]').val('');
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });
    
    $('#order-metall').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail-metall.php", //Change
          type: "POST",
          data: $('#order-metall').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
            $.magnificPopup.close();
            $('input[type="text"]').val('');
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });
    
    $('#order-rabica').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail-rabica.php", //Change
          type: "POST",
          data: $('#order-rabica').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
            $.magnificPopup.close();
            $('input[type="text"]').val('');
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });
    
    $('#callback').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail-callback.php", //Change
          type: "POST",
          data: $('#callback').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
            $.magnificPopup.close();
            $('input[type="text"]').val('');
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });
    
    $('#questions').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail-questions.php", //Change
          type: "POST",
          data: $('#questions').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
            $.magnificPopup.close();
            $('input[type="text"]').val('');
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });
    
    $('#request').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail-request.php", //Change
          type: "POST",
          data: $('#request').serialize(), //Change
          success: function(response) {
            alert("Спасибо за информацию!"); //Change
            $.magnificPopup.close();
            $('input[type="text"]').val('');
          },
          error: function(response) {
            alert("Ошибка при отправке сообщения"); //Change
         }
        });
    });

	//Chrome Smooth Scroll
//	try {
//		$.browserSelector();
//		if($("html").hasClass("chrome")) {
//			$.smoothScroll();
//		}
//	} catch(err) {
//
//	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

