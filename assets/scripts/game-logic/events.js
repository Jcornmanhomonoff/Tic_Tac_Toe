'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/api')
const ui = require('../api/ui')
const apiEvents = require('../api/events')
const store = require('../store')
// const winner = require('./winner')

let over = false
let winner = ''

// const wins = [[store.gameboard[0], store.gameboard[1], store.gameboard[2]],
//              [store.gameboard[3], store.gameboard[4], store.gameboard[5]],
//              [store.gameboard[6], store.gameboard[7], store.gameboard[8]],
//              [store.gameboard[0], store.gameboard[3], store.gameboard[6]],
//              [store.gameboard[1], store.gameboard[4], store.gameboard[7]],
//              [store.gameboard[2], store.gameboard[5], store.gameboard[8]],
//              [store.gameboard[0], store.gameboard[4], store.gameboard[8]]]

const checkWinner = function () {
  console.log('in check winner')
  if (
    (store.gameboard[0] !== '' && store.gameboard[0] === store.gameboard[1] && store.gameboard[0] === store.gameboard[2]) ||
    (store.gameboard[3] !== '' && store.gameboard[3] === store.gameboard[4] && store.gameboard[3] === store.gameboard[5]) ||
    (store.gameboard[6] !== '' && store.gameboard[6] === store.gameboard[7] && store.gameboard[6] === store.gameboard[8]) ||
    (store.gameboard[0] !== '' && store.gameboard[0] === store.gameboard[3] && store.gameboard[0] === store.gameboard[6]) ||
    (store.gameboard[1] !== '' && store.gameboard[1] === store.gameboard[4] && store.gameboard[1] === store.gameboard[7]) ||
    (store.gameboard[2] !== '' && store.gameboard[2] === store.gameboard[5] && store.gameboard[2] === store.gameboard[8]) ||
    (store.gameboard[0] !== '' && store.gameboard[0] === store.gameboard[4] && store.gameboard[0] === store.gameboard[8])) {
    over = true
    winner = currentPlayer
    $('.gameboard').addClass('not-active')
    console.log(over)
    console.log(store.gameboard)
    console.log(winner)
    $('#showWinner-modal').modal('show')
    $('.show-winner').text('Congratulations ' + winner + ', you win!')
    $('#showWinner-modal').on('hidden.bs.modal', function () {
      apiEvents.onNewGame()
    })
    return winner
  } else if (store.gameboard.every(function (i) {
    return i !== ''
  })) {
    winner = 'It\'s a tie!'
    console.log(winner)
    $('#showWinner-modal').modal('show')
    $('.show-winner').text('It\'s a tie!')
    $('#showWinner-modal').on('hidden.bs.modal', function () {
      apiEvents.onNewGame()
    })
    return winner
  } else {
    over = false
    console.log(over)
    console.log(store.gameboard)
  }
  return over
}

// const checkDraw = function () {
//   console.log('there are ', moves)
//   console.log('game is ', over)
// }

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

// alternate between placing X & O on the board &
// push into store.gameboard array
const onClick = function () {
  $('.box').on('click', function (event) {
    const currentCell = $(this)
    if (currentCell.text() === '') {
      moves += 1
      console.log(moves)
      if (moves % 2 !== 0) {
        currentCell.text('X')
        const value = currentCell.text()
        const index = currentCell.attr('data-index')
        store.gameboard[index] = currentPlayer
        console.log(store.gameboard)
        checkWinner()
        switchPlayer()
        api.updateGame(index, value, over)
          .done(ui.updateGameSuccess)
          .catch(ui.failure)
      } else {
        currentCell.text('O')
        const value = $(this).text()
        const index = currentCell.attr('data-index')
        store.gameboard[index] = currentPlayer
        console.log(store.gameboard)
        checkWinner()
        switchPlayer()
        api.updateGame(index, value, over)
          .done(ui.updateGameSuccess)
          .catch(ui.failure)
      }
      console.log(over)
      return over
    }
  })
}

module.exports = {
  onClick,
  switchPlayer
}
