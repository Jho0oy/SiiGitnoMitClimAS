export const $ = (s) => document.querySelector(s);

export const screens = {
  start: $("#start-screen"),
  howto: $("#howto-screen"),
  biomeSelection: $("#biome-selection-screen"),
  problem: $("#problem-screen"),
  ods: $("#ods-screen"),
  result: $("#result-screen"),
  final: $("#final-screen"),
};

export function showScreen(screenName) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[screenName].classList.add("active");
}

// ========== ANIMAÇÕES ==========
export function animateCount(el, to) {
  let from = parseInt(el.textContent) || 0;
  if (from === to) return;
  const duration = 500;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;
  const counter = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const current = from + (to - from) * progress;
    el.textContent = Math.round(current);
    if (frame === totalFrames) clearInterval(counter);
  }, frameDuration);
}

// ========== TELA DE PROBLEMAS ==========
export function updateProblemScreen(biome) {
  $("#biome-title").textContent = biome.name;
  $("#biome-desc").textContent = biome.desc;
  const problemCard = screens.problem.querySelector(".card");
  problemCard.style.backgroundImage = `url(${biome.img || "img/default.jpg"})`;
  problemCard.classList.add("has-bg");
}

export function renderOptions(containerSelector, items, htmlFn, clickFn) {
  const list = $(containerSelector);
  list.innerHTML = "";
  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = htmlFn(item);
    div.onclick = () => clickFn(item);
    div.style.animationDelay = `${index * 50}ms`;
    list.appendChild(div);
  });
}

// ========== TELA DE ODS ==========
export function updateODSScreen(problem) {
  $("#problem-title").textContent = problem.name;
  $("#problem-desc").textContent = problem.desc;
}

// ========== TELA DE RESULTADO ==========
export function updateResultScreen(state, points) {
  const { biome, problem, ods } = state.current;
  $("#choice-summary").innerHTML = `${biome.name} → ${problem.name}<br>Você escolheu <strong>${ods.title}</strong>`;
  animateCount($("#round-score"), points);
  animateCount($("#total-score"), state.total);
  $("#continue-game-btn").focus();
}

// ========== TELA FINAL ==========
export function showFinalScreen(state, allBiomes) {
  const score = state.total;

  let msg = "";
  if (score < 400) {
    msg = `Notamos que você tem habilidades para ajudar na resolução das problemáticas, mas é importante conhecer mais sobre os biomas brasileiros e sobre os ODS/ONU.`;
  } else if (score <= 450) {
    msg = `Você demonstrou boa habilidade em selecionar os ODS adequados para cada problemática, mas é importante que você estude mais sobre os efeitos das mudanças climáticas em cada bioma brasileiro.`;
  } else if (score <= 500) {
    msg = `Parabéns!!! Você já tem uma capacidade de análise das problemáticas bem desenvolvida, e soube escolher a maioria dos ODS/ODU de forma bem eficiente. Amplie mais seus conhecimentos para desenvolver ainda mais suas competências de análise e proposição de soluções/intervenções.`;
  } else {
    msg = `Fenomenal!!! Você faz parte do grupo seleto de pessoas que conhecem bem os biomas brasileiros, consegue analisar os possíveis efeitos das mudanças climáticas em cada um deles, e tem competência para aplicar os ODS mais adequados em cada situação. Agora leve sua experiência para mais pessoas. Vamos lá...`;
  }

  const resumo = state.rounds
    .map(
      (r) =>
        `• ${r.biome.name} — ${r.problem.name} → ${r.ods.title}`
    )
    .join("<br>");

  $("#final-score").textContent = score;
  $("#final-text").innerHTML = `
    <div class="final-message">${msg}</div>
    <br><strong>Resumo das escolhas:</strong><br>${resumo}
  `;

  showScreen("final");
}