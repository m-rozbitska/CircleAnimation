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
        centerPadding: "30px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    dots: false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    variableWidth: true
                }
            }
        ]
    });
});

//# sourceMappingURL=index.09c24910.js.map
