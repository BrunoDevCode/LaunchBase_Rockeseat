const Mask = {
  apply(input, func) {
    setTimeout(() => {
      input.value = Mask[func](input.value);
    }, 1);
  },

  formatPorcent(value) {
    value = value.replace(/\D/g, '');
    console.log(value);
    return (value = new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: 2,
    }).format(value / 10000));
  },

  formatCPF(value) {
    value = value.replace(/\D/g, '');

    /**
     * Primeira linha monta os dados que podem conter na mask
     * Segunda linha monta o estilo da mask
     */

    return (value = value.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    ));
  },
};

function playModal(modalOverlay) {
  const cards = document.querySelectorAll('.card');
  const modal = document.querySelector('.modal');

  for (let card of cards) {
    card.addEventListener('click', function () {
      const iframeId = card.getAttribute('id');
      window.location.href = `/courses/${iframeId}`;
    });
  }

  document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
    if (modal.classList.contains('maximize'))
      modal.classList.remove('maximize');
  });

  modalOverlay
    .querySelector('.maximize-modal')
    .addEventListener('click', function () {
      if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize');
      } else {
        modal.classList.add('maximize');
      }
    });
}

const modalOverlay = document.querySelector('.modal-overlay');

if (modalOverlay) {
  playModal(modalOverlay);
}
