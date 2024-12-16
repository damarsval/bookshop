const books = [
  { image: "images/thh.webp", oldPrice: "530 ₽", newPrice: "420 ₽", discount: "- 15%", title: "The Haunted Hotel", author: "Wilkie Collins" },
  { image: "images/osamu.webp", oldPrice: "330 ₽", newPrice: "264 ₽", discount: "- 20%", title: "Человек недостойный", author: "Осаму Дадзай" },
  { image: "images/hawking.webp", oldPrice: "450 ₽", newPrice: "315 ₽", discount: "- 30%", title: "Теория всего", author: "Стивен Хокинг" },
  { image: "images/carr.webp", oldPrice: "1100 ₽", newPrice: "935 ₽", discount: "- 15%", title: "Слепой цирюльник", author: "Джон Карр" },
  { image: "images/goldcow.webp", oldPrice: "620 ₽", newPrice: "434 ₽", discount: "- 30%", title: "Золотой теленок", author: "Илья Ильф, Евгений Петров" },
  { image: "images/fudz.webp", oldPrice: "1020 ₽", newPrice: "856 ₽", discount: "- 21%", title: "Оглянись", author: "Фудзимото Тацуки" }
];

// Функция для генерации HTML-кода книги
function createBookHTML(book) {
  return `
    <div class="product-card">
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
            <a class="buy-link" href="#"><button class="buy-btn">В корзину</button></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Заполнение первого слайда уникальными книгами
const firstSlideGrid = document.querySelectorAll('.swiper-slide .product-grid')[0];
firstSlideGrid.innerHTML = books.map(book => createBookHTML(book)).join('');

// Заполнение второго и третьего слайдов книгами с одинаковым изображением
const repeatedBook = {
  image: "images/goldcow.webp",
  oldPrice: "620 ₽",
  newPrice: "434 ₽",
  discount: "- 30%",
  title: "Золотой теленок",
  author: "Илья Ильф, Евгений Петров"
};

for (let i = 1; i <= 2; i++) {
  const slideGrid = document.querySelectorAll('.swiper-slide .product-grid')[i];
  slideGrid.innerHTML = Array(6).fill(createBookHTML(repeatedBook)).join('');
}


