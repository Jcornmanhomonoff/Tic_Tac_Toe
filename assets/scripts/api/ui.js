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

const failure = () => {
  console.log('nope')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  failure
}
