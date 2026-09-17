const HUNT_CONFIG = {
  path1: {
    clue1: { answers: ["volleyball court"], next: "clue2.html", hint: "Proceed to Clue 02 location." },
    clue2: { answers: ["nescafe"], next: "clue3.html", hint: "Proceed to Clue 03 location." },
    clue3: { answers: ["library"], next: "clue4.html", hint: "Proceed to Clue 04 location." },
    clue4: { answers: ["anna audi"], next: "clue5.html", hint: "Proceed to final clue!" },
    clue5: { answers: ["cs hall"], next: "../success.html", hint: "Path 1 Cleared!" }
  }
};

function validateStep(pathKey, clueKey) {
  const inputEl = document.getElementById("userInput");
  const input = inputEl.value.trim().toLowerCase();
  const feedback = document.getElementById("feedbackMsg");
  const stepConfig = HUNT_CONFIG[pathKey]?.[clueKey];

  if (!stepConfig) return;

  const isCorrect = stepConfig.answers.some(ans => input.includes(ans));

  if (isCorrect) {
    inputEl.classList.remove('shake');
    feedback.className = "message success";
    feedback.textContent = `Correct! ${stepConfig.hint}`;
    setTimeout(() => {
      window.location.href = stepConfig.next;
    }, 1200);
  } else {
    feedback.className = "message error";
    feedback.textContent = "Incorrect answer. Try again!";
    inputEl.classList.remove('shake');
    void inputEl.offsetWidth; 
    inputEl.classList.add('shake');
  }
}