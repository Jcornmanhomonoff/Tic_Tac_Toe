'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game-logic/events')
const apiEvents = require('./api/events')

const switchForms = () => {
  $('#login-form').toggle()
  $('#signup-form').toggle()
  $('.switch-signin').toggle()
  $('.switch-signup').toggle()
}

const toggleMenu = () => {
  $('#wrapper').toggleClass('toggled')
}

$(() => {
  setAPIOrigin(location, config)
  authEvents.authAddHandlers()
  apiEvents.apiAddHandlers()
  $('#menu-toggle').hide()
  $('#login-form').hide()
  $('.gameboard').hide()
  $('.switch-signup').hide()
  $('.switch-signup').on('click', function () {
    $('#signin-form').toggle()
    switchForms()
  })
  $('.switch-signin').on('click', function () {
    switchForms()
  })
  $('#menu-toggle').on('click', function (e) {
    e.preventDefault()
    toggleMenu()
  })
  $('.close-sidebar').on('click', function (e) {
    e.preventDefault()
    toggleMenu()
  })
  gameEvents.onClick()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
