const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
    card.addEventListener('click', function() {
        const iframeId = card.getAttribute('id');
        window.location.href = `/courses/${iframeId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
    if (modal.classList.contains('maximize'))
        modal.classList.remove('maximize')
})

modalOverlay.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize');
    } else {
        modal.classList.add('maximize');
    }
})