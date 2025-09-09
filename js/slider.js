let isPaused = false;
        
const wrapper = document.getElementById('tickerWrapper');

function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
        wrapper.classList.add('paused');
    } else {
        wrapper.classList.remove('paused');
    }
}

// Add some interactive effects
document.querySelectorAll('.ticker-item').forEach(item => {
    item.addEventListener('click', () => {
        const overlay = item.querySelector('.overlay');
        const title = overlay.querySelector('h3').textContent;
        alert(`Viewing: ${title}\n\nThis would normally open a detailed view of the selected item.`);
    });
});