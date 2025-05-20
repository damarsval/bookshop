document.addEventListener('DOMContentLoaded', function () {
  const favsItemsContainer = document.querySelector('.js-favs-items');
  const deleteAllFavsBtn = document.querySelector('.js-delete-all-favs');

  let favs = JSON.parse(localStorage.getItem('favsCart')) || [];

  function saveFavs() {
    localStorage.setItem('favsCart', JSON.stringify(favs));
  }

  function removeFromFavs(productId) {
    const index = favs.findIndex(item => item.id === productId);
    if (index >= 0) {
      favs.splice(index, 1);
      saveFavs();
      updateFavsUI();
    }
  }

  function addToFavs(product) {
    const index = favs.findIndex(item => item.id === product.id);
    if (index >= 0) {
      removeFromFavs(product.id);
    } else {
      favs.push(product);
      saveFavs();
      updateFavsUI();
    }
  }

  function clearFavs() {
    if (confirm('Вы точно хотите очистить "Избранное"?')) {
      favs = [];
      saveFavs();
      updateFavsUI();
    }
  }

  function updateFavsUI() {
    favsItemsContainer.innerHTML = '';
    favs.forEach(item => {
      const isActive = favs.some(fav => fav.id === item.id);
    const favIconClass = isActive ? 'favorite-icons favorite-icons_active' : 'favorite-icons';

      const html = `
        <article class="product-card" data-id="${item.id}">
          <div class="product-card__img-container">
            <img class="product-card__img" src="${item.image}" alt="Обложка книги">
          </div>
          <div class="product-card__content">
            <div class="product-card__price">
              <span class="product-price__old">${item.oldPrice}</span>
              <div class="product-price__new">
                ${item.newPrice}
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
  document.body.addEventListener('click', function (e) {
    const favBtn = e.target.closest('.js-add-to-favorite');
    if (!favBtn) return;

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

    const icon = favBtn.querySelector('.favorite-icons');
  if (icon) {
    icon.classList.toggle('favorite-icons_active');
  }
  });

  deleteAllFavsBtn.addEventListener('click', clearFavs);

  updateFavsUI();
  updateFavIconsOnPage();

  function updateFavIconsOnPage() {
  document.querySelectorAll('.js-add-to-favorite').forEach(button => {
    const productId = button.dataset.productId;
    const icon = button.querySelector('.favorite-icons');
    if (!icon) return;

    if (favs.some(item => item.id === productId)) {
      icon.classList.add('favorite-icons_active');
    } else {
      icon.classList.remove('favorite-icons_active');
    }
  });
}

});
 
