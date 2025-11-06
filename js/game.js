import { DATA as initialData } from "./data.js";
import {
  $,
  showScreen,
  animateCount,
  renderOptions,
  updateProblemScreen,
  updateODSScreen,
  updateResultScreen,
  showFinalScreen,
} from "./ui.js";

// ===================== ESTADO DO JOGO =====================
let state = {
  total: 0,
  current: {},
  rounds: [],
  completed: {}
};

// ===================== SOM =====================
let ctx;
function beep(f = 440, t = 0.05) {
  if (!window.AudioContext) return;
  if (!ctx) ctx = new AudioContext();
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.frequency.value = f;
  g.gain.value = 0.02;
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t);
  o.stop(ctx.currentTime + t + 0.01);
}

// ===================== INICIALIZAÇÃO =====================
function initGame() {
  state.total = 0;
  state.rounds = [];
  state.completed = {};
  showBiomeSelection();
}

function showBiomeSelection() {
  const biomeList = $("#biome-list");
  biomeList.innerHTML = "";

  initialData.biomes.forEach((biome) => {
    const resolved = state.completed[biome.name] || [];
    const total = initialData.problemsByBiome[biome.id]?.length || 0;
    const isComplete = resolved.length === total;

    const div = document.createElement("div");
    div.className = "option";

    div.innerHTML = `
      <strong>${biome.emoji} ${biome.name}</strong><br>
      <small>${biome.desc}</small><br>
      <div class="progress" style="margin-top: 8px;">
        <div class="progress-bar" style="width: ${Math.round((resolved.length / total) * 100)}%;"></div>
      </div>
      <small style="color: ${isComplete ? 'green' : '#555'}">
        ${resolved.length}/${total} problemas resolvidos ${isComplete ? '✅' : ''}
      </small>
    `;

    if (isComplete) {
      div.style.opacity = "0.5";
      div.style.pointerEvents = "none";
    } else {
      div.onclick = () => selectBiome(biome);
    }

    biomeList.appendChild(div);
  });

  animateCount($("#board-total-score"), state.total);
  showScreen("biomeSelection");
}

// ===================== ETAPA 1 - SELECIONA BIOMA =====================
function selectBiome(biome) {
  state.current.biome = biome;
  updateProblemScreen(biome);

  const resolved = state.completed[biome.name] || [];
  const biomeProblems = initialData.problemsByBiome[biome.id] || [];

  const availableProblems = biomeProblems.map((p) => {
    const isResolved = resolved.includes(p.name);
    return { ...p, disabled: isResolved };
  });

  renderOptions(
    "#problem-list",
    availableProblems,
    (p) => {
      const style = p.disabled ? "opacity: 0.5; pointer-events: none;" : "";
      const status = p.disabled ? "🔒 Resolvido" : "";
      return `<div style="${style}"><strong>${p.name}</strong><br><small>${p.desc}</small><br>${status}</div>`;
    },
    (p) => {
      if (!p.disabled) selectProblem(p);
    }
  );

  showScreen("problem");
}

// ===================== ETAPA 2 - SELECIONA PROBLEMA =====================
function selectProblem(problem) {
  state.current.problem = problem;
  updateODSScreen(problem);

  renderOptions(
    "#ods-list",
    problem.ods,
    (o) => `<div><strong>${o.title}</strong></div><small>${o.desc || ""}</small>`,
    selectODS
  );

  showScreen("ods");
}

// ===================== ETAPA 3 - ESCOLHE ODS =====================
function selectODS(odsObject) {
  state.current.ods = odsObject;
  beep(800, 0.1);

  const biomeName = state.current.biome.name;
  const problemName = state.current.problem.name;

  if (!state.completed[biomeName]) {
    state.completed[biomeName] = [];
  }
  state.completed[biomeName].push(problemName);

  state.rounds.push({
    biome: state.current.biome,
    problem: state.current.problem,
    ods: odsObject,
  });

  state.total += odsObject.points;
  updateResultScreen(state, odsObject.points);
  showScreen("result");
  checkGameCompletion();
}

// ===================== DETECTAR FIM DE JOGO =====================
function checkGameCompletion() {
  const allBiomes = initialData.biomes.map((b) => b.name);
  const isComplete = allBiomes.every((biomeName) => {
    const biomeId = initialData.biomes.find(b => b.name === biomeName)?.id;
    const total = initialData.problemsByBiome[biomeId]?.length || 0;
    return state.completed[biomeName]?.length === total;
  });

  if (isComplete) {
    showFinalScreen(state, initialData.biomes);
  }
}

// ===================== CONTINUAR JOGO =====================
function continueGame() {
  animateCount($("#board-total-score"), state.total);
  showBiomeSelection();
}

// ===================== CONTROLE DE MÚSICA =====================
function setupMusicControls() {
  const musicEl = $("#background-music");
  const musicToggleBtn = $("#music-toggle-btn");
  let isMusicPlaying = false;

  function toggleMusic() {
    if (isMusicPlaying) {
      musicEl.pause();
      musicToggleBtn.textContent = "🔇";
    } else {
      musicEl.play();
      musicToggleBtn.textContent = "🎵";
    }
    isMusicPlaying = !isMusicPlaying;
  }
  musicToggleBtn.onclick = toggleMusic;
}

// ===================== EVENTOS GERAIS =====================
document.addEventListener("DOMContentLoaded", () => {
  setupMusicControls();
  showScreen("start");

  $("#start-btn").onclick = initGame;
  $("#start-howto-btn").onclick = () => showScreen("howto");
  $("#howto-back-btn").onclick = () => showScreen("start");
  $("#howto-start-btn").onclick = initGame;
  $("#biome-back-btn").onclick = () => showScreen("start");
  $("#problem-back").onclick = () => showScreen("biomeSelection");
  $("#ods-back").onclick = () => showScreen("problem");
  $("#continue-game-btn").onclick = continueGame;
  $("#play-again").onclick = initGame;
});
