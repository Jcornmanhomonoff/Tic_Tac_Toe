'use strict'
const store = require('../store')
const gameLogicUi = require('../game-logic/events')

const createGameSuccess = (data) => {
  console.log(data)
  store.game = data.game
  console.log(store.game)
  $('.box').bind('click', gameLogicUi.onClick)
  $('.box').html('')
  const gameboard = ['', '', '', '', '', '', '', '', '']
  return gameboard
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
