
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {

   updateCounters();     // сразу обновляем счетчики при загрузке
  setupCartButtons();   // один раз вешаем обработчики на кнопки плюс/минус
  

function getTotalQuantity(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}


  // Элементы DOM
  const cartContainer = document.querySelector('.cart-container');
  const cartItemsContainer = document.querySelector('.js-cart-items');
  const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
  const deleteAllButton = document.querySelector('.delete-all');
  const cartTitle = document.querySelector('.cart-title');
  const notification = document.getElementById('notification');
  const cartItemCounter = document.querySelector('.js-cart-item-counter');



updateFavsUI();
 
  // Функция обновления интерфейса корзины
  function updateCartUI() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      if (cartContainer) cartContainer.style.display = 'none';
      updateCartCounter(0);
      return;
    }

    if (cartContainer) cartContainer.style.display = 'block';

    let totalItems = 0;
    let totalPrice = 0;
    let totalDiscount = 0;

    cart.forEach(item => {
      totalItems += item.quantity;
      totalPrice += item.newPrice * item.quantity;
      totalDiscount += (item.oldPrice - item.newPrice) * item.quantity;

      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.dataset.productId = item.id;

      cartItemElement.innerHTML = `
        <div class="cart-item__img-container">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="cart-item__right">
          <div class="cart-item__descr">
            <div class="cart-item__title">${item.title}</div>
            <div class="cart-item__author">${item.author}</div>
            <div class="cart-item__weight">${item.weight}</div>
          </div>
          <div class="cart-item__counter">
            <div class="cart-item__quantity">
              <button class="item-quantity__btn cart-item__min">-</button>
              <input type="number" class="item-quantity__counter" value="${item.quantity}" min="1">
              <button class="item-quantity__btn cart-item__plus">+</button>
            </div>
          </div>
          <div class="item-price">
            <div class="item-price__old">${item.oldPrice} ₽</div>
            <div class="item-price__new">${item.newPrice} ₽</div>
          </div>
          <div class="cart-item__btns">
            <button class="cart-item__btns-btn js-cart-add-to-favorite" data-product-id ="${item.id}">
              <i class="material-icons favorite-icons item-icon">favorite</i>
            </button>
            <button class="cart-item__btns-btn cart-item__delete">
              <span class="material-icons item-icon">delete</span>
            </button>
          </div>
        </div>
      `;

      cartItemsContainer.appendChild(cartItemElement);

      // Обработчики событий
      const plusBtn = cartItemElement.querySelector('.cart-item__plus');
      const minusBtn = cartItemElement.querySelector('.cart-item__min');
      const quantityInput = cartItemElement.querySelector('.item-quantity__counter');
      const deleteBtn = cartItemElement.querySelector('.cart-item__delete');

      plusBtn.addEventListener('click', () => {
  
        updateQuantity(item.id, item.quantity + 1);
        updateCounters();
      });
      minusBtn.addEventListener('click', () => {
        if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
      });
      quantityInput.addEventListener('change', (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        updateQuantity(item.id, val);
        
      });
      deleteBtn.addEventListener('click', () => removeFromCart(item.id));
    });

    updateCartSummary(totalItems, totalPrice, totalDiscount);
    cartTitle.textContent = `Корзина (${totalItems})`;
 updateCartButtons();
  updateFavoriteButtons();
    //updateCartCounter(totalItems); // Обновляем счётчик
  }

  function setupCartButtons() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-item__plus')) {
      const id = e.target.closest('.cart-item').dataset.id;
      updateQuantity(id, 1); // Увеличим на 1
    }

    if (e.target.classList.contains('cart-item__min')) {
      const id = e.target.closest('.cart-item').dataset.id;
      const item = getItemFromCart(id);
      if (item && item.quantity > 1) {
        updateQuantity(id, -1); // Уменьшим на 1
      }
    }
  });
}


