const treinos = [
  {
    dia: "DIA 1 – FULL BODY (CIRCUITO LEVE)",
    tecnica: "Circuito leve com foco em gasto calórico",
    objetivo: "Ativar o corpo inteiro com exercícios básicos",
    exercicios: [
      { nome: "Agachamento com peso corporal", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Flexão de braço joelho no chão", series: "3", reps: "10", tecnica: "", obs: "" },
      { nome: "Polichinelos", series: "3", reps: "30s", tecnica: "Circuito", obs: "" },
      { nome: "Remada baixa com elástico", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Prancha frontal", series: "3", reps: "30s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 2 – INFERIOR + CARDIO",
    tecnica: "Cadência + finalização com cardio",
    objetivo: "Estimular parte inferior e acelerar o metabolismo",
    exercicios: [
      { nome: "Afundo no lugar", series: "3", reps: "12 por perna", tecnica: "", obs: "" },
      { nome: "Cadeira extensora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Cadeira flexora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Elevação de quadril", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Corrida leve", series: "-", reps: "10min", tecnica: "Cardio final", obs: "Se possível" }
    ]
  },
  {
    dia: "DIA 3 – PARTE SUPERIOR + CORE",
    tecnica: "Bi-set leve com foco em definição",
    objetivo: "Trabalhar braços, ombros e abdômen",
    exercicios: [
      { nome: "Supino máquina + Crucifixo", series: "3", reps: "12 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Puxada frontal", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Desenvolvimento com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal oblíquo alternado", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Prancha lateral", series: "3", reps: "30s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 4 – FULL BODY EM CIRCUITO",
    tecnica: "Alta repetição + intensidade moderada",
    objetivo: "Aumentar o gasto calórico",
    exercicios: [
      { nome: "Agachamento + Flexão", series: "3", reps: "15 + 10", tecnica: "Bi-set", obs: "" },
      { nome: "Elevação lateral + Remada curvada", series: "3", reps: "12 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Abdominal canivete", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Corrida leve", series: "-", reps: "12min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 5 – INFERIOR (VOLUME LEVE)",
    tecnica: "Técnica de base e coordenação",
    objetivo: "Fortalecer glúteos e pernas",
    exercicios: [
      { nome: "Agachamento com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Passada andando", series: "3", reps: "10 por perna", tecnica: "", obs: "" },
      { nome: "Stiff com halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Cadeira abdutora", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Panturrilha em pé", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 6 – SUPERIOR FUNCIONAL",
    tecnica: "Exercícios básicos com boa execução",
    objetivo: "Definir membros superiores com segurança",
    exercicios: [
      { nome: "Supino reto máquina", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Remada unilateral", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Elevação frontal com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Rosca direta com barra", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Tríceps testa com halteres", series: "3", reps: "15", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 7 – CORE + CARDIO",
    tecnica: "Circuito abdominal + cardio leve",
    objetivo: "Envolver musculatura do core e estimular gasto",
    exercicios: [
      { nome: "Abdominal reto", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Prancha com apoio", series: "3", reps: "30s", tecnica: "", obs: "" },
      { nome: "Abdominal bicicleta", series: "3", reps: "30s", tecnica: "", obs: "" },
      { nome: "Cardio: Esteira ou escada", series: "-", reps: "15min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 8 – FULL BODY COMBINADO",
    tecnica: "Circuito com bi-set leve",
    objetivo: "Estimular o corpo todo e aumentar gasto",
    exercicios: [
      { nome: "Afundo no step", series: "3", reps: "12 por perna", tecnica: "", obs: "" },
      { nome: "Flexão de braço", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Polichinelos", series: "3", reps: "40s", tecnica: "", obs: "" },
      { nome: "Remada curvada", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Abdominal com elevação de pernas", series: "3", reps: "15", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 9 – MEMBROS INFERIORES",
    tecnica: "Volume moderado + foco em posterior",
    objetivo: "Melhorar base e resistência",
    exercicios: [
      { nome: "Leg press", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Mesa flexora", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Cadeira abdutora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Agachamento sumô com halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Panturrilha sentado", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 10 – PARTE SUPERIOR + CORE",
    tecnica: "Execução controlada + ativação abdominal",
    objetivo: "Definir e tonificar a parte de cima",
    exercicios: [
      { nome: "Supino inclinado com halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Puxada frontal", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Elevação lateral", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Rosca alternada", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Prancha frontal com toques no ombro", series: "3", reps: "30s", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 11 – CIRCUITO FUNCIONAL",
    tecnica: "Alta repetição com pouco descanso",
    objetivo: "Gastar energia e manter constância",
    exercicios: [
      { nome: "Agachamento livre", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Passada alternada", series: "3", reps: "12 por perna", tecnica: "", obs: "" },
      { nome: "Corrida parada (skipping)", series: "3", reps: "40s", tecnica: "", obs: "" },
      { nome: "Abdominal cruzado", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Esteira ou escada", series: "-", reps: "10min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 12 – INFERIOR + CARDIO",
    tecnica: "Foco em ativação muscular e ritmo",
    objetivo: "Potencializar glúteo e posterior",
    exercicios: [
      { nome: "Avanço com halteres", series: "3", reps: "10 por perna", tecnica: "", obs: "" },
      { nome: "Cadeira extensora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Stiff com barra ou halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Corrida leve", series: "-", reps: "12min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 13 – SUPERIOR COM BI-SET",
    tecnica: "Bi-set de peito + costas e braços",
    objetivo: "Maior intensidade com menos tempo",
    exercicios: [
      { nome: "Supino reto + Crucifixo", series: "3", reps: "10 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Remada baixa + Pullover", series: "3", reps: "10 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Rosca martelo", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Tríceps testa com halteres", series: "3", reps: "15", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 14 – FULL BODY + CORE",
    tecnica: "Finalização de semana com intensidade leve",
    objetivo: "Fechar a segunda semana com consistência",
    exercicios: [
      { nome: "Agachamento sumô com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Flexão de braço", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Elevação lateral com peso leve", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal prancha", series: "3", reps: "30s", tecnica: "", obs: "" },
      { nome: "Cardio: Escada ou caminhada rápida", series: "-", reps: "12min", tecnica: "Cardio leve", obs: "" }
    ]
  }
];




// --- RENDERIZAÇÃO DOS TREINOS ---
const treinoContainer = document.getElementById("treinoContainer");
const progresso = JSON.parse(localStorage.getItem("progresso") || "{}");

treinos.forEach((treino, i) => {
  const card = document.createElement("div");
  card.className = "card";

  let html = `
    <h2>${treino.dia}</h2>
    <p><strong>Técnica:</strong> ${treino.tecnica}</p>
    <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
    <table class="exercise-table">
      <thead>
        <tr>
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
        </tr>
      </thead>
      <tbody>
  `;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `
      <tr class="exercise-row ${doneClass}" data-key="${key}">
        <td><input type="checkbox" ${checked}></td>
        <td>${ex.nome || "-"}</td>
        <td>${ex.series || "-"}</td>
        <td>${ex.reps || "-"}</td>
        <td>${ex.tecnica || "-"}</td>
        <td>${ex.obs || "-"}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

// --- CHECKBOX PROGRESSO ---
document.querySelectorAll(".exercise-row input[type='checkbox']").forEach(input => {
  input.addEventListener("change", function () {
    const row = this.closest(".exercise-row");
    const key = row.dataset.key;
    const feito = this.checked;
    row.classList.toggle("done", feito);
    progresso[key] = { feito };
    localStorage.setItem("progresso", JSON.stringify(progresso));
  });
});

// --- TIMER POR EXERCÍCIO ---
function iniciarTimer(btn) {
  const span = btn.nextElementSibling;
  let tempo = 60;
  span.textContent = formatar(tempo);
  btn.disabled = true;

  const intervalo = setInterval(() => {
    tempo--;
    span.textContent = formatar(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      btn.disabled = false;
      span.textContent = "✔️";
    }
  }, 1000);
}

function formatar(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

// --- FEEDBACK ---
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});

// --- DARK MODE ---
document.getElementById("darkToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});





