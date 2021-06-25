function startGame() {
  // starting a new game

  let playerName: string = 'Audrey';
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

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}


function logPlayer(name: string) {
  console.log(`New game starting for player: ${name}`); // Comment on interpolation
}

document.getElementById('startGame')!.addEventListener('click', startGame);
