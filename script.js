// приветствие
console.log('🐾 добро пожаловать на сайт копчика!');

// небольшой эффект для карточки (дополнительно)
const card = document.getElementById('mainProject');
if (card) {
    card.addEventListener('click', function(e) {
        // ссылка откроется в новом окне автоматически из-за target="_blank"
        // но можем добавить лог
        console.log('открываем проект в новом окне');
    });
}
