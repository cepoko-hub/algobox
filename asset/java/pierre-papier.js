function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "block";
    }
  }
  
  let options = ['✊', '✋', '✌'];
  let playerChoice;
  let aiChoice;
  
  function startGame() {
    document.getElementById("message").textContent = "Choisissez Pierre, Papier ou Ciseaux !";
    document.getElementById("choices").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
  
  function playGame(choice) {
    playerChoice = choice;
    aiChoice = options[Math.floor(Math.random() * 3)];
    determineWinner();
  }
  
  function determineWinner() {
    if (playerChoice === aiChoice) {
      document.getElementById("message").textContent = "Égalité ! Choisissez à nouveau.";
      document.getElementById("result").style.display = "none";
    } else {
      let resultMessage = "";
      if (
        (playerChoice === '✊' && aiChoice === '✌') ||
        (playerChoice === '✋' && aiChoice === '✊') ||
        (playerChoice === '✌' && aiChoice === '✋')
      ) {
        resultMessage = `Vous avez gagné ! ${playerChoice} bat ${aiChoice}`;
      } else {
        resultMessage = `Vous avez perdu ! ${aiChoice} bat ${playerChoice}`;
      }
      document.getElementById("result").textContent = resultMessage;
      document.getElementById("result").style.display = "block";
      document.getElementById("message").textContent = "Appuyez sur le bouton pour rejouer.";
    }
  }
  