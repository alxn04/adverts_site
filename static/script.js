const backButton = document.getElementById('backButton');

// Добавляем обработчик события "click"
backButton.addEventListener('click', () => {
    // Перенаправляем пользователя на главную страницу
    window.location.href = '/';
});