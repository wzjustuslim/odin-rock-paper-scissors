function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const rng = Math.floor(Math.random() * 3)
  return choices[rng]
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function playRound(playerSelection, computerSelection) {
  const log = document.getElementById('log')
  if (playerSelection === computerSelection) {
    log.textContent = "It's a tie!"
    return 'tie'
  }

  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'paper') {
        log.textContent = "You Lose! Paper beats Rock"
        return 'computer'
      }
      break;
    
    case 'paper':
      if (computerSelection === 'scissors') {
        log.textContent = "You Lose! Scissors beats Paper"
        return 'computer'
      }
      break;
    
    case 'scissors':
      if (computerSelection === 'rock') {
        log.textContent = "You Lose! Rock beats Scissors"
        return 'computer'
      }
      break;
  
    default:
      break;
  }

  log.textContent = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
  return 'player'
}

const btnArray = Array.from(document.querySelectorAll('button'))
btnArray.forEach(btn => {
  btn.addEventListener('click', () => playRound(btn.value, getComputerChoice()))
})

