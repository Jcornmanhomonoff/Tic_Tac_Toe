// 'use strict'
//
// const events = require('./events')
//
// let gameOver = false
//
// const wins = [[events.gameboard[0], events.gameboard[1], events.gameboard[2]],
//              [events.gameboard[3], events.gameboard[4], events.gameboard[5]],
//              [events.gameboard[6], events.gameboard[7], events.gameboard[8]],
//              [events.gameboard[0], events.gameboard[3], events.gameboard[6]],
//              [events.gameboard[1], events.gameboard[4], events.gameboard[7]],
//              [events.gameboard[2], events.gameboard[5], events.gameboard[8]],
//              [events.gameboard[0], events.gameboard[4], events.gameboard[8]]]
//
// // checkWinner = function () {
// //   wins.forEach(function (arr) {
// //     let index = 0
// //     arr.forEach(function (e) {
// //       if e = index
// //     })
// //   })
// // }
//
// const checkWinner = function (currentPlayer) {
//   console.log('in check winner')
//   wins.forEach(function (arr) {
//     arr.forEach(function (i) {
//       [i] === currentPlayer ? gameOver = true : gameOver = false
//     })
//   })
//   return gameOver
// }
//
// module.exports = {
//   checkWinner
// }
