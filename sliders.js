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
  $('.comments').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".comment__prev-arrow"),
    nextArrow: $(".comment__next-arrow"),
  });
  $('.modal-window-for-comment__send-btn').on('click', (slideIndex) => { 
    addComment(true, slideIndex);
  })
  setLanguage();
});