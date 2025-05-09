// отслеживаем клик на странице
window.addEventListener('click', function(event) {

  //проверяем, что клик был совершен по кнопке "В корзину"
  if (event.target.hasAttribute('data-cart')) {
    
    const productCard = event.target.closest('.product-card');
    
  }
})