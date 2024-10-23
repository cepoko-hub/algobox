let secretCode = [];
let playerCode = [];
let availableColors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

function startGame() {
  secretCode = [];
  playerCode = [];
  for (let i = 0; i < 4; i++) {
    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    secretCode.push(randomColor);
  }

  document.getElementById("currentGuess").textContent = "";
  document.getElementById("attempts").innerHTML = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("guessButton").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("message").textContent = "Devinez la combinaison de couleurs !";
  document.getElementById("startButton").style.display = "none";
}

function chooseColor(color) {
  if (playerCode.length < 4) {
    playerCode.push(color);
    document.getElementById("currentGuess").textContent = playerCode.join(" ");
    if (playerCode.length === 4) {
      document.getElementById("guessButton").style.display = "block";
    }
  }
}

function makeGuess() {
  let blackPoints = 0;
  let whitePoints = 0;
  let tempSecretCode = [...secretCode];
  let tempPlayerCode = [...playerCode];

  for (let i = 0; i < 4; i++) {
    if (tempPlayerCode[i] === tempSecretCode[i]) {
      blackPoints++;
      tempSecretCode[i] = null; 
      tempPlayerCode[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (tempPlayerCode[i] !== null) {
      const indexInSecret = tempSecretCode.indexOf(tempPlayerCode[i]);
      if (indexInSecret !== -1) {
        whitePoints++;
        tempSecretCode[indexInSecret] = null;
      }
    }
  }

  let attemptResult = `Votre combinaison : ${playerCode.join(" ")} | ⚫ : ${blackPoints}, ⚪ : ${whitePoints}`;
  document.getElementById("attempts").innerHTML += `<p>${attemptResult}</p>`;

  if (blackPoints === 4) {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent = "Félicitations ! Vous avez trouvé la combinaison correcte.";
    document.getElementById("startButton").textContent = "Rejouer";
    document.getElementById("startButton").style.display = "block";
  } else {
    playerCode = [];
    document.getElementById("currentGuess").textContent = "";
    document.getElementById("guessButton").style.display = "none";
  }
}
