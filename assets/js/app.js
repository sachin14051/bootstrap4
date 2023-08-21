$(' .mytestimonal').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false
        },
        600:{
            items:2,
            dots:false,
            nav:false

        },
        1000:{
            items:3
        }
    }
})