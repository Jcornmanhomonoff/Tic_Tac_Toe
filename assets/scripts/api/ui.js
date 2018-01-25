'use strict'

const store = require('../store')
// const gameLogicUi = require('../game-logic/events')

const createGameSuccess = (data) => {
  store.game = data.game
  store.gameboard = data.game.cells
  $('.box').html('')
  $('.gameboard').removeClass('not-active')
}

const updateGameSuccess = (data) => {
  store.game = data.game
}

const getGamesSuccess = (data) => {
  store.games = data.games
  $('.game-history').text('Games Played: ' + store.games.length)
}

const failure = (err) => {
  console.error(err)
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess,
  failure
}
