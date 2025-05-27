function addToFavs(product) {
  const index = favs.findIndex(item => item.id.toString() === product.id.toString());
  if (index >= 0) {
    removeFromFavs(product.id);
  } else {
    favs.push(product);
  }
  saveFavs();
  updateFavoriteButtons();
  updateCounters();
  
}

const favsItemsContainer = document.querySelector('.js-favs-items');
  const addToFavsBtns = document.querySelectorAll('.js-add-to-favorite');
  const deleteAllFavsBtn = document.querySelector('.js-delete-all-favs');

  let favs = JSON.parse(localStorage.getItem('favs')) || [];
  //updateFavoriteButtons();

  function saveFavs() {
    localStorage.setItem('favs', JSON.stringify(favs));
  }

  function removeFromFavs(productId) {
    const index = favs.findIndex(item => item.id === productId);
    if (index >= 0) {
      favs.splice(index, 1);
    }
  }


     deleteAllFavsBtn.addEventListener('click', clearFavs);
  
 /*  function addToFavs(product) {
    const index = favs.findIndex(item => item.id.toString() === product.id.toString());
    console.log(index);
    if (index >= 0) {
      removeFromFavs(product.id);
    } else {
      favs.push(product);
    }
    saveFavs();
  } */

  function clearFavs() {
    if (confirm('Вы точно хотите очистить "Избранное"?')) {
      favs = [];
      saveFavs();
      updateFavsUI();
      updateFavoriteButtons();
    }
  }

  function updateFavsUI() {
    if (!favsItemsContainer) return;

    favsItemsContainer.innerHTML = '';
    favs.forEach(item => {
      const isActive = favs.some(fav => fav.id === item.id);
    const favIconClass = isActive ? 'favorite-icons favorite-icons_active' : 'favorite-icons';

      const html = `
        <article class="product-card" data-id="${item.id}" product-weight="${item.weight}">
          <div class="product-card__img-container">
            <img class="product-card__img" src="${item.image}" alt="Обложка книги">
          </div>
          <div class="product-card__content">
            <div class="product-card__price">
              <span class="product-price__old">${item.oldPrice} ₽</span>
              <div class="product-price__new">
                ${item.newPrice} ₽
                <span class="product-price__discount">${item.discount}</span>
              </div>
            </div>
            <div class="product-card__info">
              <div class="product-info__title">${item.title}</div>
              <div class="product-info__author">${item.author}</div>
            </div>
            <div class="product-card__btns">
              <div class="product-btns__buy">
                <button data-cart type="button" class="buy-btn js-add-to-cart" data-product-id="${item.id}">В корзину</button>
              </div>
              <div class="products-btns__fav">
                <button class="favorite-btn js-add-to-favorite" data-product-id="${item.id}">
                  <i class="material-icons ${favIconClass}">favorite</i>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
      favsItemsContainer.insertAdjacentHTML('beforeend', html);
    });
  }

  // Делегирование для добавления/удаления избранного
 /* document.body.addEventListener('click', function (e) {
  
    const favBtn = e.target.closest('.js-add-to-favorite');
    if (!favBtn) return;

  const icon = favBtn.querySelector('.material-icons');
  if (!icon) return;

    const productCard = favBtn.closest('.product-card');
    const priceText = productCard.querySelector('.product-price__new')?.textContent || '0';
    const oldPriceText = productCard.querySelector('.product-price__old')?.textContent || '0';

    const favsProduct = {
      id: favBtn.dataset.productId || productCard.dataset.id,
      image: productCard.querySelector('.product-card__img').src,
      oldPrice: parseFloat(oldPriceText.replace(/\s|₽/g, '')),
      newPrice: parseFloat(priceText.replace(/\s|₽/g, '')),
      discount: productCard.querySelector('.product-price__discount').textContent,
      title: productCard.querySelector('.product-info__title').textContent,
      author: productCard.querySelector('.product-info__author').textContent
    };
    addToFavs(favsProduct);
    
   updateFavoriteButtons();
   updateFavsUI();
  });


  deleteAllFavsBtn.addEventListener('click', clearFavs); */


  function updateFavoriteButtons() {
  const favButtons = document.querySelectorAll('.js-add-to-favorite, .js-cart-add-to-favorite');
  favButtons.forEach(button => {
    const productId = button.dataset.productId;
    const icon = button.querySelector('.material-icons');
   if (!productId || !icon) return;
    
    const isFavorite = favs.some(item => String(item.id) === String(productId));
    icon.classList.toggle('favorite-icons_active', isFavorite);
  });
}
updateFavoriteButtons();
// Вызовем функцию после инициализации

 

/* document.addEventListener('DOMContentLoaded', function () {
  

}); */
 
window.addToFavs = addToFavs;
window.updateFavsUI = updateFavsUI;
window.clearFavs = clearFavs;
window.updateFavoriteButtons = updateFavoriteButtons;
