$(document).ready(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
	    //Revisar si el boton no esta hasta arriba para mostrarlo
	    $(window).scroll(function(){
	        if ($(this).scrollTop() > 100) {
	            $('.scrollToTop').fadeIn();
	        } else {
	            $('.scrollToTop').fadeOut();
	        }
	    });

	    //Evento para subir hasta el inicio de pagina al hacer click en boton
	    $('.scrollToTop').click(function(){
	        $('html, body').animate({scrollTop : 0},100);
	        return false;
	    });


	    //Funcion de insercion del interesado
	    $("#fupForm").on('submit', function(e){

          e.preventDefault();
          $.ajax({
            type: 'POST',
            url: 'insertar.php',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
	            $('#btnSubm').attr("disabled","disabled");
	            $('#fupForm').css("opacity",".5");
            },
            success: function(data){
             console.log(data);
               var arr = eval(data);
              if (arr[0]==1) {
                Swal.fire(
                  'EXITO',
                  'Gracias por contactarnos, pronto nuestros asesores podrían ponerse en contacto con usted.',
                  'success'
                );
                //setTimeout(function(){ irPrincipal(); }, 2000);
              }else if (arr[0]==2) {
                Swal.fire("¡ERROR!", "Ocurrio un problema inesperado, intente nuevamente mas tarde.", "error");
              }else {
                Swal.fire("ERROR EN LOS DATOS", "Revise sus datos e intente nuevamente.", "error");
              }

              $("#fupForm").trigger("reset");//reseteamos el fomrulario (lo limpiamos)
	            $('#btnSubm').removeAttr('disabled');//se le quita el deshabilitado al boton
	            $('#fupForm').css("opacity","1");//se vuelve a mostrar con normalidad
            }
          });
        });

	});

$('.navbar-nav li').click(function(e) {
  // e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active');
});