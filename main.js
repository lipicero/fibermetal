// Sidebar - menú
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlayNav = document.querySelector(".nav-overlay");
const liclick = document.querySelector(".liclick");
const liclick1 = document.querySelector(".liclick1");
const aclick = document.querySelector(".aclick");
const submenuBtn = document.querySelector(".sub-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

aclick.addEventListener("click", () => menu.classList.remove("active"));
liclick.addEventListener("click", () => menu.classList.remove("active"));
liclick1.addEventListener("click", () => menu.classList.remove("active"));
closeBtn.addEventListener("click", () => menu.classList.remove("active"));
overlayNav.addEventListener("click", () => menu.classList.remove("active"));

// Submenú toggle
$(document).ready(function () {
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
  });

  $('.sub-item a').click(function () {
    $('.sub-menu').hide();
  });
});

// Cerrar submenú al hacer clic fuera
$(document).on("click", function (e) {
  const $submenu = $(".sub-menu");
  const $subBtn = $(".sub-btn");

  // Si el clic NO fue dentro del submenú ni del botón que lo activa
  if (!$submenu.is(e.target) && $submenu.has(e.target).length === 0 &&
      !$subBtn.is(e.target) && $subBtn.has(e.target).length === 0) {
    $submenu.slideUp(); //
  }
});


// Efecto sticky del header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Modal de imágenes - abrir
function abrirModal(src) {
  $('#imagenGrande').attr('src', src);
  $('#modal').fadeIn().addClass('show');
}

// Modal de imágenes - cerrar
function cerrarModal() {
  $('#modal').fadeOut().removeClass('show');
}

// Cerrar modal con Escape
$(document).on('keydown', function (e) {
  if (e.key === "Escape") {
    cerrarModal();
  }
});

// Envío de formulario con AJAX
$('#form-contacto').on('submit', function (e) {
  e.preventDefault();

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
      alert('Ocurrió un error al enviar el mensaje. Inténtalo más tarde.');
    }
  });
});

// Botón "ir arriba"
$(document).ready(function () {
  $('#ir-arriba').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $('#ir-arriba').slideDown(300);
    } else {
      $('#ir-arriba').slideUp(300);
    }
  });
});
