 function updateCounters() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const favsItems = JSON.parse(localStorage.getItem('favs')) || [];

  const cartCounter = document.querySelector('.js-cart-item-counter');
  const favsCounter = document.querySelector('.js-favs-item-counter');

  if (cartCounter) {
    const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    cartCounter.textContent = totalCartItems > 0 ? totalCartItems : '';
    cartCounter.style.display = totalCartItems > 0 ? 'flex' : 'none';
  }

  if (favsCounter) {
    const totalFavsItems = favsItems.length;

    favsCounter.textContent = totalFavsItems > 0 ? totalFavsItems : '';
    favsCounter.style.display = totalFavsItems > 0 ? 'flex' : 'none';
  }
}
