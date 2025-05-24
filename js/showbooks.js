  // Функция для создания HTML карточки книги
function createBookCard(book) {
  return `
    <article class="product-card" data-id = "${book.id}" product-weight = "${book.weight}">
      <div class="product-card__img-container">
        <img class="product-card__img" src="${book.image}" alt="Обложка книги">
      </div>
      <div class="product-card__content">
        <div class="product-card__price">
          <span class="product-price__old">${book.oldPrice}</span>
          <div class="product-price__new">
            ${book.newPrice}
            <span class="product-price__discount">${book.discount}</span>
          </div>
        </div>
        <div class="product-card__info">
          <div class="product-info__title">${book.title}</div>
          <div class="product-info__author">${book.author}</div>
        </div>
        <div class="product-card__btns">
          <div class="product-btns__buy">
            <button data-cart type="button" class="buy-btn js-add-to-cart" data-product-id="${book.id}">В корзину</button>
          </div>
          <div class="products-btns__fav">
            <button class="favorite-btn js-add-to-favorite" data-product-id="${book.id}">
              <i class="material-icons favorite-icons">favorite</i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
   
}

function getBookArray(book) {
  const bookArray = book.slice();
  const booksPerSlide = 1;
  const slides = [];
for (let i = 0; i < bookArray.length; i += booksPerSlide) {
  const slideBooks = bookArray.slice(i, i + booksPerSlide);
  slides.push(slideBooks);
}
return slides;
}


function initSwiper(swiper, books) {
  const slides = getBookArray(books);
 
  const swiperWrapper = document.querySelector(`.${swiper} .swiper-wrapper`);
  const slide = swiperWrapper.querySelectorAll('.swiper-slide');
  
  slide.forEach((slide, index) => {
    const grid = slide.querySelector('.product-grid');
    if (slides[index]) {
      let booksHTML = '';
      slides[index].forEach((book) => {
        booksHTML += createBookCard(book);
      });
      grid.innerHTML = booksHTML;
    }
  });

  // 🔧 После генерации карточек, обновим кнопки
/*   if (typeof updateCartButtons === 'function') {
    updateCartButtons();
  } */

  
}


 



  document.addEventListener('DOMContentLoaded', function() {
  initSwiper('swiper1', books);
  initSwiper('swiper2', books2);
  initSwiper('swiper3', books3);
  
});