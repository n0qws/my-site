// === приветствие ===
console.log('🐾 добро пожаловать на сайт копчика!');

// === клик по карточке проекта ===
const projectCard = document.getElementById('mainProject');
const detailsBlock = document.getElementById('projectDetails');
const closeBtn = document.getElementById('closeDetails');

function showDetails() {
    detailsBlock.classList.remove('hidden');
    // плавный скролл к деталям
    detailsBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideDetails() {
    detailsBlock.classList.add('hidden');
}

// открытие по клику на карточку
projectCard.addEventListener('click', showDetails);

// закрытие по крестику
closeBtn.addEventListener('click', hideDetails);

// закрытие по клику вне блока (на фон)
detailsBlock.addEventListener('click', function(e) {
    // если клик именно по самому блоку (не по внутреннему контейнеру)
    if (e.target === detailsBlock) {
        hideDetails();
    }
});

// (опционально) закрытие по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !detailsBlock.classList.contains('hidden')) {
        hideDetails();
    }
});