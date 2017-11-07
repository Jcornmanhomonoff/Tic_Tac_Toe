'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = function () {
  event.preventDefault()
  api.newGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure)
}

const apiAddHandlers = () => {
  $('#newGame').on('click', onNewGame)
}

module.exports = {
  apiAddHandlers
}
