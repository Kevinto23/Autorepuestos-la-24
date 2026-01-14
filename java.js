$(document).ready(function () {

    // Ocultar loader y mostrar contenido
    setTimeout(() => {
        $(".qr_page_loader").hide();
        $(".qrc_page_wrapper").fadeIn();
    }, 800);

    // Inicialización de Swiper (si lo usas)
    if (typeof Swiper !== "undefined") {
        new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 15,
        });
    }

});