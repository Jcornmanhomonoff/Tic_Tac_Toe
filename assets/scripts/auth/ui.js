'use strict'

const store = require('../store')
const apiEvents = require('../api/events')

const signUpSuccess = (data) => {
  console.log(data)
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
}

const failure = () => {
  console.log('nope')
}

module.exports = {
  signUpSuccess,
  logInSuccess,
  changePwSuccess,
  signOutSuccess,
  failure
}
