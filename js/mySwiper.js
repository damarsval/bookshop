document.addEventListener("DOMContentLoaded", () => {
  // Инициализация Swiper для каждого слайдера
  const swiperContainers = document.querySelectorAll(".swiper-container");
  swiperContainers.forEach((container, index) => {
    const swiperId = container.getAttribute("data-id");

    const nextBtn = container.querySelector(`.swiper-button-next`);
    const prevBtn = container.querySelector(`.swiper-button-prev`);
    new Swiper(container, {
      loop: true, 
      navigation: {
        nextEl: nextBtn, 
        prevEl: prevBtn, 
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 50
        },
        1200: {
          slidesPerView: 6,
          slidesPerGroup: 4
        }
      }
    });
  });
});

