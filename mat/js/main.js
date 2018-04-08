$(document).ready(function(){

    $('.btn-callback-modal').magnificPopup({
      items: {
          src: '#modal-callback',
          type: 'inline'
      }
    });

    $('.btn-proflist').magnificPopup({
      items: {
          src: '#modal-proflist',
          type: 'inline'
      }
    });

    $('.btn-shtaket').magnificPopup({
      items: {
          src: '#modal-shtaket',
          type: 'inline'
      }
    });

    $('.btn-rabica').magnificPopup({
      items: {
          src: '#modal-rabica',
          type: 'inline'
      }
    });
	
	$('.btn-stolb').magnificPopup({
      items: {
          src: '#modal-stolb',
          type: 'inline'
      }
    });
});

$(function() {

    
    
	//E-mail Ajax Send
	$('#order-proflist').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail.php", //Change
          type: "POST",
          data: $('#order-proflist').serialize(), //Change
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
    
    $('#order-stolb').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail.php", //Change
          type: "POST",
          data: $('#order-stolb').serialize(), //Change
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
          url: "mail.php", //Change
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
	
	$('#order-shtaket').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail.php", //Change
          type: "POST",
          data: $('#order-shtaket').serialize(), //Change
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
          url: "mail.php", //Change
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
          url: "mail.php", //Change
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
          url: "mail.php", //Change
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

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

