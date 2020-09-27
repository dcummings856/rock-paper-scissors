const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let results_p = document.getElementById('results');


const computerPlay = () => {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};


const playRound = (playerChoice) => {
    const computerChoice = computerPlay();
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        return results_p.innerHTML = 'You Lose!';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return results_p.innerHTML = 'You Lose!';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return results_p.innerHTML = 'You Lose!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return results_p.innerHTML = 'You win!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return results_p.innerHTML = 'You win!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return results_p.innerHTML = 'You win!';
    } else {
        return results_p.innerHTML = 'It\'s a Draw.';
    }
};

game = () => {

rock.addEventListener('click', () => {
    playRound('rock');
});

paper.addEventListener('click', () => {
    playRound('paper');
});

scissors.addEventListener('click', () => { 
    playRound('scissors')
});

};

game();
