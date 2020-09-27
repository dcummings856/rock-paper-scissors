const computerPlay = (choice) => {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

const playRound = (playerChoice, computerChoice) => {
    computerChoice = computerPlay();
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose!');
    } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        console.log('You lose!');
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose!');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win!');
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win!');
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win!');
    } else {
        console.log('It\'s a draw.');
    }
};
