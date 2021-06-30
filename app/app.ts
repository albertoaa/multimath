function startGame() {
  // starting a new game

  let playerName: string | undefined = getInputValue('playername'); // getting name from input
  // playerName = 10;
  // playerName = true;
  // const playerName = 'Audrey';
  // playerName = 'Theo';
  // playerName = null;
  // playerName = undefined;
  // let playerName: string | undefined;
  logPlayer(playerName);
  // 1 put on top to show the error, substitute for var to check value
  // 2 change value for different types to check for errors
  // 3 change to const to not be able to reassign value
  // 4 show console.log on web browser
  // 5 assign null to playerName before setting strictNullCheck compiler option
  // 6 notice that when strictNullCheck is not enabled I can declare the variable without value and passing it to a function
  // 7 enable the strictNullCheck on compiler and check errors
  // 8 add undefined as union type for playerName

  // postScore(80); // Tye without playerName parameter to check the result on the page
  postScore(80, playerName);
  postScore(-5, playerName); // added to show the logger function call to error
}

function logPlayer(name: string = 'Multimath Player'): void {
  console.log(`New game starting for player: ${name}`); // Comment on interpolation
}

// retrieve user input values
function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(
  score: number,
  playerName: string = 'Multimath Player'
): void {
  let logger: (value: string) => void; // assigning function type to variable

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null =
    document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`; // notice the non null assertion to assert that the scoreElement won't be null

  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

// function logMessage(message: string): void {
//   console.log(message);
// }

// functions has a type that is the combinations of all parameters types and the return value type
const logMessage = (message: string): void => console.log(message);

function logError(err: string): void {
  console.error(err);
}

// let myResult: Result = {}; uncomment to demonstrate compiler error on interface assignment
let myResult: Result = {
  playerName: 'Marie',
  score: 5,
  problemCount: 5,
  factor: 7,
};

// let player: Person = {} uncomment to demonstrate compiler error on interface assignment
let player: Person = {
  name: 'Daniel',
  formatName: () => 'Dan',
};
