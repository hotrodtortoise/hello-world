const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
 	} else {
  console.log("That would be cool, but you can't use it this time.")
	};
}
// !TEST for false; console.log(getUserChoice('dynamite'));
// !TEST for true; console.log(getUserChoice('rock'));
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0: 
      return'rock';
    case 1: 
      return 'paper';
    case 2: 
      return 'scissors';
  }
};
// !TEST for computer True console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'DRAW! Shoot again.'
  	} if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lose...';
      } else {
        return 'You WON!';
      }
    } if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lose...';
      } else {
        return 'You WON!';
      }
    } if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lose...';
      } else {
        return 'You WON!';
      } 
      if (userChoice === 'bomb') {
          if (computerChoice === 'rock' || 'paper' || 'scissors') {
            return 'No Contest!!';
          }
        }
      }
    }
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice ();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
