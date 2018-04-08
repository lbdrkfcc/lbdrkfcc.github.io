$(document).ready(function(){

    $('.btn-callback-modal').magnificPopup({
      items: {
          src: '#modal-callback',
          type: 'inline'
      }
    });

    $('.btn-wood-modal').magnificPopup({
      items: {
          src: '#modal-order-wood',
          type: 'inline'
      }
    });

    $('.btn-metall-modal').magnificPopup({
      items: {
          src: '#modal-order-metall',
          type: 'inline'
      }
    });

    $('.btn-rabica-modal').magnificPopup({
      items: {
          src: '#modal-order-rabica',
          type: 'inline'
      }
    });
	
	$('.btn-shtaket-modal').magnificPopup({
      items: {
          src: '#modal-order-shtaket',
          type: 'inline'
      }
    });

    $('.examples__item').magnificPopup({
        type:'image',
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
        }
    });


});

$(function() {

    
    
	//E-mail Ajax Send
	$('#order-wood').submit(function(event){ //Change
        event.preventDefault();
        $.ajax({
          url: "mail.php", //Change
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
          url: "mail.php", //Change
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

