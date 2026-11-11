// Menu responsivo
document.querySelectorAll('.menu-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const nav = button.parentElement.querySelector('.nav');
    nav.classList.toggle('open');
    button.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
});

// Modal interativo da galeria
const modal = document.getElementById('artModal');
if (modal) {
  const title = document.getElementById('modalTitle');
  const text = document.getElementById('modalText');
  const close = modal.querySelector('.modal-close');

  document.querySelectorAll('.art-card').forEach(card => {
    const openModal = () => {
      title.textContent = card.dataset.title;
      text.textContent = card.dataset.info;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    };
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal();
      }
    });
  });

  close.addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

// Curiosidade aleatória na página Quem é Banksy
const factButton = document.getElementById('factButton');
if (factButton) {
  const facts = [
    'Banksy usa estêncil para conseguir criar imagens rapidamente.',
    'Bristol, no Reino Unido, está ligada ao começo de sua trajetória.',
    'Os ratos são personagens recorrentes em seus grafites.',
    'Banksy dirigiu o documentário Exit Through the Gift Shop.'
  ];
  factButton.addEventListener('click', () => {
    document.getElementById('factReveal').textContent =
      facts[Math.floor(Math.random() * facts.length)];
  });
}

// Quiz simples na página de curiosidades
document.querySelectorAll('.quiz-options button').forEach(button => {
  button.addEventListener('click', () => {
    const result = document.getElementById('quizResult');
    if (button.dataset.answer === 'correct') {
      result.textContent = 'Isso mesmo! Banksy utiliza bastante a técnica de estêncil.';
    } else {
      result.textContent = 'Não é essa. Tente novamente!';
    }
  });
});

// Pré-visualização do vídeo escolhido na página Vídeo
const videoUpload = document.getElementById('videoUpload');
if (videoUpload) {
  videoUpload.addEventListener('change', () => {
    const file = videoUpload.files[0];
    if (!file) return;
    const player = document.getElementById('videoPlayer');
    const video = document.createElement('video');
    video.controls = true;
    video.src = URL.createObjectURL(file);
    player.innerHTML = '';
    player.appendChild(video);
  });
}
