'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game-logic/events')
const apiEvents = require('./api/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.authAddHandlers()
  apiEvents.apiAddHandlers()
  $('#menu-toggle').hide()
  $('#login-form').hide()
  $('.gameboard').hide()
  $('.switch-signup').hide()
  $('.switch-signup').on('click', function () {
    $('#login-form').toggle()
    $('#signin-form').toggle()
    $('#signup-form').toggle()
    $('.switch-signin').toggle()
    $('.switch-signup').toggle()
  })
  $('.switch-signin').on('click', function () {
    $('#login-form').toggle()
    $('#signup-form').toggle()
    $('.switch-signup').toggle()
    $('.switch-signin').toggle()
  })
  $('#menu-toggle').on('click', function (e) {
    e.preventDefault()
    console.log('toggled')
    $('#wrapper').toggleClass('toggled')
  })
  gameEvents.moveCounter()
  gameEvents.onClick()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
