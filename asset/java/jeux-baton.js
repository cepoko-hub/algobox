let remainingSticks;

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

function startGame() {
  remainingSticks = 16;
  document.getElementById("remainingSticks").textContent = remainingSticks;
  document.getElementById("message").textContent = "Choisissez combien de bâtonnets retirer.";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("choices").style.display = "block";
  document.getElementById("result").style.display = "none";
  document.getElementById("startButton").style.display = "none";
}

function playerMove(sticks) {
  if (remainingSticks - sticks <= 0) {
    endGame("Vous avez perdu ! Vous avez pris le dernier bâtonnet.");
    return;
  }

  remainingSticks -= sticks;
  document.getElementById("remainingSticks").textContent = remainingSticks;

  if (remainingSticks > 0) {
    aiMove();
  }
}

function aiMove() {
  let sticksToRemove = Math.min(Math.floor(Math.random() * 3) + 1, remainingSticks);
  
  if (remainingSticks - sticksToRemove <= 0) {
    endGame("L'IA a perdu ! Elle a pris le dernier bâtonnet.");
    return;
  }

  remainingSticks -= sticksToRemove;
  document.getElementById("remainingSticks").textContent = remainingSticks;

  if (remainingSticks <= 0) {
    endGame("L'IA a perdu !");
  }
}

function endGame(message) {
  document.getElementById("message").textContent = message;
  document.getElementById("choices").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").textContent = "Partie terminée. " + message;
  document.getElementById("startButton").style.display = "block";
  document.getElementById("startButton").textContent = "Rejouer";
}
