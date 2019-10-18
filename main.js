const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro-button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add('fadeIn');
        });
    };
    // Match
    const playMatch = () => {
        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach((hand) => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            })
        })
        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                const computerNumber = Math.round(Math.random() * 2);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);
                // Images
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'IT is a tie';
            return;
        }
        // rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'player wins'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer wins'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'computer wins'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }
    // Call all the inner function
    startGame();
    playMatch()
};
// there we start
game()