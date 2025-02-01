const books = [
  { 
    id: "BK-ZY8J7G",
    image: "images/thh.webp",
    oldPrice: "530 &#8381;",
    newPrice: "420 &#8381;",
    discount: "- 15%", 
    title: "The Haunted Hotel",
    author: "Wilkie Collins" 
  }, {
    id: "BK-OPLGSJ", 
    image: "images/osamu.webp",
    oldPrice: "330 &#8381;",
    newPrice: "264 &#8381;",
    discount: "- 20%", 
    title: "Человек недостойный",
    author: "Осаму Дадзай" 
  }, {
    id: "BK-6S6DDD", 
    image: "images/hawking.webp",
    oldPrice: "450 &#8381;",
    newPrice: "315 &#8381;",
    discount: "- 30%", 
    title: "Теория всего",
    author: "Стивен Хокинг" 
  }, { 
    id: "BK-04JJZZ",
    image: "images/carr.webp",
    oldPrice: "1 100 &#8381;",
    newPrice: "935 &#8381;",
    discount: "- 15%", 
    title: "Слепой цирюльник",
    author: "Джон Карр" 
  }, { 
    id: "BK-TZ4UAK",
    image: "images/goldcow.webp",
    oldPrice: "620 &#8381;",
    newPrice: "434 &#8381;",
    discount: "- 30%", 
    title: "Золотой теленок",
    author: "Илья Ильф, Евгений Петров" 
  }, { 
    id: "BK-L5F3CG",
    image: "images/fudz.webp",
    oldPrice: "1 020 &#8381;",
    newPrice: "856 &#8381;",
    discount: "- 21%", 
    title: "Оглянись",
    author: "Фудзимото Тацуки" 
  }, 
  

  { 
    id: "BK-YF8J7G",
    image: "images/notesfromundeg.jpg",
    oldPrice: "1 440 &#8381;",
    newPrice: "1 123 &#8381;",
    discount: "- 22%", 
    title: "Записки из подполья. Повести и рассказы",
    author: "Федор Достоевский" 
  }, {
    id: "BK-FPXGSJ", 
    image: "images/krut.webp",
    oldPrice: "1 553 &#8381;",
    newPrice: "1 169 &#8381;",
    discount: "- 24%", 
    title: "Круть",
    author: "Виктор Пелевин" 
  }, {
    id: "BK-8UBKPO", 
    image: "images/wheel.webp",
    oldPrice: "2 005 &#8381;",
    newPrice: "1 630 &#8381;",
    discount: "- 19%", 
    title: "Колесо Времени. Книга 14. Память Света",
    author: "Роберт Джордан, Брендон Сандерсон" 
  }, { 
    id: "BK-89CIZLZ",
    image: "images/ruskitchen.webp",
    oldPrice: "1 096 &#8381;",
    newPrice: "836 &#8381;",
    discount: "- 24%", 
    title: "Русская кухня. Большая книга рецептов",
    author: "Е. Носкова" 
  }, { 
    id: "BK-TZ8QSD",
    image: "images/thegrayhouse.webp",
    oldPrice: "2 099 &#8381;",
    newPrice: "1 499 &#8381;",
    discount: "- 29%", 
    title: "Дом, в котором...",
    author: "Мариам Петросян" 
  }, { 
    id: "BK-YF5CIG",
    image: "images/thousandfaces.webp",
    oldPrice: "666 &#8381;",
    newPrice: "481 &#8381;",
    discount: "- 28%", 
    title: "Тысячеликий герой (#экопокет)",
    author: "Джозеф Кэмпбелл" 
  },
  
  
  {
    id: "BK-ZWHO9J", 
    image: "images/backman.webp",
    oldPrice: "1 101 &#8381;",
    newPrice: "839 &#8381;",
    discount: "- 24%", 
    title: "Тревожные люди",
    author: "Фредрик Бакман" 
  },
   {
    id: "BK-8GDTMU", 
    image: "images/oil.webp",
    oldPrice: "1 379 &#8381;",
    newPrice: "1 019 &#8381;",
    discount: "- 26%", 
    title: "Масло",
    author: "Асако Юзуки" 
  }, { 
    id: "BK-40VJIZ",
    image: "images/forest.webp",
    oldPrice: "1 034 &#8381;",
    newPrice: "764 &#8381;",
    discount: "- 26%", 
    title: "Лес",
    author: "Светлана Тюльбашева" 
  }, { 
    id: "BK-TU9LSK",
    image: "images/vegetation.webp",
    oldPrice: "1 028 &#8381;",
    newPrice: "734 &#8381;",
    discount: "- 29%", 
    title: "Вегетация",
    author: "Алексей Иванов" 
  }, {
    id: "BK-I8SHID", 
    image: "images/cafe.webp",
    oldPrice: "436 &#8381;",
    newPrice: "314 &#8381;",
    discount: "- 28%", 
    title: "Кафе на краю земли",
    author: "Джон Стрелеки" 
  }, { 
    id: "BK-09YPOZ",
    image: "images/wildrobot.webp",
    oldPrice: "978 &#8381;",
    newPrice: "792 &#8381;",
    discount: "- 19%", 
    title: "Миссия дикого робота",
    author: "Питер Браун" 
  }
];

const books2 = [
  { 
    id: "BK-ZY8J7G",
    image: "images/notesfromundeg.jpg",
    oldPrice: "530 &#8381;",
    newPrice: "420 &#8381;",
    discount: "- 15%", 
    title: "The Haunted Hotel",
    author: "Wilkie Collins" 
  }, {
    id: "BK-OPLGSJ", 
    image: "images/osamu.webp",
    oldPrice: "330 &#8381;",
    newPrice: "264 &#8381;",
    discount: "- 20%", 
    title: "Человек недостойный",
    author: "Осаму Дадзай" 
  }, {
    id: "BK-6S6DDD", 
    image: "images/hawking.webp",
    oldPrice: "450 &#8381;",
    newPrice: "315 &#8381;",
    discount: "- 30%", 
    title: "Теория всего",
    author: "Стивен Хокинг" 
  }, { 
    id: "BK-04JJZZ",
    image: "images/carr.webp",
    oldPrice: "1100 &#8381;",
    newPrice: "935 &#8381;",
    discount: "- 15%", 
    title: "Слепой цирюльник",
    author: "Джон Карр" 
  }, { 
    id: "BK-TZ4UAK",
    image: "images/goldcow.webp",
    oldPrice: "620 &#8381;",
    newPrice: "434 &#8381;",
    discount: "- 30%", 
    title: "Золотой теленок",
    author: "Илья Ильф, Евгений Петров" 
  }, { 
    id: "BK-L5F3CG",
    image: "images/fudz.webp",
    oldPrice: "1020 &#8381;",
    newPrice: "856 &#8381;",
    discount: "- 21%", 
    title: "Оглянись",
    author: "Фудзимото Тацуки" 
  },


];


/*products.forEach((product) => {
  const productClone = productTemplate.cloneNode(true);
  productClone.querySelector('.product-card__img').src = product.image;
  productClone.querySelector('.product-info__title').textContent = product.title;
  productClone.querySelector('.product-info__author').textContent = product.author;
  productClone.querySelector('.product-price__old').textContent = product.oldPrice;
  productClone.querySelector('.product-price__new').textContent = product.newPrice;
  productClone.querySelector('.product-price__discount').textContent = product.discount;

  
  swiperWrapper.appendChild(productClone);
});
*/

/*var swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});*/
