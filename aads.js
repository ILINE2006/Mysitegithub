// Создание звёзд
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 3;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  starsContainer.appendChild(star);
}