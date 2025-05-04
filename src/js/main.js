import Choices from 'choices.js';
import '../scss/style.scss';
import "choices.js/public/assets/styles/choices.css";


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


const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});


const feedbackForm = document.querySelector('.feedback__form');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    overlay.classList.toggle('open');
    body.classList.toggle('open');
});