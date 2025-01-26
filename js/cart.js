const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Сохранение корзины в localStorage
/*function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}*/

// Добавление товара в корзину
function addToCart(book) {
  const existingItem = cart.find(item => item.title === book.title);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
  saveCart();
}

// Удаление товара из корзины
function removeFromCart(bookTitle) {
  const index = cart.findIndex(item => item.title === bookTitle);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  saveCart();
}

// Отображение корзины
function updateCartDisplay() {
  const cartItemsContainer = document.querySelector('.js-cart-items');
  const cartTotalPriceElement = document.querySelector('.js-cart-total-price');

  cartItemsContainer.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const itemTotal = parseInt(item.newPrice) * item.quantity;
    totalPrice += itemTotal;

    const cartItemHTML = `
      <div class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-title">${item.title}</span>
          <span class="cart-item-quantity">Количество: ${item.quantity}</span>
        </div>
        <div class="cart-item-actions">
          <span class="cart-item-price">${itemTotal} ₽</span>
          <button class="cart-item-remove-btn" data-title="${item.title}">Удалить</button>
        </div>
      </div>
    `;
    cartItemsContainer.innerHTML += cartItemHTML;
  });

  cartTotalPriceElement.textContent = `${totalPrice} ₽`;

  // Добавляем обработчики для кнопок удаления
  document.querySelectorAll('.cart-item-remove-btn').forEach(button => {
    button.addEventListener('click', () => {
      removeFromCart(button.dataset.title);
      updateCartDisplay();
    });
  });
}

// Очистка корзины
document.querySelector('.js-cart-clear-btn').addEventListener('click', () => {
  cart.length = 0;
  saveCart();
  updateCartDisplay();
});

// Инициализация корзины при загрузке страницы
updateCartDisplay();
