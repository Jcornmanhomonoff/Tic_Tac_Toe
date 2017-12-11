'use strict'

const store = require('../store')
// const gameLogicUi = require('../game-logic/events')

const createGameSuccess = (data) => {
  console.log(data)
  store.game = data.game
  store.gameboard = data.game.cells
  console.log(store.game)
  $('.box').html('')
  $('.gameboard').removeClass('not-active')
}

const updateGameSuccess = (data) => {
  console.log(data)
  store.game = data.game
  console.log('UPDATE SUCESS')
}

const getGamesSuccess = (data) => {
  console.log(data.games.length)
  store.games = data.games
  $('.game-history').text('Games Played: ' + store.games.length)
  // checkGamesWon()
}

const failure = (err) => {
  console.log('nope')
  console.error(err)
}

// const checkGamesWon = () => {
//   (store.games).forEach(function (game) {
//     console.log(game)
//   })
// }

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess,
  failure
}
