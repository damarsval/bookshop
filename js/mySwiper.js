document.addEventListener("DOMContentLoaded", () => {
  // Инициализация Swiper для каждого слайдера
  const swiperContainers = document.querySelectorAll(".swiper-container");
  swiperContainers.forEach((container, index) => {
    const swiperId = container.getAttribute("data-id"); // Получаем уникальный ID слайдера

    const nextBtn = container.querySelector(`.swiper-button-next`);
    const prevBtn = container.querySelector(`.swiper-button-prev`);
    new Swiper(container, {
      loop: true, // Бесконечная прокрутка
      navigation: {
        nextEl: nextBtn, // Кнопка "Вперёд"
        prevEl: prevBtn, // Кнопка "Назад"
      },
      slidesPerView: 1, // Количество слайдов, отображаемых одновременно
      spaceBetween: 30, // Расстояние между слайдами
      breakpoints: {
        1200: {
          slidesPerView: 1,
          spaceBetween: 1500,
          slideToClickedSlide: true,
        }
      }
    });
  });
});

