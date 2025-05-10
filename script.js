let winCount = 0;
let winStreak = 0;
let lastOutcome = '';

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Show computer's choice
  const computerImage = document.getElementById('computerImage');
  computerImage.src = computerChoice + '.png';
  computerImage.alt = computerChoice;
  computerImage.classList.remove('hidden');

  // Hide after 3 seconds (3000 ms)
  setTimeout(() => {
    computerImage.classList.add('hidden');
  }, 1500);

  let resultText = '';
  let resultClass = '';

  if (playerChoice === computerChoice) {
    resultText = "It's a draw!";
    resultClass = 'result-draw';
    winStreak = 0;
    lastOutcome = 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText = 'You win!';
    resultClass = 'result-win';
    winCount++;
    winStreak++;
    lastOutcome = 'win';
  } else {
    resultText = 'You lose!';
    resultClass = 'result-lose';
    winStreak = 0;
    lastOutcome = 'lose';
  }

  // Update result text and color
  const resultEl = document.getElementById('result');
  resultEl.innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultText}`;
  resultEl.className = `result-text ${resultClass}`;

  // Update counters
  document.getElementById('winCount').innerText = winCount;
  document.getElementById('winStreak').innerText = winStreak;

  // Fixed next-game odds (fair game = 1/3)
  //document.getElementById('nextOdds').innerText = '33.33%';

  // Compound odds for winning streak
  //const streakOdds = winStreak === 0 ? 100 : Math.pow(1 / 3, winStreak) * 100;
  //document.getElementById('streakOdds').innerText = `${streakOdds.toFixed(2)}%`;
}
