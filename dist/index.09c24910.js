$(document).ready(function() {
    $(".slider__main").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider__nav"
    });
    $(".slider__nav").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider__main",
        focusOnSelect: true,
        centerMode: true,
        // centerPadding: '10px',
        slider__nav: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1
                }
            }
        ]
    });
});

//# sourceMappingURL=index.09c24910.js.map
