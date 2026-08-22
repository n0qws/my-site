// Небольшая анимация при наведении на кнопку CTA
document.querySelector('.cta-box').addEventListener('mouseenter', () => {
    document.querySelector('.cta-box .arrow').style.transform = 'translateX(10px)';
});

document.querySelector('.cta-box').addEventListener('mouseleave', () => {
    document.querySelector('.cta-box .arrow').style.transform = 'translateX(0)';
});

// Появление блоков при прокрутке (Вайб-кодер стиль, простой и эффективный)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Применяем анимацию к основным секциям
document.querySelectorAll('.projects, .stats-section, .footer').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});
