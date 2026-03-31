const quests = [
  {
    id: 1,
    icon: '⏱️',
    title: 'Cronômetro',
    desc: 'Um cronômetro que conta tempo. Aprenda setInterval, DOM e formatação.',
    skills: ['DOM', 'eventos', 'setInterval'],
    week: 'Semana 1',
    videoId: '',
    repoPath: 'projetos/tier-1/01-cronometro.md',
    checklist: [
      'HTML com botões e display',
      'CSS básico',
      'setInterval funcionando',
      'Pausar e retomar',
      'Resetar',
      'Formato hh:mm:ss'
    ]
  },
  {
    id: 2,
    icon: '🍅',
    title: 'Pomodoro',
    desc: 'Timer de foco/pausa. Pratique lógica de estados.',
    skills: ['Timers', 'estados'],
    week: 'Semana 2',
    videoId: '',
    repoPath: 'projetos/tier-1/02-relogio-pomodoro.md',
    checklist: [
      'Contagem regressiva',
      'Alterna modos',
      'Visual diferente por modo',
      'Alerta ao zerar'
    ]
  },
  {
    id: 3,
    icon: '🔐',
    title: 'Gerador de Senha',
    desc: 'Gera senhas aleatórias com opções customizáveis.',
    skills: ['Strings', 'Math.random'],
    week: 'Semana 3',
    videoId: '',
    repoPath: 'projetos/tier-1/03-gerador-de-senha.md',
    checklist: [
      'Checkboxes',
      'Slider de comprimento',
      'Geração aleatória',
      'Copiar'
    ]
  },
  {
    id: 4,
    icon: '⚖️',
    title: 'Calculadora IMC',
    desc: 'Calcula IMC e mostra classificação. Formulários e condicionais.',
    skills: ['Formulários', 'if/else'],
    week: 'Semana 4',
    videoId: '',
    repoPath: 'projetos/tier-1/04-calculadora-imc.md',
    checklist: [
      'Inputs peso/altura',
      'Fórmula IMC',
      'Classificação',
      'Validação'
    ]
  },
  {
    id: 5,
    icon: '🧠',
    title: 'Quiz',
    desc: 'Perguntas de múltipla escolha com pontuação.',
    skills: ['Arrays', 'objetos'],
    week: 'Semana 5',
    videoId: '',
    repoPath: 'projetos/tier-1/05-app-de-quiz.md',
    checklist: [
      'Array de perguntas',
      'Navegação',
      'Feedback visual',
      'Pontuação'
    ]
  },
  {
    id: 6,
    icon: '📝',
    title: 'Bloco de Notas',
    desc: 'CRUD com localStorage. Notas que persistem.',
    skills: ['localStorage', 'CRUD'],
    week: 'Semana 6',
    videoId: '',
    repoPath: 'projetos/tier-1/06-bloco-de-notas.md',
    checklist: [
      'Criar nota',
      'Listar',
      'Editar',
      'Excluir',
      'Persistir'
    ]
  },
  {
    id: 7,
    icon: '📊',
    title: 'Freq. Palavras',
    desc: 'Conta palavras em um texto e ordena por frequência.',
    skills: ['Strings', 'sort'],
    week: 'Semana 7',
    videoId: '',
    repoPath: 'projetos/tier-1/07-frequencia-de-palavras.md',
    checklist: [
      'Dividir texto',
      'Normalizar',
      'Contar',
      'Ordenar'
    ]
  },
  {
    id: 8,
    icon: '💱',
    title: 'Conversor Moedas',
    desc: 'Converte valores entre moedas. Taxas fixas ou API.',
    skills: ['Fetch', 'formulários'],
    week: 'Semana 8',
    videoId: '',
    repoPath: 'projetos/tier-1/08-conversor-de-moedas.md',
    checklist: [
      'Selects de moedas',
      'Conversão',
      'Exibir taxa',
      'API (bônus)'
    ]
  },
  {
    id: 9,
    icon: '✓',
    title: 'Validação Form',
    desc: 'Formulário com validação em tempo real. RegEx.',
    skills: ['RegEx', 'eventos'],
    week: 'Semana 9',
    videoId: '',
    repoPath: 'projetos/tier-1/09-validacao-formulario.md',
    checklist: [
      'Validar nome',
      'Validar email',
      'Validar senha',
      'Confirmar senha',
      'Botão condicional'
    ]
  },
  {
    id: 10,
    icon: '📄',
    title: 'Lorem Ipsum',
    desc: 'Gera texto placeholder. Parágrafos aleatórios.',
    skills: ['Arrays', 'aleatoriedade'],
    week: 'Semana 10',
    videoId: '',
    repoPath: 'projetos/tier-1/10-gerador-lorem-ipsum.md',
    checklist: [
      'Banco de palavras',
      'Gerar frases',
      'Gerar parágrafos',
      'Copiar'
    ]
  },
  {
    id: 11,
    icon: '🏛️',
    title: 'Romano/Decimal',
    desc: 'Converte números romanos ↔ decimais. Algoritmos.',
    skills: ['Algoritmos', 'lógica'],
    week: 'Semana 11',
    videoId: '',
    repoPath: 'projetos/tier-1/11-conversor-romano-decimal.md',
    checklist: [
      'Decimal → romano',
      'Romano → decimal',
      'Casos especiais',
      'Validação'
    ]
  },
  {
    id: 12,
    icon: '🔄',
    title: 'Virar Imagem',
    desc: 'Carrega imagem e vira horizontal/vertical.',
    skills: ['FileReader', 'CSS transforms'],
    week: 'Semana 12',
    videoId: '',
    repoPath: 'projetos/tier-1/12-virar-imagem.md',
    checklist: [
      'Carregar imagem',
      'Virar H',
      'Virar V',
      'Reset',
      'Download (bônus)'
    ]
  }
];

