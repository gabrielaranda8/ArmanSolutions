(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Pricing carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

// Función para mostrar el cuadro de diálogo al hacer clic en el botón "Book Now"
function showBookingNotification() {
    // Mensaje de notificación
    var message = "Para agendar una reunión, por favor enviar un correo electrónico a info.riskalytics@gmail.com o un mensaje de WhatsApp al +54 11 3255 1565 y lo atenderán a la brevedad.";

    // Muestra el cuadro de diálogo con el mensaje
    alert(message);
}

// Función para mostrar el cuadro de diálogo al hacer clic en el botón "Book Now"
function showBookingNotificationEng() {
    // Mensaje de notificación
    var message = "To schedule a meeting, please send an email to info.riskalytics@gmail.com or a WhatsApp message to +54 11 3255 1565 and you will be attended as soon as possible.";

    // Muestra el cuadro de diálogo con el mensaje
    alert(message);
}

function showOverlay(img) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    var overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';
    
    var image = document.createElement('img');
    image.className = 'overlay-image';
    image.src = img.src;
    
    overlayContent.appendChild(image);
    
    // Agrega información adicional sobre el miembro del equipo aquí
    var text = document.createTextNode("Aquí va la información adicional sobre el miembro del equipo.");
    overlayContent.appendChild(text);
    
    overlay.appendChild(overlayContent);
    
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function() {
        overlay.parentNode.removeChild(overlay);
    });
}
