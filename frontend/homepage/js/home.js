let currentMessage = 0;
const messages = document.querySelectorAll('.speech-bubble');

function showNextMessage() {
    if (currentMessage < messages.length) {
        // Hide all messages
        messages.forEach(msg => {
            msg.classList.remove('active');
        });
        
        // Show current message
        messages[currentMessage].classList.add('active');
        
        currentMessage++;

        // Change button text for last message
        if (currentMessage === messages.length) {
            document.querySelector('.make-friend-btn').textContent = 'Make a friend';
        } else {
            document.querySelector('.make-friend-btn').textContent = 'Yes!!';
        }
    } else {
        // Reset to first message
        currentMessage = 0;
        document.querySelector('.make-friend-btn').textContent = 'Yes!!';
        showNextMessage();
    }
}

// Show first message on page load
window.addEventListener('DOMContentLoaded', () => {
    showNextMessage();
}); 