// === CONFIGURAÇÃO ===
// Troque 'SEU_USUARIO' pelo seu usuário do GitHub
const GITHUB_USER = 'SEU_USUARIO';
const REPO_NAME = 'app-ideas-ptbr';

// === STATE ===
const STORAGE_KEY = 'trilha-pixel-v1';
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
let currentId = null;

// === ELEMENTS ===
const $grid = document.getElementById('quests-grid');
const $overlay = document.getElementById('modal-overlay');
const $video = document.getElementById('modal-video');
const $title = document.getElementById('modal-title');
const $desc = document.getElementById('modal-desc');
const $checklist = document.getElementById('modal-checklist');
const $github = document.getElementById('modal-github');
const $complete = document.getElementById('modal-complete');
const $xpFill = document.getElementById('xp-fill');
const $xpText = document.getElementById('xp-text');
const $commentInput = document.getElementById('comment-input');
const $commentSend = document.getElementById('comment-send');
const $commentsList = document.getElementById('comments-list');

// === FUNCTIONS ===

/**
 * Salva o progresso no localStorage
 */
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Retorna o status de uma quest
 * @param {number} id - ID da quest
 * @returns {string|null} - 'completed', 'in-progress' ou null
 */
function getStatus(id) {
  const p = data[id];
  if (!p) return null;
  if (p.done) return 'completed';
  if (p.checks && Object.values(p.checks).some(Boolean)) return 'in-progress';
  return null;
}

/**
 * Atualiza a barra de XP
 */
function updateXP() {
  const done = Object.values(data).filter(p => p.done).length;
  const pct = (done / quests.length) * 100;
  $xpFill.style.width = `${pct}%`;
  $xpText.textContent = `${done}/12 QUESTS`;
}

/**
 * Renderiza o grid de quests
 */
