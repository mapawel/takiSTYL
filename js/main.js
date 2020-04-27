document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const bars = document.querySelector('.navbar-toggler'); //przycisk rozwijania menu
    const slidedMenu = document.querySelector('.navbar-collapse'); //blok rozwijalny menu, potrzebne do sprawdzenia czy ma kl. show czyli czy jest rozwiniety

    const addShadowOnNav = () => {
        if (window.scrollY >= 200) {
            nav.classList.add('nav-shadow')
        } else {
            nav.classList.remove('nav-shadow')
        }
    };

    window.addEventListener('scroll', addShadowOnNav);

    window.addEventListener('click', function () {
        if (slidedMenu.classList.contains('show')) {
            setTimeout(() => bars.click(), 150);;
        }
    })



    $('.styles-hero-container').slick({
        autoplay: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // centerMode: true,
        responsive: [{
                breakpoint: 567,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });


})

