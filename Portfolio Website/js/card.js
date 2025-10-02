document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to the name
    const nameElement = document.querySelector('.hero h1');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    setTimeout(() => {
        let i = 0;
        const typeWriter = setInterval(() => {
            nameElement.textContent += originalText.charAt(i);
            i++;
            if (i >= originalText.length) {
                clearInterval(typeWriter);
            }
        }, 100);
    }, 1000);
});