function updateQuantity(id, delta) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const index = cart.findIndex(i => i.id === id);
  if (index !== -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounters();
    // renderCart(); // если есть перерисовка корзины
  }
}

function getItemFromCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart.find(item => item.id === id);
}


  // Функция обновления итоговой информации
  function updateCartSummary(totalItems, totalPrice, totalDiscount) {
    const itemsText = `${totalItems} ${getPlural(totalItems, ['товар', 'товара', 'товаров'])}`;

    const infoTitle = document.querySelector('.top-info__item .info-item_title');
    const infoValue = document.querySelector('.top-info__item .info-item__value');
    const discValue = document.querySelector('.top-info__item--disc .info-item__value');
    const amountValue = document.querySelector('.top-info__item--amount .info-item__amount');

    if (infoTitle) infoTitle.textContent = itemsText;
    if (infoValue) infoValue.textContent = `${totalPrice + totalDiscount} ₽`;
    if (discValue) discValue.textContent = `-${totalDiscount} ₽`;
    if (amountValue) amountValue.textContent = `${totalPrice} ₽`;

  }
  // Функция добавления товара в корзину
  function addToCart(product) {

    const existingItem = cart.find(item => item.id === product.id);
    //console.log(existingItem);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        author: product.author,
        newPrice: product.price,
        discount: product.discount,
        oldPrice: product.oldPrice,
        image: product.image,
        weight: product.weight,
        quantity: 1
      });
    }
    

    saveCart();
    updateCartButtons();
    
    updateCartUI();
    updateCounters();
   
    
  }
  
  // Функция обновления количества товара
  function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
      item.quantity = newQuantity;
      saveCart();
      updateCartUI();
      
    }
    
  }
  
  // Функция удаления товара из корзины
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    updateCartButtons();
    showNotification('Товар удален из корзины');
  }
  
  // Функция очистки корзины
  function clearCart() {
    if (confirm('Вы точно хотите очистить корзину?')) {
      cart = [];
      saveCart();
      updateCartUI();
      showNotification('Корзина очищена');
    }
  }
  
  // Функция сохранения корзины в localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounters();
  }
  
function updateCartButtons() {
  const buttons = document.querySelectorAll('.js-add-to-cart');
  
  buttons.forEach(button => {
    const productId = button.dataset.productId;
    if (!productId) return;
    
    const inCart = isProductInCart(productId);
    
    // Товар В корзине - добавляем класс и меняем текст
    if (inCart) {
      button.classList.add('added-to-cart');
      button.textContent = 'В корзине';
    } 
    // Товара НЕТ в корзине - убираем класс
    else {
      button.classList.remove('added-to-cart');
      button.textContent = 'В корзину';
    }
    
   /*  // Отладочная информация
    console.log(`Кнопка ${productId}:`, {
      inCart: inCart,
      class: button.classList.contains('added-to-cart'),
      text: button.textContent
    }); */
  });
}

  function isProductInCart(productId) {
    return cart.some(item => String(item.id) === String(productId));
    
  }

  // Функция показа уведомления
  /* function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 3000);
  } */

  // Функция для правильного склонения слов
  function getPlural(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 
        ? 2 
        : cases[Math.min(number % 10, 5)]
    ];
  }
  
 

  // Обработчики событий
document.body.addEventListener('click', function(event) {
  if (event.target.closest('.js-add-to-cart')) {
    const button = event.target;
    const productCard = button.closest('.product-card');

    

    
    

    if (!productCard) return;

    const productId = button.dataset.productId;

    // Если товар уже в корзине — удаляем
    if (isProductInCart(productId)) {
      window.location.href = './cart.html'; // Замени на свой путь
      return;
    }

    // Иначе добавляем
    const priceText = productCard.querySelector('.product-price__new')?.textContent || '0';
    const oldPriceText = productCard.querySelector('.product-price__old')?.textContent || '0';

    const product = {
      id: productId,
      title: productCard.querySelector('.product-info__title').textContent,
      author: productCard.querySelector('.product-info__author').textContent,
      price: parseFloat(priceText.replace(/\s|₽/g, '')),
      oldPrice: parseFloat(oldPriceText.replace(/\s|₽/g, '')),
      discount: productCard.querySelector('.product-price__discount').textContent,
      image: productCard.querySelector('.product-card__img').src,
      weight: productCard.getAttribute('product-weight')
    };

    addToCart(product);
    
    showNotification('Товар добавлен в корзину');

  }
});

