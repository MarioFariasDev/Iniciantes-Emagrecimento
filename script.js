const treinos = [
  {
    dia: "DIA 1 – FULL BODY INICIAL",
    tecnica: "Cadência controlada + foco em execução",
    objetivo: "Ativar toda musculatura com volume leve",
    exercicios: [
      { nome: "Agachamento com halteres", series: "3", reps: "12", tecnica: "Cadência 3s descida", obs: "" },
      { nome: "Supino reto com halteres", series: "3", reps: "12", tecnica: "Amplitude total", obs: "" },
      { nome: "Puxada frente no pulley", series: "3", reps: "12", tecnica: "Contração máxima", obs: "" },
      { nome: "Elevação lateral", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal tradicional", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 2 – MEMBROS SUPERIORES",
    tecnica: "Volume moderado + bi-set leve",
    objetivo: "Trabalhar força e resistência muscular local",
    exercicios: [
      { nome: "Supino inclinado com halteres", series: "3", reps: "10", tecnica: "", obs: "" },
      { nome: "Remada baixa", series: "3", reps: "12", tecnica: "Foco na postura", obs: "" },
      { nome: "Desenvolvimento com halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Rosca direta + Tríceps corda", series: "3", reps: "10 + 10", tecnica: "Bi-set leve", obs: "" }
    ]
  },
  {
    dia: "DIA 3 – MEMBROS INFERIORES",
    tecnica: "Cadência + estímulo de base",
    objetivo: "Fortalecer pernas e glúteos",
    exercicios: [
      { nome: "Leg press", series: "4", reps: "12", tecnica: "Cadência 3-1-1", obs: "" },
      { nome: "Cadeira extensora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Mesa flexora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Glúteo no cross ou caneleira", series: "3", reps: "20", tecnica: "", obs: "" },
      { nome: "Panturrilha sentado", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 4 – FULL BODY PROGRESSIVO",
    tecnica: "Volume crescente",
    objetivo: "Avançar na adaptação e técnica",
    exercicios: [
      { nome: "Agachamento com barra guiada", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Supino reto máquina", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Puxada por trás", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Desenvolvimento máquina", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Abdominal infra", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 5 – SUPERIOR (ÊNFASE EM BRAÇOS)",
    tecnica: "Técnica de bi-set e cadência",
    objetivo: "Estímulo local e progressão de força",
    exercicios: [
      { nome: "Supino reto com barra", series: "3", reps: "10", tecnica: "", obs: "" },
      { nome: "Remada unilateral", series: "3", reps: "12", tecnica: "Foco no controle", obs: "" },
      { nome: "Rosca alternada + Tríceps testa", series: "3", reps: "10 + 10", tecnica: "Bi-set", obs: "" },
      { nome: "Elevação lateral sentado", series: "3", reps: "15", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 6 – INFERIOR (ESTÍMULO UNILATERAL)",
    tecnica: "Ênfase em estabilidade e simetria",
    objetivo: "Promover controle e ativação muscular",
    exercicios: [
      { nome: "Avanço com step", series: "3", reps: "10 cada perna", tecnica: "", obs: "" },
      { nome: "Cadeira abdutora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Stiff com halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Cadeira extensora unilateral", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Panturrilha em pé", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 7 – FULL BODY FINAL",
    tecnica: "Estímulo global + leve sobrecarga",
    objetivo: "Consolidação da base",
    exercicios: [
      { nome: "Agachamento guiado", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Supino inclinado halteres", series: "3", reps: "10", tecnica: "", obs: "" },
      { nome: "Remada baixa", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Desenvolvimento com halteres", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Abdominal oblíquo", series: "3", reps: "20", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 8 – PARTE SUPERIOR FINAL",
    tecnica: "Bi-set + volume contínuo",
    objetivo: "Força e definição inicial",
    exercicios: [
      { nome: "Supino reto + Crucifixo", series: "3", reps: "10 + 12", tecnica: "Bi-set", obs: "" },
      { nome: "Puxada frente aberta", series: "3", reps: "12", tecnica: "", obs: "" },
      { nome: "Elevação frontal + lateral", series: "3", reps: "10 + 10", tecnica: "", obs: "" },
      { nome: "Tríceps corda", series: "3", reps: "15", tecnica: "", obs: "" }
    ]
  },
  {
    dia: "DIA 9 – PERNAS FINAL + CORE",
    tecnica: "Volume moderado + técnica",
    objetivo: "Finalizar com simetria e resistência",
    exercicios: [
      { nome: "Leg press", series: "4", reps: "12", tecnica: "", obs: "" },
      { nome: "Mesa flexora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Cadeira adutora", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Glúteo com caneleira", series: "3", reps: "15", tecnica: "", obs: "" },
      { nome: "Prancha frontal", series: "3", reps: "40s", tecnica: "", obs: "" }
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




