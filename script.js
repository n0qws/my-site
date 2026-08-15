// Приветствие в консоли
console.log('Добро пожаловать на мой сайт!');

// Эффект для карточек проектов при клике
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        alert('Вы открыли: ' + this.querySelector('h3').textContent);
    });
});