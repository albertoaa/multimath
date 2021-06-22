function startGame() {
  // starting a new game

  let playerName: string = 'Audrey';
  // playerName = 10;
  // playerName = true;
  // const playerName = 'Audrey';
  // playerName = 'Theo';
  logPlayer(playerName);
  // 1 put on top to show the error, substitute for var to check value
  // 2 change value for different types to check for errors
  // 3 change to const to not be able to reassign value
  // 4 show console.log on web browser

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}


function logPlayer(name) {
  console.log(`New game starting for player: ${name}`); // Comment on interpolation
}

document.getElementById('startGame')!.addEventListener('click', startGame);
