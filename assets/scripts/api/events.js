'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = function () {
  event.preventDefault()
  api.newGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure)
}

const onGameHistory = function () {
  event.preventDefault()
  api.getGames()
  .done(ui.getGamesSuccess)
  .fail(ui.failure)
}

const apiAddHandlers = () => {
  $('#newGame').on('click', onNewGame)
  $('#showGames').on('click', onGameHistory)
  $('#showGames').on('click', function () {
    $('.game-history').slideToggle()
  })
}

module.exports = {
  apiAddHandlers
}
