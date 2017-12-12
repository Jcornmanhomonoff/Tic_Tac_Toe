'use strict'

const store = require('../store')
const apiEvents = require('../api/events')

const signUpSuccess = (data) => {
  console.log('in sign up success data is ', data)
  store.user = data.user
  $('#signup-form').toggle()
  $('.switch-signin').toggle()
  $('.gameboard').show()
  $('#menu-toggle').show()
  $('#login-form input').val('')
}

const logInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)
  apiEvents.onNewGame()
  $('#login-form').hide()
  $('.gameboard').show()
  $('#menu-toggle').show()
  $('.switch-signup').hide()
  $('#login-form input').val('')
  $('#signup-form input').val('')
  apiEvents.onGameHistory()
}

const changePwSuccess = () => {
  console.log('Change password success')
}

const signOutSuccess = () => {
  console.log('successful sign out')
  $('#menu-toggle').hide()
  $('#wrapper').removeClass('toggled')
  $('#signup-form').show()
  $('.gameboard').hide()
  $('.switch-signin').toggle()
  $('.active').siblings().slideToggle()
  $('.active').removeClass('active')
  // reset store & gameboard upon logging out
  store.gameboard = []
  store.game = {}
  store.games = []
  store.user = {}
  $('.box').text('')
}

const changePwFailure = () => {
  $('#changePw-form').addClass('shake')
  setTimeout(function () {
    console.log(this)
    $('#changePw-form').removeClass('shake')
  }, 800)
}

const signUpFailure = () => {
  $('#signup-form').addClass('shake')
  setTimeout(function () {
    console.log(this)
    $('#signup-form').removeClass('shake')
  }, 800)
}

const logInFailure = () => {
  $('#login-form').addClass('shake')
  setTimeout(function () {
    console.log(this)
    $('#login-form').removeClass('shake')
  }, 800)
}

const failure = () => {
  console.log('nope')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePwSuccess,
  signOutSuccess,
  changePwFailure,
  failure
}
