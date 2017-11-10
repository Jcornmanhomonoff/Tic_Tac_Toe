'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/api')
const ui = require('../api/ui')
// const winner = require('./winner')

const gameboard = ['', '', '', '', '', '', '', '', '']

let over = false

// const wins = [[gameboard[0], gameboard[1], gameboard[2]],
//              [gameboard[3], gameboard[4], gameboard[5]],
//              [gameboard[6], gameboard[7], gameboard[8]],
//              [gameboard[0], gameboard[3], gameboard[6]],
//              [gameboard[1], gameboard[4], gameboard[7]],
//              [gameboard[2], gameboard[5], gameboard[8]],
//              [gameboard[0], gameboard[4], gameboard[8]]]

const checkWinner = function () {
  console.log('in check winner')
  if (
  (gameboard[0] !== '' && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) ||
  (gameboard[3] !== '' && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]) ||
  (gameboard[6] !== '' && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]) ||
  (gameboard[0] !== '' && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) ||
  (gameboard[1] !== '' && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]) ||
  (gameboard[2] !== '' && gameboard[2] === gameboard[5] && gameboard[2] === gameboard[8]) ||
  (gameboard[0] !== '' && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8])) {
    over = true
    $('.gameboard').addClass('not-active')
    console.log(over)
    console.log(gameboard)
  } else {
    over = false
    console.log(over)
    console.log(gameboard)
  }
  return over
}

// const facheckWinner = function () {
//   wins.forEach(function (arr) {
//     console.log(currentPlayer)
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === currentPlayer) {
//         over = true
//       }
//     }
//     return over
//   })
//   console.log(wins)
//   console.log(over)
// }

// const checkWinner = function () {
//   wins.forEach(function (arr) {
//     const isWinner = arr.every(function (i) {
//       console.log(i)
//       console.log(arr)
//       return i === currentPlayer
//     })
//     console.log(isWinner)
//   })
// }
  // return over

let currentPlayer = 'X'
let moves = 0

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// increase number of moves by 1 on click
const moveCounter = function () {
  $('.box').on('click', function (event) {
    const currentCell = $(this)
    if (currentCell.text() === '') {
      moves += 1
      console.log(moves)
    }
  })
}

// alternate between placing X & O on the board &
// push into gameboard array
const onClick = function () {
  $('.box').on('click', function (event) {
    const currentCell = $(this)
    if ($(this).text() === '') {
      if (moves % 2 !== 0) {
        $(this).text('X')
        const value = $(this).text()
        const index = currentCell.attr('data-index')
        gameboard[index] = currentPlayer
        switchPlayer()
        console.log(gameboard)
        checkWinner()
        api.updateGame(index, value, over)
          .done(ui.updateGameSuccess)
          .catch(ui.failure)
      } else {
        $(this).text('O')
        const value = $(this).text()
        const index = currentCell.attr('data-index')
        gameboard[index] = currentPlayer
        switchPlayer()
        console.log(gameboard)
        checkWinner()
        api.updateGame(index, value, over)
          .done(ui.updateGameSuccess)
          .catch(ui.failure)
      }
    }
  })
}

module.exports = {
  onClick,
  switchPlayer,
  moveCounter,
  gameboard
}
