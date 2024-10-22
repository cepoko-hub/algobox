let randomNumber;
let attempts = 0;

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

function startGame() {
  randomNumber = Math.floor(Math.random() * 10000) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "Entrez un chiffre entre 1 et 10 000.";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessButton").disabled = false;
  document.getElementById("playButton").textContent = "Rejouer";
}

function makeGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (guess < randomNumber) {
    document.getElementById("message").textContent = "Trop petit ! Essaye encore.";
  } else if (guess > randomNumber) {
    document.getElementById("message").textContent = "Trop grand ! Essaye encore.";
  } else {
    document.getElementById("message").textContent = `Bravo ! Vous avez trouvé en ${attempts} essais.`;
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
  }
}
