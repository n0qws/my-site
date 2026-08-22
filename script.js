// Функции для открытия и закрытия модального окна
function openModal() {
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Закрытие окна при клике мимо контента
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Анимация кнопки CTA
const cta = document.querySelector('.cta-box');
if (cta) {
    cta.addEventListener('mouseenter', () => cta.querySelector('.arrow').style.transform = 'translateX(10px)');
    cta.addEventListener('mouseleave', () => cta.querySelector('.arrow').style.transform = 'translateX(0)');
}

// Анимация появления блоков при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.projects, .stats-section, .footer').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});
