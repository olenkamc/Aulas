$('.owl-carousel').owlCarousel({
    loop:true, /*navegar definida e indefinidamente*/
    margin:7,
    nav:false, /*habilita /deshabilita btn navegacion*/
    responsive:{
        0:{ /*pixeles */
            items:1 /*cant item visible */
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})