'use strict'

const config = require('../config')
const store = require('../store')
// const events = require('../game-logic/events.js')

const newGame = function () {
  console.log(store.user)
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  console.log(index, value)
  console.log(store.game)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index,
          value
        },
        over
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
