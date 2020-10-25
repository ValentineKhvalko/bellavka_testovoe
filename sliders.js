$(document).ready(() => {
  $('.mercedes-amg-container__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.mercedes-amg-container__prev-arrow'),
    nextArrow: $('.mercedes-amg-container__next-arrow'),
  });
  $('.sales-container__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".sales-container__prev-arrow"),
    nextArrow: $(".sales-container__next-arrow"),
  });
  setLanguage();
});