window.books = [...books, ...books2, ...books3];
localStorage.setItem('allBooks', JSON.stringify(window.books));