document.body.addEventListener('click', function (e) {
  
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
      author: productCard.querySelector('.product-info__author').textContent,
      weight: productCard.getAttribute('product-weight')
    };
    addToFavs(favsProduct);
    
   //updateFavoriteButtons();
   updateFavsUI();
   updateCartButtons();
  });


  document.body.addEventListener('click', function (e) {
  
    
    const favBtn = e.target.closest('.js-cart-add-to-favorite');
    if (!favBtn) return;

  const icon = favBtn.querySelector('.material-icons');
  if (!icon) return;

    const productCard = favBtn.closest('.cart-item');
    const itemID = favBtn.dataset.productId;
    
    const item = cart.find(product => product.id === itemID);
  if (!item) {
    console.log('Товар не найден в корзине');
    return;
  }

  // Проверка: уже есть в избранном?
  const alreadyInFavs = favs.some(product => product.id === itemID);
  if (alreadyInFavs) {
    removeFromFavs(item);
  }

  // Добавляем в избранное
  //favs.push(item);
  

    
    addToFavs(item);
    console.log('Добавлено в избранное:', item);
   
   
   //updateFavoriteButtons();
   updateFavsUI();
  });
  
if (deleteAllButton) {
    deleteAllButton.addEventListener('click', clearCart);
} else {
    console.warn('Элемент .delete-all не найден');
}
/* emailjs.init("9VRkqdXecVxphPm-3");
document.querySelector('.checkout__btn').addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert('Корзина пуста');
    return;
  }

  const orderHTML = cart.map(item => `
    <tr style="border-bottom:1px solid #ccc;">
      <td style="padding:10px;"><img src="${item.image}" alt="${item.title}" width="60"></td>
      <td style="padding:10px;">${item.title}</td>
      <td style="padding:10px;">${item.quantity} × ${item.newPrice}₽</td>
      <td style="padding:10px;">${item.quantity * item.newPrice}₽</td>
    </tr>
  `).join('');

  const totalPrice = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

  const fullHTML = `
    <table style="border-collapse: collapse; width: 100%; font-family: sans-serif;">
      <thead>
        <tr>
          <th style="text-align: left; padding: 10px;">Обложка</th>
          <th style="text-align: left; padding: 10px;">Название</th>
          <th style="text-align: left; padding: 10px;">Количество и цена</th>
          <th style="text-align: left; padding: 10px;">Сумма</th>
        </tr>
      </thead>
      <tbody>
        ${orderHTML}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" style="padding: 10px; text-align: right;"><strong>Итого:</strong></td>
          <td style="padding: 10px;"><strong>${totalPrice}₽</strong></td>
        </tr>
      </tfoot>
    </table>
  `;

  const userEmail = prompt('Введите ваш email:');
  if (!userEmail) {
    alert('Email обязателен для оформления заказа');
    return;
  }

  emailjs.send('service_rxkfh9j', 'template_pa1jrrt', {
    order_html: fullHTML,
    user_email: userEmail
  }).then(() => {
    alert('Заказ с обложками отправлен!');
    // Можно добавить редирект или очистку корзины на странице
  }).catch(err => {
    alert('Ошибка при отправке заказа, попробуйте позже.');
    console.error(err);
  });
});
 */
  

  // Инициализация интерфейса
  
   updateCounters();

  updateCartButtons();
  updateFavoriteButtons();
  updateCartUI();
  updateFavsUI();
});