function renderGrid() {
  $grid.innerHTML = quests.map(q => {
    const status = getStatus(q.id);
    const statusClass = status || '';
    return `
      <div class="quest-card pixel-border ${statusClass}" data-id="${q.id}">
        <div class="quest-header">
          <div class="quest-icon pixel-border">${q.icon}</div>
          <div>
            <div class="quest-number">#${String(q.id).padStart(2, '0')}</div>
            <div class="quest-week">${q.week}</div>
          </div>
        </div>
        <h3 class="quest-title">${q.title}</h3>
        <p class="quest-desc">${q.desc}</p>
        <div class="quest-skills">
          ${q.skills.map(s => `<span class="skill-tag pixel-border">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Adiciona event listeners
  $grid.querySelectorAll('.quest-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.id));
  });
}

/**
 * Abre o modal de uma quest
 * @param {number} id - ID da quest
 */
function openModal(id) {
  const q = quests.find(x => x.id === id);
  if (!q) return;
  currentId = id;

  // Video
  if (q.videoId) {
    $video.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${q.videoId}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else {
    $video.innerHTML = `
      <div class="video-placeholder">
        <div class="video-placeholder-icon">🎬</div>
        <span>EM BREVE</span>
      </div>
    `;
  }

  // Content
  $title.innerHTML = `<span>${q.icon}</span> ${q.title}`;
  $desc.textContent = q.desc;
  $github.href = `https://github.com/${GITHUB_USER}/${REPO_NAME}/blob/main/${q.repoPath}`;

  // Checklist
  const qData = data[id] || { checks: {}, done: false, comments: [] };
  $checklist.innerHTML = q.checklist.map((item, i) => `
    <li>
      <input 
        type="checkbox" 
        class="pixel-border" 
        id="c${i}" 
        data-i="${i}" 
        ${qData.checks?.[i] ? 'checked' : ''}
      >
      <label for="c${i}">${item}</label>
    </li>
  `).join('');

  // Complete button
  updateCompleteBtn(qData.done);

  // Comments
  renderComments(qData.comments || []);

  // Show modal
  $overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Fecha o modal
 */
function closeModal() {
  $overlay.classList.remove('open');
  document.body.style.overflow = '';
  $video.innerHTML = '';
  currentId = null;
}

/**
 * Atualiza o botão de completar
 * @param {boolean} isDone - Se a quest está completa
 */
function updateCompleteBtn(isDone) {
  const $text = $complete.querySelector('.btn-text');
  if (isDone) {
    $text.textContent = 'COMPLETO!';
    $complete.classList.add('is-done');
  } else {
    $text.textContent = 'COMPLETAR';
    $complete.classList.remove('is-done');
  }
}

/**
 * Renderiza a lista de comentários
 * @param {Array} comments - Lista de comentários
 */
function renderComments(comments) {
  if (!comments.length) {
    $commentsList.innerHTML = '<p class="no-comments">Nenhuma dúvida ainda...</p>';
    return;
  }
  $commentsList.innerHTML = comments.map(c => `
    <div class="comment pixel-border">
      <div class="comment-meta">
        <span class="comment-author">${c.author}</span>
        <span class="comment-date">· ${c.date}</span>
      </div>
      <p class="comment-text">${c.text}</p>
    </div>
  `).join('');
}

// === EVENT LISTENERS ===

// Fechar modal
document.getElementById('modal-close').addEventListener('click', closeModal);

$overlay.addEventListener('click', e => {
  if (e.target === $overlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Checklist
$checklist.addEventListener('change', e => {
  if (e.target.type !== 'checkbox') return;
  
  if (!data[currentId]) {
    data[currentId] = { checks: {}, done: false, comments: [] };
  }
  
  data[currentId].checks[e.target.dataset.i] = e.target.checked;
  save();
  renderGrid();
  updateXP();
});

// Botão completar
$complete.addEventListener('click', () => {
  if (!data[currentId]) {
    data[currentId] = { checks: {}, done: false, comments: [] };
  }
  
  data[currentId].done = !data[currentId].done;
  updateCompleteBtn(data[currentId].done);
  save();
  renderGrid();
  updateXP();
});

// Enviar comentário
$commentSend.addEventListener('click', () => {
  const text = $commentInput.value.trim();
  if (!text) return;
  
  if (!data[currentId]) {
    data[currentId] = { checks: {}, done: false, comments: [] };
  }
  
  if (!data[currentId].comments) {
    data[currentId].comments = [];
  }
  
  data[currentId].comments.push({
    author: 'Player',
    date: new Date().toLocaleDateString('pt-BR'),
    text
  });
  
  save();
  renderComments(data[currentId].comments);
  $commentInput.value = '';
});

// === INIT ===
renderGrid();
updateXP();

// ===== WORLD MAP ENGINE =====

const GROUND_Y   = 145;  // canvas px — where the path sits
const WORLD_W    = 1780; // total world width (canvas px)
const CANVAS_H   = 200;
const QUEST_X0   = 100;  // x of first quest
const QUEST_GAP  = 140;  // spacing between quests
const CHAR_P     = 3;    // canvas px per game pixel
const CHAR_COLS  = 6;    // game pixels wide
const CHAR_ROWS  = 10;   // game pixels tall
const CHAR_DRAW_H = CHAR_ROWS * CHAR_P; // 30px
const CHAR_SPEED  = 2.5;

let wCanvas, wCtx;
let wScrollX = 0;
let wAnimId  = null;

let hero = {
  x: 40,
  y: GROUND_Y - CHAR_DRAW_H,
  vx: 0,
  facing: 1,
  frame: 0,
  animTick: 0,
  targetX: null,
  targetQuestIdx: null,
  autoOpen: false
};

const wKeys = {};
let wNearQuest = null;

function questWorldX(i) {
  return QUEST_X0 + i * QUEST_GAP;
}

function initWorld() {
  wCanvas = document.getElementById('world-canvas');
  if (!wCanvas) return;

  resizeWorldCanvas();
  wCtx = wCanvas.getContext('2d');

  wCanvas.addEventListener('click', onWorldClick);
  document.addEventListener('keydown', onWorldKey);
  document.addEventListener('keyup',  e => { wKeys[e.key] = false; });
  window.addEventListener('resize', resizeWorldCanvas);

  startWorldLoop();
}

function resizeWorldCanvas() {
  if (!wCanvas) return;
  const w = wCanvas.parentElement.clientWidth || 900;
  wCanvas.width  = w;
  wCanvas.height = CANVAS_H;
}

function startWorldLoop() {
  if (wAnimId) return;
  wAnimId = requestAnimationFrame(worldLoop);
}

function stopWorldLoop() {
  if (wAnimId) { cancelAnimationFrame(wAnimId); wAnimId = null; }
}

function onWorldClick(e) {
  if (document.getElementById('modal-overlay').classList.contains('open')) return;
  const rect = wCanvas.getBoundingClientRect();
  const clickWorldX = (e.clientX - rect.left) * (wCanvas.width / rect.width) + wScrollX;

  let closest = null;
  let minDist = 55;
  quests.forEach((_q, i) => {
    const d = Math.abs(clickWorldX - questWorldX(i));
    if (d < minDist) { minDist = d; closest = i; }
  });

  if (closest !== null) {
    hero.targetX = questWorldX(closest);
    hero.targetQuestIdx = closest;
    hero.autoOpen = true;
  }
}

function onWorldKey(e) {
  wKeys[e.key] = true;
  if (document.getElementById('modal-overlay').classList.contains('open')) return;
  if ((e.key === 'e' || e.key === 'E' || e.key === 'Enter') && wNearQuest !== null) {
    openModal(quests[wNearQuest].id);
  }
}

function updateHero() {
  const modalOpen = document.getElementById('modal-overlay').classList.contains('open');

  if (hero.targetX !== null) {
    const dx = hero.targetX - hero.x;
    if (Math.abs(dx) <= CHAR_SPEED) {
      hero.x  = hero.targetX;
      hero.vx = 0;
      hero.targetX = null;
      if (hero.autoOpen && hero.targetQuestIdx !== null) {
        hero.autoOpen = false;
        const qi = hero.targetQuestIdx;
        hero.targetQuestIdx = null;
        setTimeout(() => openModal(quests[qi].id), 80);
      }
    } else {
      hero.vx = dx > 0 ? CHAR_SPEED : -CHAR_SPEED;
      hero.facing = dx > 0 ? 1 : -1;
    }
  } else if (!modalOpen) {
    if (wKeys['ArrowLeft'] || wKeys['a'] || wKeys['A']) {
      hero.vx = -CHAR_SPEED; hero.facing = -1; hero.autoOpen = false;
    } else if (wKeys['ArrowRight'] || wKeys['d'] || wKeys['D']) {
      hero.vx = CHAR_SPEED;  hero.facing =  1; hero.autoOpen = false;
    } else {
      hero.vx = 0;
    }
  } else {
    hero.vx = 0;
  }

  hero.x = Math.max(10, Math.min(WORLD_W - CHAR_COLS * CHAR_P - 10, hero.x + hero.vx));

  if (hero.vx !== 0) {
    hero.animTick++;
    if (hero.animTick % 8 === 0) hero.frame = hero.frame === 0 ? 1 : 0;
  } else {
    hero.frame = 0;
    hero.animTick = 0;
  }

  // Scroll camera to follow hero
  const viewW = wCanvas.width;
  const target = hero.x - viewW / 2 + CHAR_COLS * CHAR_P / 2;
  wScrollX = Math.max(0, Math.min(WORLD_W - viewW, target));

  // Check proximity to quests
  wNearQuest = null;
  quests.forEach((_q, i) => {
    if (Math.abs(hero.x - questWorldX(i)) < 28) wNearQuest = i;
  });
}

function drawWorld() {
  const ctx = wCtx;
  const W = wCanvas.width;
  const H = CANVAS_H;
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.translate(-Math.round(wScrollX), 0);

  // --- Sky ---
  const skyGrad = ctx.createLinearGradient(wScrollX, 0, wScrollX, GROUND_Y);
  skyGrad.addColorStop(0, '#111422');
  skyGrad.addColorStop(1, '#262b44');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(wScrollX, 0, W, GROUND_Y);

  // --- Stars ---
  ctx.fillStyle = 'rgba(203,219,252,0.7)';
  for (let i = 0; i < 40; i++) {
    const sx = (i * 173 + 23) % WORLD_W;
    const sy = (i * 97  + 7)  % (GROUND_Y - 30);
    const vis = wScrollX <= sx + 4 && sx <= wScrollX + W + 4;
    if (vis) ctx.fillRect(sx, sy, i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
  }

  // --- Moon ---
  const moonX = wScrollX + W - 60;
  ctx.fillStyle = '#cbdbfc';
  ctx.beginPath();
  ctx.arc(moonX, 28, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1a1c2c';
  ctx.beginPath();
  ctx.arc(moonX + 5, 24, 11, 0, Math.PI * 2);
  ctx.fill();

  // --- Distant mountains ---
  ctx.fillStyle = '#1e2438';
  const mts = [
    [0, 80, 200], [180, 60, 160], [320, 75, 180], [480, 55, 220],
    [660, 70, 190], [830, 50, 170], [990, 65, 200], [1160, 75, 180],
    [1320, 58, 160], [1470, 72, 190], [1630, 60, 180]
  ];
  mts.forEach(([mx, mh, mw]) => {
    ctx.beginPath();
    ctx.moveTo(mx, GROUND_Y);
    ctx.lineTo(mx + mw / 2, GROUND_Y - mh);
    ctx.lineTo(mx + mw, GROUND_Y);
    ctx.closePath();
    ctx.fill();
  });

  // --- Ground ---
  ctx.fillStyle = '#1f2535';
  ctx.fillRect(wScrollX, GROUND_Y, W, H - GROUND_Y);

  // --- Path ---
  ctx.fillStyle = '#2e3a2e';
  ctx.fillRect(wScrollX, GROUND_Y, W, 14);

  // Path edge highlight
  ctx.fillStyle = '#3d5a3e';
  ctx.fillRect(wScrollX, GROUND_Y, W, 2);

  // Path dashes
  ctx.fillStyle = '#4a7a4b';
  for (let px = Math.floor(wScrollX / 32) * 32; px < wScrollX + W + 32; px += 32) {
    ctx.fillRect(px, GROUND_Y + 6, 16, 2);
  }

  // --- Trees ---
  for (let i = -1; i <= 12; i++) {
    const tx = QUEST_X0 + i * QUEST_GAP - 65;
    if (tx > wScrollX - 20 && tx < wScrollX + W + 20) {
      drawTree(ctx, tx, GROUND_Y);
    }
    const tx2 = QUEST_X0 + i * QUEST_GAP + 30;
    if (tx2 > wScrollX - 20 && tx2 < wScrollX + W + 20) {
      drawTree(ctx, tx2, GROUND_Y);
    }
  }

  // --- Quest markers ---
  quests.forEach((q, i) => {
    const qx = questWorldX(i);
    if (qx > wScrollX - 60 && qx < wScrollX + W + 60) {
      drawQuestMarker(ctx, qx, GROUND_Y, q, i, getStatus(q.id), wNearQuest === i);
    }
  });

  // --- Hero ---
  drawHero(ctx, hero.x, hero.y, hero.facing, hero.frame);

  // --- Press E prompt ---
  if (wNearQuest !== null) {
    const qx = questWorldX(wNearQuest);
    ctx.fillStyle = '#fbf236';
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('[E]', qx, GROUND_Y - 92);
  }

  ctx.restore();
}

function drawTree(ctx, x, groundY) {
  ctx.fillStyle = '#5c3317';
  ctx.fillRect(x + 5, groundY - 18, 4, 18);

  ctx.fillStyle = '#2d5a1e';
  ctx.fillRect(x,     groundY - 26, 14, 8);
  ctx.fillRect(x + 2, groundY - 34, 10, 8);
  ctx.fillRect(x + 4, groundY - 40, 6,  8);

  ctx.fillStyle = '#4b8a22';
  ctx.fillRect(x + 1, groundY - 26, 4, 3);
  ctx.fillRect(x + 3, groundY - 34, 3, 3);
}

function drawQuestMarker(ctx, x, groundY, quest, index, status, isNear) {
  // Post
  ctx.fillStyle = '#7a6242';
  ctx.fillRect(x - 2, groundY - 82, 4, 82);

  // Sign background
  const bgColor  = status === 'completed'   ? '#2a4a1a'
                 : status === 'in-progress' ? '#4a3a00'
                 : isNear                   ? '#1a3050'
                 : '#1e2538';
  const brdColor = status === 'completed'   ? '#6abe30'
                 : status === 'in-progress' ? '#fbf236'
                 : isNear                   ? '#5fcde4'
                 : '#3a4466';

  // Sign box
  ctx.fillStyle = bgColor;
  ctx.fillRect(x - 22, groundY - 78, 44, 26);

  // Sign border (pixel style — 2px lines)
  ctx.fillStyle = brdColor;
  ctx.fillRect(x - 22, groundY - 78, 44,  2); // top
  ctx.fillRect(x - 22, groundY - 52, 44,  2); // bottom
  ctx.fillRect(x - 22, groundY - 78, 2,  26); // left
  ctx.fillRect(x + 20, groundY - 78, 2,  26); // right

  // Quest number
  ctx.fillStyle = status === 'completed' ? '#aaffaa' : '#f4f4f4';
  ctx.font = '7px "Press Start 2P", monospace';
  ctx.textAlign = 'center';
  ctx.fillText(`#${String(index + 1).padStart(2, '0')}`, x, groundY - 61);

  // Quest icon (above sign)
  ctx.font = '14px serif';
  ctx.fillText(quest.icon, x, groundY - 83);

  // Completed tick
  if (status === 'completed') {
    ctx.fillStyle = '#6abe30';
    ctx.font = '9px "Press Start 2P", monospace';
    ctx.fillText('✓', x + 14, groundY - 61);
  }
}

function drawHero(ctx, x, y, facing, frame) {
  const p = CHAR_P;
  ctx.save();
  if (facing === -1) {
    ctx.translate(x * 2 + CHAR_COLS * p, 0);
    ctx.scale(-1, 1);
  }

  const fill = (col, row, color, w = 1, h = 1) => {
    ctx.fillStyle = color;
    ctx.fillRect(x + col * p, y + row * p, w * p, h * p);
  };

  const H = '#3d2b1f'; // hair
  const S = '#f4c28b'; // skin
  const E = '#111';    // eyes
  const C = '#5fcde4'; // shirt (matches primary color)
  const CD = '#3aadcf'; // shirt shadow
  const P2 = '#1a2d5a'; // pants
  const B = '#7a4a1e'; // boots

  // Row 0: hair top
  fill(1, 0, H, 4);
  // Row 1: hair + head sides
  fill(0, 1, H); fill(1, 1, H, 4); fill(5, 1, H);
  // Row 2: face with eyes
  fill(0, 2, S, 6);
  fill(1, 2, E); fill(4, 2, E);
  // Row 3: face bottom / mouth area
  fill(0, 3, S, 6);
  // Row 4-5: shirt body
  fill(0, 4, S); fill(1, 4, C, 4); fill(5, 4, S); // arms are skin
  fill(0, 5, S); fill(1, 5, C, 4); fill(5, 5, S);
  // Row 6: shirt bottom with shadow
  fill(0, 6, S); fill(1, 6, CD, 4); fill(5, 6, S);

  if (frame === 0) {
    // Legs together
    fill(1, 7, P2, 2); fill(3, 7, P2, 2);
    fill(1, 8, P2, 2); fill(3, 8, P2, 2);
    fill(0, 9, B, 2);  fill(3, 9, B, 2);  // boots wider
  } else {
    // Legs apart (walk)
    fill(0, 7, P2, 2); fill(4, 7, P2, 2);
    fill(0, 8, P2, 2); fill(4, 8, P2, 2);
    fill(-1, 9, B, 2); fill(4, 9, B, 2); // boots shifted out
  }

  ctx.restore();
}

function worldLoop() {
  updateHero();
  drawWorld();
  wAnimId = requestAnimationFrame(worldLoop);
}

// === WORLD INIT & VIEW TOGGLE ===
initWorld();

document.getElementById('btn-map').addEventListener('click', () => {
  document.getElementById('quests-section').classList.add('hidden');
  document.getElementById('btn-map').classList.add('active');
  document.getElementById('btn-list').classList.remove('active');
  resizeWorldCanvas();
  startWorldLoop();
});

document.getElementById('btn-list').addEventListener('click', () => {
  document.getElementById('quests-section').classList.remove('hidden');
  document.getElementById('btn-list').classList.add('active');
  document.getElementById('btn-map').classList.remove('active');
  stopWorldLoop();
});
