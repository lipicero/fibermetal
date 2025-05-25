//abrir,cerrar sidebar
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var overlayNav = document.querySelector(".nav-overlay");
var liclick = document.querySelector(".liclick");
var liclick1 = document.querySelector(".liclick1");
var aclick = document.querySelector(".aclick");
var submenuBtn = document.querySelector(".sub-btn");
var submenu = document.querySelector(".sub-menu");



menuBtn.addEventListener("click", () => {
    menu.classList. toggle("active");
});

aclick.addEventListener("click", () => {
    menu.classList.remove("active");
});

liclick.addEventListener("click", () => {
    menu.classList.remove("active");
});
liclick1.addEventListener("click", () => {
    menu.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

overlayNav.addEventListener("click", () => {
    menu.classList.remove("active");
});



// Submenu contato
$(document).ready(function () {
    $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle()
      })
});

// Oculta el submenú en modo móvil
$(document).ready(function () {
    $('.sub-item a').click(function () {
      $('.sub-menu').hide(); 
    });
  });

//javascript efecto scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// carrusel
  function abrirModal(src) {
    $('#imagenGrande').attr('src', src);
    $('#modal').fadeIn();
  }

  function cerrarModal() {
    $('#modal').fadeOut();
  }

  // Cerrar modal al presionar Escape
  $(document).on('keydown', function(e) {
    if (e.key === "Escape") {
      cerrarModal();
    }
  });

  // Cerrar modal si se hace clic fuera de la imagen
function abrirModal(src) {
  $('#imagenGrande').attr('src', src);
  $('#modal').fadeIn().addClass('show');
}

function cerrarModal() {
  $('#modal').fadeOut().removeClass('show');
}

// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, {
//         dist: -150,
//     });
// });


// //   autoplay carrusel
// setInterval(function () {
//     $('.carousel').carousel('next');
// }, 3000);
$('#form-contacto').on('submit', function (e) {
    e.preventDefault(); // Prevenir redirección

    const $form = $(this);
    const url = $form.attr('action');

    $.ajax({
      type: 'POST',
      url: url,
      data: $form.serialize(),
      dataType: 'json',
      success: function () {
        $('#form-mensaje').fadeIn().delay(3000).fadeOut();
        $form.trigger('reset');
      },
      error: function () {
        alert('Ocurrió un error al enviar el mensaje. Intentalo más tarde.');
      }
    });
  });

// boton ir arriba flotante
$(document).ready(function () {

    $('#ir-arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#ir-arriba').slideDown(300);
        } else {
            $('#ir-arriba').slideUp(300);
        }
    });

});