const treino = [
  // SEMANA 1
  {
    dia: "Dia 1 – Full Body (Circuito)",
    tecnica: "Circuito de Corpo Inteiro",
    objetivo: "Ativar grandes grupos musculares para aumento de gasto calórico",
    tempo: "40 min",
    exercicios: [
      ["Agachamento livre", "3x15", "Cadência controlada"],
      ["Flexão de braço com joelho no chão", "3x10", "Amplitude máxima"],
      ["Remada baixa + Elevação lateral", "3x12 cada", "Circuito sem descanso"],
      ["Prancha abdominal", "3x30s", "Foco em respiração e controle"],
    ],
    cardio: "15 min caminhada rápida ou escada"
  },
  {
    dia: "Dia 2 – Parte Superior (Bi-set)",
    tecnica: "Bi-set leve para parte superior",
    objetivo: "Estimular músculos superiores com intensidade moderada",
    tempo: "35-40 min",
    exercicios: [
      ["Supino reto halteres + Crucifixo", "3x12", "Cadência suave"],
      ["Remada unilateral", "3x12 por braço", "Foco no controle"],
      ["Desenvolvimento com halteres", "3x12", "Sem descansar entre braços"],
      ["Tríceps corda", "3x15", "Descanso curto"],
    ],
    cardio: "20 min bicicleta ergométrica"
  },
  {
    dia: "Dia 3 – Inferior + Core (Circuito)",
    tecnica: "Circuito alternado de inferiores e abdominal",
    objetivo: "Estimular parte inferior + abdômen com gasto calórico",
    tempo: "45 min",
    exercicios: [
      ["Afundo com halteres", "3x10 cada perna", "Cadência 3-1-1"],
      ["Leg press 45°", "3x15", "Amplitude máxima"],
      ["Elevação pélvica", "3x20", "Contração máxima"],
      ["Abdominal remador", "3x20", "Sem descanso"],
      ["Prancha lateral alternando lados", "3x30s", "Controle total"],
    ],
    cardio: "20 min escada ou caminhada inclinada"
  },

  // SEMANA 2
  {
    dia: "Dia 4 – Full Body (Progressão)",
    tecnica: "Circuito com progressão de carga e estímulo",
    objetivo: "Manter o corpo ativo e responsivo",
    tempo: "40 min",
    exercicios: [
      ["Agachamento com halteres", "3x12", "Procurar progredir carga"],
      ["Flexão tradicional", "3x10", "Amplitudes completas"],
      ["Remada com barra + Elevação frontal", "3x12", "Sem descanso"],
      ["Prancha com toque nos ombros", "3x30s", "Estabilidade"],
    ],
    cardio: "20 min escada ou trote leve"
  },
  {
    dia: "Dia 5 – Superior (Bi-set Progressivo)",
    tecnica: "Bi-set com novos agrupamentos musculares",
    objetivo: "Elevar estímulo metabólico",
    tempo: "40 min",
    exercicios: [
      ["Supino inclinado + Crucifixo inclinado", "3x12", "Amplitude total"],
      ["Puxada frente + Rosca direta", "3x15", "Peso leve/moderado"],
      ["Desenvolvimento na máquina", "3x12", "Cadência lenta"],
      ["Tríceps banco", "3x15", "Descanso mínimo"],
    ],
    cardio: "20 min escada"
  },
  {
    dia: "Dia 6 – Inferior + Core",
    tecnica: "Circuito alternado de força e abdominal",
    objetivo: "Ativar glúteos, pernas e abdômen",
    tempo: "45 min",
    exercicios: [
      ["Passada andando", "3x10 cada perna", "Movimento contínuo"],
      ["Cadeira extensora", "3x15", "Sem descanso"],
      ["Elevação pélvica com peso", "3x15", "Contração máxima"],
      ["Abdominal com perna elevada", "3x20", "Controle de tronco"],
      ["Prancha lateral com elevação de perna", "3x30s", "Equilíbrio"],
    ],
    cardio: "20 min caminhada rápida"
  },

  // SEMANA 3
  {
    dia: "Dia 7 – Full Body Avançado p/ Iniciante",
    tecnica: "Circuito intenso para fechamento de ciclo",
    objetivo: "Maximizar gasto calórico com exercícios compostos",
    tempo: "45 min",
    exercicios: [
      ["Agachamento sumô com halter", "4x12", "Amplitude máxima"],
      ["Flexão inclinada + Prancha", "3x10 + 30s", "Sem descanso"],
      ["Remada curvada com halteres", "3x12", "Controle da lombar"],
      ["Elevação lateral + frontal alternada", "3x15", "Estímulo leve"],
    ],
    cardio: "25 min escada ou corrida leve"
  },
  {
    dia: "Dia 8 – Superior (Finalização)",
    tecnica: "Bi-set com foco em exaustão controlada",
    objetivo: "Fechar o estímulo com segurança",
    tempo: "40 min",
    exercicios: [
      ["Supino máquina + Crucifixo no cross", "3x12", "Amplitude máxima"],
      ["Puxada frente pegada fechada", "3x12", "Foco no dorsal"],
      ["Rosca alternada", "3x15", "Movimento isolado"],
      ["Elevação lateral + tríceps corda", "3x15", "Sem descanso"],
    ],
    cardio: "25 min escada"
  },
  {
    dia: "Dia 9 – Inferior + Core (Finalização)",
    tecnica: "Circuito completo de base + abdominal",
    objetivo: "Encerrar com foco em glúteo, perna e core",
    tempo: "45 min",
    exercicios: [
      ["Agachamento no smith", "3x15", "Cadência lenta"],
      ["Leg press + Cadeira flexora", "3x12", "Bi-set intenso"],
      ["Elevação pélvica com pausa isométrica", "3x20", "Contração máxima"],
      ["Abdominal prancha dinâmica", "3x30s", "Foco na respiração"],
      ["Prancha lateral com braço estendido", "3x30s", "Sem compensar"],
    ],
    cardio: "25 min caminhada inclinada"
  }
];


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
        <td>${ex[0]}</td>
        <td>${ex[1]}</td>
        <td>${ex[2]}</td>
        <td>${ex[3]}</td>
        <td>${ex[4]}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  if (treino.cardio) html += `<p><strong>Cardio:</strong> ${treino.cardio}</p>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

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

const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


