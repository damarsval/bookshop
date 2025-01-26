const slides = document.querySelectorAll('.swiper-container');

slides.forEach((el, index) => {
  const nextButton = el.querySelector(`.swiper-button-next-${index + 1}`);
  const prevButton = el.querySelector(`.swiper-button-prev-${index + 1}`);

  new Swiper(el, {
    slidesPerView: 'auto',
    spaceBetween: 600,
    loop: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
});

