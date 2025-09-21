const track = document.getElementById('track');
const slides = Array.from(track.children);
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotsContainer = document.getElementById('dots');
let idx = 0;

// Criar dots
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

function goTo(i) {
  idx = (i + slides.length) % slides.length;
  track.style.transform = `translateX(${-idx * 100}%)`;
  dots.forEach(d => d.classList.toggle('active', d.dataset.index == idx));
}

prev.addEventListener('click', () => goTo(idx - 1));
next.addEventListener('click', () => goTo(idx + 1));
dots.forEach(d => d.addEventListener('click', e => goTo(+e.target.dataset.index)));

// autoplay
setInterval(() => goTo(idx + 1), 4000);
