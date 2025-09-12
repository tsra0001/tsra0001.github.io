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