// let booksHTML = ''; 

// books.forEach((book) => {
//   booksHTML += `
//   <article class="product-card">
//     <div class="product-card__img-container">
//       <img class="product-card__img" src="${book.image}" alt="Обложка книги">
//     </div>
//     <div class="product-card__content">
//      <div class="product-card__price">
//       <span class="product-price__old">${book.oldPrice} </span>
//       <div class="product-price__new">
//                       ${book.newPrice}
//                       <span class="product-price__discount">${book.discount}</span>
//                     </div>
//                   </div>
//                   <div class="product-card__info">
//                     <div class="product-info__title">
//                       ${book.title}
//                     </div>
//                     <div class="product-info__author">
//                       ${book.author}
//                     </div>
//                   </div>
//                   <div class="product-card__btns">
//                     <div class="product-btns__buy">
//                       <a class="buy-link" href="#"><button class="buy-btn js-add-to-cart"
//                       data-product-id="${book.id}"
//                       >В корзину</button></a>
//                     </div>
//                     <div class="products-btns__fav">
//                       <button class = "favorite-btn js-add-to-favorite">
//                       <i class="material-icons favorite-icons">favorite</i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//   `

  
// });


// document.querySelectorAll('.js-products-grid').forEach((grid) => {
//   grid.innerHTML = booksHTML;});

  // Функция для создания HTML карточки книги
function createBookCard(book) {
  return `
    <article class="product-card">
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
            <a class="buy-link" href="#">
              <button class="buy-btn js-add-to-cart" data-product-id="${book.id}">В корзину</button>
            </a>
          </div>
          <div class="products-btns__fav">
            <button class="favorite-btn js-add-to-favorite">
              <i class="material-icons favorite-icons">favorite</i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Разделяем книги на группы по 6 книг
const booksPerSlide = 6;
const slides = [];
for (let i = 0; i < books.length; i += booksPerSlide) {
  const slideBooks = books.slice(i, i + booksPerSlide);
  slides.push(slideBooks);
  console.log(i);
}
//console.log(slides);
// Добавляем книги в слайды
document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
  const grid = slide.querySelector('.js-products-grid');
  if (slides[index]) {
    let booksHTML = '';
    slides[index].forEach((book) => {
      booksHTML += createBookCard(book);
    });
    grid.innerHTML = booksHTML;
  }
});
      console.log(booksHTML);



    // Функция для обновления количества товаров в навигации
/*function updateCartQuantity() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector('.js-cart-quantity').textContent = cartQuantity;
}*/

// Вызов функции при загрузке страницы
updateCartQuantity();

  // обработчик корзины
  

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem = cart.find(item => item.productId === productId);

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

      const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

      // Изменение кнопки
      button.textContent = "Добавлено";
      button.classList.add('added-to-cart');
      button.disabled = true;

      // Сохранение корзины
      localStorage.setItem('cart', JSON.stringify(cart));
      
      updateCartQuantity();

      console.log(cartQuantity);
      console.log(cart);
    });
  });


    // обработчик избранного
    document.querySelectorAll('.js-add-to-favorite')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId;

          let matchingItem;

          favorites.forEach((item) => {
            if(productId === item.productId) {
              matchingItem = item;
            }
          });

          if(matchingItem) {
            matchingItem.quantity += 1;
          }else {
            favorites.push({
              productId: productId,
              quantity: 1
            });
          }

          let favoritesQuantity = 0;

          favorites.forEach((item) => {
            favoritesQuantity += item.quantity;
          });

          document.querySelector('.js-favs-quantity')
          .innerHTML = favoritesQuantity;


        })
      })