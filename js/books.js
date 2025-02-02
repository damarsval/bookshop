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
  }, 
];

const books2 = [
  { 
    id: "BK-Z78JIG",
    image: "images/bracelet.webp",
    oldPrice: "359 &#8381;",
    newPrice: "284 &#8381;",
    discount: "- 21%", 
    title: "Гранатовый браслет",
    author: "Александр Куприн" 
  }, {
    id: "BK-OPLISJ", 
    image: "images/crime.webp",
    oldPrice: "388 &#8381;",
    newPrice: "296 &#8381;",
    discount: "- 24%", 
    title: "Преступление и наказание",
    author: "Федор Достоевский" 
  }, {
    id: "BK-6L8NID", 
    image: "images/dno.webp",
    oldPrice: "359 &#8381;",
    newPrice: "284 &#8381;",
    discount: "- 21%", 
    title: "На дне",
    author: "Максим Горький" 
  }, { 
    id: "BK-04MYXZ",
    image: "images/fathers.webp",
    oldPrice: "329 &#8381;",
    newPrice: "278 &#8381;",
    discount: "- 16%", 
    title: "Отцы и дети",
    author: "Иван Тургенев" 
  }, { 
    id: "BK-IJHZHF",
    image: "images/faust.webp",
    oldPrice: "388 &#8381;",
    newPrice: "296 &#8381;",
    discount: "- 24%", 
    title: "Фауст",
    author: "И. В. Гёте" 
  }, { 
    id: "BK-YGZ4SZ",
    image: "images/gore.webp",
    oldPrice: "359 &#8381;",
    newPrice: "284 &#8381;",
    discount: "- 21%", 
    title: "Горе от ума",
    author: "Александр Грибоедов" 
  },

 { id: "BK-ZC8J7G",
  image: "images/jane.webp",
  oldPrice: "388 &#8381;",
  newPrice: "296 &#8381;",
  discount: "- 24%", 
  title: "Джейн Эйр",
  author: "Шарлотта Бронте" 
}, {
  id: "BK-OPUPZJ", 
  image: "images/lord.webp",
  oldPrice: "447 &#8381;",
  newPrice: "341 &#8381;",
  discount: "- 24%", 
  title: "Повелитель мух",
  author: "Уильям Голдинг" 
}, {
  id: "BK-X4YGAB", 
  image: "images/martin.webp",
  oldPrice: "376 &#8381;",
  newPrice: "287 &#8381;",
  discount: "- 24%", 
  title: "Мартин Иден",
  author: "Джек Лондон" 
}, { 
  id: "BK-VZXCQ6",
  image: "images/mouse.webp",
  oldPrice: "435 &#8381;",
  newPrice: "332 &#8381;",
  discount: "- 24%", 
  title: "О мышах и людях",
  author: "Джон Стейнбек" 
},
{ 
  id: "BK-04JJZZ",
  image: "images/portrait.webp",
  oldPrice: "329 &#8381;",
  newPrice: "278 &#8381;",
  discount: "- 16%", 
  title: "Портрет Дориана Грея",
  author: "Оскар Уайльд" 
}, { 
  id: "BK-CG3YAK",
  image: "images/pride.webp",
  oldPrice: "365 &#8381;",
  newPrice: "299 &#8381;",
  discount: "- 18%", 
  title: "Гордость и предубеждение",
  author: "Джейн Остин" 
}, { 
  id: "BK-L5IHCG",
  image: "images/prince.webp",
  oldPrice: "329 &#8381;",
  newPrice: "278 &#8381;",
  discount: "- 16%", 
  title: "Маленький принц",
  author: "Антуан де Сент-Экзюпери" 
},
{ 
  id: "BK-E6GLSR",
  image: "images/steppenwolf.webp",
  oldPrice: "801 &#8381;",
  newPrice: "611 &#8381;",
  discount: "- 15%", 
  title: "Степной волк",
  author: "Герман Гессе" 
}, { 
  id: "BK-K7NUAK",
  image: "images/us.webp",
  oldPrice: "359 &#8381;",
  newPrice: "284 &#8381;",
  discount: "- 21%", 
  title: "Мы",
  author: "Евгений Замятин" 
}, { 
  id: "BK-B9BLSN",
  image: "images/gates.webp",
  oldPrice: "447 &#8381;",
  newPrice: "341 &#8381;",
  discount: "- 24%", 
  title: "Ворота Расёмон",
  author: "Рюноскэ Акутагава" 
}
];

