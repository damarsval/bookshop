let booksHTML = ''; 

books.forEach((book) => {
  booksHTML += `
  <article class="product-card">
    <div class="product-card__img-container">
      <img class="product-card__img" src="${book.image}" alt="Обложка книги">
    </div>
    <div class="product-card__content">
     <div class="product-card__price">
      <span class="product-price__old">${book.oldPrice} </span>
      <div class="product-price__new">
                      ${book.newPrice}
                      <span class="product-price__discount">${book.discount}</span>
                    </div>
                  </div>
                  <div class="product-card__info">
                    <div class="product-info__title">
                      ${book.title}
                    </div>
                    <div class="product-info__author">
                      ${book.author}
                    </div>
                  </div>
                  <div class="product-card__btns">
                    <div class="product-btns__buy">
                      <a class="buy-link" href="#"><button class="buy-btn js-add-to-cart"
                      data-product-id="${book.id}"
                      >В корзину</button></a>
                    </div>
                    <div class="products-btns__fav">
                      <button class = "favorite-btn js-add-to-favorite">
                      <i class="material-icons favorite-icons">favorite</i>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
  `

  
});


document.querySelectorAll('.js-products-grid').forEach((grid) => {
  grid.innerHTML = booksHTML;});

  let booksHTML2 = '';
  books2.forEach((book) => {
    booksHTML2 += `
    <article class="product-card">
      <div class="product-card__img-container">
        <img class="product-card__img" src="${book.image}" alt="Обложка книги">
      </div>
      <div class="product-card__content">
       <div class="product-card__price">
        <span class="product-price__old">${book.oldPrice} </span>
        <div class="product-price__new">
                        ${book.newPrice}
                        <span class="product-price__discount">${book.discount}</span>
                      </div>
                    </div>
                    <div class="product-card__info">
                      <div class="product-info__title">
                        ${book.title}
                      </div>
                      <div class="product-info__author">
                        ${book.author}
                      </div>
                    </div>
                    <div class="product-card__btns">
                      <div class="product-btns__buy">
                        <a class="buy-link" href="#"><button class="buy-btn js-add-to-cart"
                        data-product-id="${book.id}"
                        >В корзину</button></a>
                      </div>
                      <div class="products-btns__fav">
                        <button class = "favorite-btn js-add-to-favorite">
                        <i class="material-icons favorite-icons">favorite</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
    `
  
    
  });

  document.querySelectorAll('.js-products-grid').forEach((grid) => {
    grid.innerHTML = booksHTML2;});
  // обработчик корзины
  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
          if (productId === item.productId) {
            matchingItem = item;
          }
        });

        if(matchingItem) {
          matchingItem.quantity += 1;
        } else {
          cart.push({
            productId: productId,
            quantity: 1
          });
        }

        let cartQuantity = 0;

        cart.forEach((item) => {
          cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity')
          .innerHTML = cartQuantity;
        
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