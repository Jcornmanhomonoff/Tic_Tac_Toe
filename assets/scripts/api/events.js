'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.createGameSuccess)
    .then(onGameHistory)
    .catch(ui.failure)
}

const onGameHistory = function () {
  api.getGames()
    .done(ui.getGamesSuccess)
    .fail(ui.failure)
}

const apiAddHandlers = () => {
  $('#newGame').on('click', onNewGame)
  $('#showGames').on('click', onGameHistory)
}

module.exports = {
  apiAddHandlers,
  onNewGame,
  onGameHistory
}