const books3 = [
  { 
    id: "BK-XZ8JIG",
    image: "images/humilated.webp",
    oldPrice: "329 &#8381;",
    newPrice: "278 &#8381;",
    discount: "- 16%", 
    title: "Униженные и оскорбленные",
    author: "Федор Достоевский" 
  }, {
    id: "BK-7U5HSJ", 
    image: "images/blindspot.webp",
    oldPrice: "1 297 &#8381;",
    newPrice: "989 &#8381;",
    discount: "- 24%", 
    title: "Ложная слепота",
    author: "Питер Уоттс" 
  }, {
    id: "BK-R5IHLD", 
    image: "images/usualstory.webp",
    oldPrice: "388 &#8381;",
    newPrice: "296 &#8381;",
    discount: "- 24%", 
    title: "Обыкновенная история",
    author: "Иван Гончаров" 
  }, { 
    id: "BK-VН3YXZ",
    image: "images/odyssey.webp",
    oldPrice: "1 415 &#8381;",
    newPrice: "1 079 &#8381;",
    discount: "- 24%", 
    title: "Илиада. Одиссея",
    author: "Гомер" 
  }, { 
    id: "BK-R5ZASQ",
    image: "images/timemachine.webp",
    oldPrice: "424 &#8381;",
    newPrice: "323 &#8381;",
    discount: "- 24%", 
    title: "Машина времени. Остров доктора Моро",
    author: "Герберт Уэллс" 
  }, { 
    id: "BK-HY8CZQ",
    image: "images/ctulhu.webp",
    oldPrice: "919 &#8381;",
    newPrice: "701 &#8381;",
    discount: "- 24%", 
    title: "Зов Ктулху",
    author: "Говард Филлипс Лавкрафт" 
  },

 { id: "BK-T5ZAGQ",
  image: "images/chehov.webp",
  oldPrice: "860 &#8381;",
  newPrice: "656 &#8381;",
  discount: "- 24%", 
  title: "Малое собрание сочинений",
  author: "Антон Чехов" 
}, {
  id: "BK-OYJPZJ", 
  image: "images/android.webp",
  oldPrice: "801 &#8381;",
  newPrice: "611 &#8381;",
  discount: "- 24%", 
  title: "Мечтают ли андроиды об электроовцах?",
  author: "Филип Киндред Дик" 
}, {
  id: "BK-S1JIAK", 
  image: "images/firstlaw.webp",
  oldPrice: "3 067 &#8381;",
  newPrice: "2 339 &#8381;",
  discount: "- 24%", 
  title: "Первый закон. Трилогия",
  author: "Джо Аберкромби" 
}, { 
  id: "BK-NC5LT6",
  image: "images/neuromancer.webp",
  oldPrice: "1 651 &#8381;",
  newPrice: "1 259 &#8381;",
  discount: "- 24%", 
  title: `Нейромант. Трилогия "Киберпространство"`,
  author: "Уильям Гибсон" 
},
{ 
  id: "BK-F6KHFC",
  image: "images/temple.webp",
  oldPrice: "365 &#8381;",
  newPrice: "278 &#8381;",
  discount: "- 16%", 
  title: "Золотой Храм",
  author: "Юкио Мисима" 
}, { 
  id: "BK-T2XZWJ",
  image: "images/player.webp",
  oldPrice: "359 &#8381;",
  newPrice: "284 &#8381;",
  discount: "- 21%", 
  title: "Игрок",
  author: "Федор Достоевский" 
}, { 
  id: "BK-H4VLNG",
  image: "images/letters.webp",
  oldPrice: "359 &#8381;",
  newPrice: "284 &#8381;",
  discount: "- 21%", 
  title: "Маленький принц",
  author: "Антуан де Сент-Экзюпери" 
},
{ 
  id: "BK-E6GLSR",
  image: "images/demian.webp",
  oldPrice: "424 &#8381;",
  newPrice: "323 &#8381;",
  discount: "- 15%", 
  title: "Демиан",
  author: "Герман Гессе" 
}, { 
  id: "BK-Y7LVSK",
  image: "images/monte.webp",
  oldPrice: "412 &#8381;",
  newPrice: "314 &#8381;",
  discount: "- 24%", 
  title: "Граф Монте-Кристо. Том 1",
  author: "Александр Дюма (отец)" 
}, { 
  id: "BK-Y8LVSK",
  image: "images/monte-2.webp",
  oldPrice: "412 &#8381;",
  newPrice: "314 &#8381;",
  discount: "- 24%", 
  title: "Граф Монте-Кристо. Том 2",
  author: "Александр Дюма (отец)" 
},
];

