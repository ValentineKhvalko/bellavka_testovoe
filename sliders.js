$(document).ready(() => {
  $('.mercedes-amg-container__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.mercedes-amg-container__prev-arrow'),
    nextArrow: $('.mercedes-amg-container__next-arrow'),
    responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
          settings: "unslick",  
      },
    ]
  });
  $('.sales-container__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".sales-container__prev-arrow"),
    nextArrow: $(".sales-container__next-arrow"),
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      }, 
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      }
    ]
  });
  setLanguage();
});