const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas
function setCanvasSize() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}

setCanvasSize();

const letters = "拼音 拼音 拼音 拼音 拼音 拼音 拼音 拼音 拼音 拼音";
const fontSize = 24;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

// Função de desenho das letras caindo
function draw() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(92, 15, 24, 0.8)';
  ctx.font = fontSize + 'px monospace';
  ctx.shadowColor = 'rgba(0,0,0,0.2)';
  ctx.shadowBlur = 2;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

// Redimensionamento responsivo do canvas
window.addEventListener('resize', () => {
  setCanvasSize();
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

// Botão voltar para página inicial
const btnHome = document.getElementById('homeButton');
btnHome.addEventListener('click', () => {
  window.location.href = 'index.html'; // Substitua pelo caminho correto
});

// Botões "Saiba mais" das curiosidades
const botoesSaiba = document.querySelectorAll('.btn-saiba');

botoesSaiba.forEach(botao => {
  const extra = botao.nextElementSibling; // pega o parágrafo extra
  extra.style.display = 'none'; // garante que começa escondido

  botao.addEventListener('click', () => {
    if (extra.style.display === 'none') {
      extra.style.display = 'block';
      botao.textContent = 'Mostrar menos';
    } else {
      extra.style.display = 'none';
      botao.textContent = 'Saiba mais';
    }
  });
});
