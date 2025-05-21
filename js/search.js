document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.trim().toLowerCase();

    // Позиционируем результаты строго под input
    const rect = searchInput.getBoundingClientRect();
    searchResults.style.top = rect.bottom + window.scrollY + 'px';
    searchResults.style.left = rect.left + window.scrollX + 'px';
    searchResults.style.width = rect.width + 'px';

    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    // Пример поиска — замените на свою реализацию
    const results = window.books.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query)
    );
    
    displayResults(results);
  });

  function displayResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
      searchResults.style.display = 'block';
      return;
    }

    results.forEach(book => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <img src="${book.image}" alt="${book.title}" onerror="this.src='images/default-book.jpg'">
        <div class="search-result-info">
          <h4>${book.title}</h4>
          <p>${book.author} • ${book.newPrice}</p>
        </div>
      `;
      item.addEventListener('click', () => {
        window.location.href = `product.html?id=${book.id}`;
      });
      searchResults.appendChild(item);
    });

    searchResults.style.display = 'block';
  }

  // Закрываем результаты при клике вне поиска
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-bar_container')) {
      searchResults.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
  if (searchResults.style.display === 'block') {
    const rect = searchInput.getBoundingClientRect();
    searchResults.style.top = rect.bottom + window.scrollY + 'px';
    searchResults.style.left = rect.left + window.scrollX + 'px';
    searchResults.style.width = rect.width + 'px';
  }
});
});
