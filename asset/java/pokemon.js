let creatures = [];
let currentCreature;
let currentHP;
let maxHP;

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

function loadCreatures() {
  fetch('asset/java/json/pkmnliste.json')
    .then(response => response.json())
    .then(data => {
      creatures = data;
    })
    .catch(error => {
      console.error("Erreur lors du chargement des créatures : ", error);
    });
}

function startGame() {
  if (creatures.length === 0) {
    alert("Les créatures ne sont pas encore chargées. Veuillez réessayer.");
    return;
  }

  currentCreature = creatures[Math.floor(Math.random() * creatures.length)];
  currentHP = currentCreature.hp;
  maxHP = currentCreature.hp;
  
  document.getElementById("creatureImage").src = currentCreature.image;
  document.getElementById("creatureHP").textContent = currentHP;
  document.getElementById("creatureMaxHP").textContent = maxHP;
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("actionMenu").style.display = "block"; 
  document.getElementById("message").textContent = `Une ${currentCreature.name} sauvage est apparue !`;
}

function normalAttack() {
  let damage = Math.floor(Math.random() * 4) + 4; 
  currentHP -= damage;
  if (currentHP < 0) currentHP = 0;
  updateGameStatus(`Vous infligez ${damage} points de dégâts avec l'attaque normale.`);
}

function powerfulAttack() {
  let damage = Math.floor(Math.random() * 5) + 10; 
  currentHP -= damage;
  if (currentHP < 0) currentHP = 0;
  updateGameStatus(`Vous infligez ${damage} points de dégâts avec l'attaque puissante.`);
}

function throwBall() {
  let catchChance = 0;
  let hpPercentage = (currentHP / maxHP) * 100;

  if (hpPercentage > 70) {
    catchChance = 10;
  } else if (hpPercentage > 40) {
    catchChance = 50;
  } else if (hpPercentage <= 10) {
    catchChance = 90;
  }

  let success = Math.random() * 100 < catchChance;

  if (success) {
    document.getElementById("message").textContent = `Félicitations ! Vous avez capturé ${currentCreature.name} !`;
    document.getElementById("actionMenu").style.display = "none";
    document.getElementById("startButton").textContent = "Rejouer";
    document.getElementById("startButton").style.display = "block";
  } else {
    document.getElementById("message").textContent = "La capture a échoué !";
  }
}

function updateGameStatus(message) {
  document.getElementById("creatureHP").textContent = currentHP;
  document.getElementById("message").textContent = message;

  if (currentHP <= 0) {
    document.getElementById("message").textContent += `\n${currentCreature.name} est KO.`;
    document.getElementById("actionMenu").style.display = "none";
    document.getElementById("startButton").textContent = "Rejouer";
    document.getElementById("startButton").style.display = "block";
  }
}

window.onload = loadCreatures;
