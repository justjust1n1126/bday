const button = document.getElementById('surprise-btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.classList.remove('hidden');
  createConfetti();
});

// Confetti Effect
function createConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  }
}

// Confetti CSS
const style = document.createElement('style');
style.innerHTML = `
  .confetti {
    position: fixed;
    top: 0;
    width: 10px;
    height: 10px;
    background: hsl(${Math.random() * 360}, 100%, 50%);
    opacity: 0.7;
    animation: fall linear forwards;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);
