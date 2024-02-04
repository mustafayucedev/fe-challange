let carousel = (el,mobileSmall,mobileBig,tablet,desktopSmall,desktopBig,isCenter = false,margin = 30) => {
    $(el).owlCarousel({
        center: isCenter,
        loop: true,
        nav: true,
        margin: margin,
        responsiveClass: true,
        responsive: {
            0:{
                items: mobileSmall,
                nav: true,
                dots: false,
            },
            575:{
                items: mobileBig,
                nav: true,
                dots: false,
            },
            768:{
                items: tablet,
                nav: true,
                dots: false,
            },
            991:{
                items: desktopSmall,
                nav: true,
                dots: false,
            },
            1280:{
                items: desktopBig,
                nav: true,
                dots: false,
            }
        }
    })
}

carousel("#campaign-content", 1.5, 2, 2.5, 3.5, 5.6, true, 20);
carousel("#news-content", 1.5, 2, 2.5, 3.5, 4.5, true, 40);