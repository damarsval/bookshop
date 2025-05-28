emailjs.init("9VRkqdXecVxphPm-3");

document.querySelector('.checkout__btn').addEventListener('click', () => {
  const orderForm = document.querySelector('.order__form');

  if (orderForm) orderForm.style.display = 'flex';

}) 

document.querySelector('.final__checkout-btn').addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    alert('Корзина пуста');
    return;
  }

  const nameInput = document.querySelector('.input__name');
  const emailInput = document.querySelector('.input__email');
  const phoneInput = document.querySelector('.input__phone');


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

  const userName = nameInput.value;
  const userEmail = emailInput.value;
  if (!userEmail) {
    alert('Email обязателен для оформления заказа');
    return;
  }
console.log(cart);
  emailjs.send('service_rxkfh9j', 'template_pa1jrrt', {
    user_name: userName, 
    order_html: fullHTML,
    user_email: userEmail
  }).then(() => {
    alert('Заказ с обложками отправлен!');
  }).catch(err => {
    
    console.error(err);
  });

 
});
