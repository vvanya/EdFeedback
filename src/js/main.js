import '../scss/style.scss';


$('.reviews__slider_one').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    pauseOnHover: true,
});

$('.reviews__slider_two').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    pauseOnHover: true,
});