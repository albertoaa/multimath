'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Helpers = require('./utility');
var player_1 = require('./models/player');
var game_1 = require('./game');
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
  var player = new player_1.Player();
  player.name = Helpers.getValue('playername');
  var problemCount = Number(Helpers.getValue('problemCount'));
  var factor = Number(Helpers.getValue('factor'));
  newGame = new game_1.Game(player, problemCount, factor);
  newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
  newGame.calculateScore();
});
