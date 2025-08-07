  const treinos = [
  {
    dia: "DIA 1 – FULL BODY (CIRCUITO)",
    tecnica: "Circuito de Corpo Inteiro",
    objetivo: "Ativar grandes grupos musculares para aumento de gasto calórico",
    exercicios: [
      { nome: "Agachamento livre", series: "3", reps: "15", tecnica: "Cadência controlada", obs: "" },
      { nome: "Flexão de braço com joelho no chão", series: "3", reps: "10", tecnica: "Amplitude máxima", obs: "" },
      { nome: "Remada baixa + Elevação lateral", series: "3", reps: "12 cada", tecnica: "Circuito sem descanso", obs: "" },
      { nome: "Prancha abdominal", series: "3", reps: "30s", tecnica: "Foco em respiração", obs: "" },
      { nome: "Cardio: Caminhada rápida ou escada", series: "-", reps: "15min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 2 – PARTE SUPERIOR (BI-SET)",
    tecnica: "Bi-set leve para parte superior",
    objetivo: "Estimular músculos superiores com intensidade moderada",
    exercicios: [
      { nome: "Supino reto halteres + Crucifixo", series: "3", reps: "12", tecnica: "Cadência suave", obs: "" },
      { nome: "Remada unilateral", series: "3", reps: "12 por braço", tecnica: "Foco no controle", obs: "" },
      { nome: "Desenvolvimento com halteres", series: "3", reps: "12", tecnica: "Sem descansar entre braços", obs: "" },
      { nome: "Tríceps corda", series: "3", reps: "15", tecnica: "Descanso curto", obs: "" },
      { nome: "Cardio: Bicicleta ergométrica", series: "-", reps: "20min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 3 – INFERIOR + CORE (CIRCUITO)",
    tecnica: "Circuito alternado de inferiores e abdominal",
    objetivo: "Estimular parte inferior + abdômen com gasto calórico",
    exercicios: [
      { nome: "Afundo com halteres", series: "3", reps: "10 cada perna", tecnica: "Cadência 3-1-1", obs: "" },
      { nome: "Leg press 45°", series: "3", reps: "15", tecnica: "Amplitude máxima", obs: "" },
      { nome: "Elevação pélvica", series: "3", reps: "20", tecnica: "Contração máxima", obs: "" },
      { nome: "Abdominal remador", series: "3", reps: "20", tecnica: "Sem descanso", obs: "" },
      { nome: "Prancha lateral alternando lados", series: "3", reps: "30s", tecnica: "Controle total", obs: "" },
      { nome: "Cardio: Caminhada inclinada", series: "-", reps: "20min", tecnica: "Cardio final", obs: "" }
    ]
  },
  {
    dia: "DIA 4 – FULL BODY FUNCIONAL",
    tecnica: "Sequência com pausas curtas",
    objetivo: "Aumentar resistência e acelerar o metabolismo",
    exercicios: [
      { nome: "Agachamento com halteres", series: "3", reps: "15", tecnica: "Foco na postura", obs: "" },
      { nome: "Flexão de braço no step", series: "3", reps: "10", tecnica: "Amplitude total", obs: "" },
      { nome: "Puxada no pulley frente", series: "3", reps: "12", tecnica: "Cadência 2-1-2", obs: "" },
      { nome: "Abdominal infra com bola", series: "3", reps: "20", tecnica: "Descanso curto", obs: "" },
      { nome: "Cardio: Escada ou esteira inclinada", series: "-", reps: "15min", tecnica: "Sem pausas", obs: "" }
    ]
  },
  {
    dia: "DIA 5 – SUPERIOR + CORE (BI-SET)",
    tecnica: "Bi-set + cardio leve",
    objetivo: "Manter tônus e queima calórica",
    exercicios: [
      { nome: "Desenvolvimento máquina + Elevação lateral", series: "3", reps: "10 + 15", tecnica: "Bi-set", obs: "" },
      { nome: "Pulley frente", series: "3", reps: "12", tecnica: "Cadência controlada", obs: "" },
      { nome: "Tríceps testa com halteres", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal oblíquo com halteres", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Cardio: Bicicleta HIIT leve", series: "-", reps: "15min", tecnica: "Alterna leve/médio", obs: "" }
    ]
  },
  {
    dia: "DIA 6 – INFERIOR FUNCIONAL + CORE",
    tecnica: "Circuito com foco em pernas e abdômen",
    objetivo: "Melhorar resistência e definição",
    exercicios: [
      { nome: "Avanço alternado com halteres", series: "3", reps: "12 cada perna", tecnica: "Cadência 3s", obs: "" },
      { nome: "Stiff com halteres", series: "3", reps: "15", tecnica: "Contração no final", obs: "" },
      { nome: "Cadeira extensora", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Prancha frontal", series: "3", reps: "40s", tecnica: "", obs: "" },
      { nome: "Cardio: Caminhada outdoor", series: "-", reps: "20min", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 7 – FULL BODY (AVANÇO)",
    tecnica: "Cadência + circuito",
    objetivo: "Progredir com segurança e gasto alto",
    exercicios: [
      { nome: "Agachamento sumô", series: "3", reps: "15", tecnica: "Desce 3s", obs: "" },
      { nome: "Supino máquina", series: "3", reps: "12", tecnica: "Amplitude máxima", obs: "" },
      { nome: "Remada baixa", series: "3", reps: "12", tecnica: "Foco no cotovelo", obs: "" },
      { nome: "Abdominal bicicleta", series: "3", reps: "30s", tecnica: "", obs: "" },
      { nome: "Cardio: Elíptico ou corrida leve", series: "-", reps: "20min", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 8 – SUPERIOR + CORE FINAL",
    tecnica: "Bi-set + controle de movimento",
    objetivo: "Finalizar com tônus e consciência muscular",
    exercicios: [
      { nome: "Supino reto com barra + Crucifixo", series: "3", reps: "10 + 10", tecnica: "Bi-set", obs: "" },
      { nome: "Remada unilateral", series: "3", reps: "12", tecnica: "Cadência controlada", obs: "" },
      { nome: "Elevação frontal + lateral", series: "3", reps: "12 + 12", tecnica: "Sem descanso", obs: "" },
      { nome: "Abdominal prancha frontal", series: "3", reps: "45s", tecnica: "", obs: "" },
      { nome: "Cardio: Corrida leve", series: "-", reps: "20min", tecnica: "Ritmo constante", obs: "" }
    ]
  },
  {
    dia: "DIA 9 – INFERIOR FINAL + CORE",
    tecnica: "Finalização + simetria",
    objetivo: "Fechar o ciclo com foco na postura e equilíbrio",
    exercicios: [
      { nome: "Agachamento hack", series: "3", reps: "12", tecnica: "Cadência 3-1", obs: "" },
      { nome: "Avanço na esteira", series: "3", reps: "10 cada perna", tecnica: "Com halteres", obs: "" },
      { nome: "Cadeira adutora", series: "3", reps: "20", tecnica: "Foco na contração", obs: "" },
      { nome: "Abdominal supra máquina", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Cardio: Subida de escadas", series: "-", reps: "10min", tecnica: "Ritmo contínuo", obs: "" }
    ]
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



