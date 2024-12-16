const favoriteIcon = document.querySelectorAll('.favorite-icons');
 document.querySelectorAll('.favorite-btn').forEach((button, index) => {
  button.addEventListener('click', function() {
     
    favoriteIcon[index].classList.toggle('favorite-icons_active');
});
});