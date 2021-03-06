'use strict'

const store = require('../store')
const apiEvents = require('../api/events')

const signUpSuccess = (data) => {
  store.user = data.user
  $('#signup-form').toggle()
  $('.switch-signin').toggle()
  $('.gameboard').show()
  $('#menu-toggle').show()
  $('#login-form input').val('')
}

const logInSuccess = (data) => {
  store.user = data.user
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
  $('.pwSuccessMessage').fadeIn(1000)
  setTimeout(function () {
    $('.pwSuccessMessage').fadeOut(2000)
    $('#changePw-form input').val('')
  }, 2500)
  setTimeout(function () {
    $('#changePw').removeClass('active')
    $('.changePw-section').slideToggle()
  }, 4000)
}

const signOutSuccess = () => {
  $('#menu-toggle').hide()
  $('#wrapper').removeClass('toggled')
  $('#signup-form').show()
  $('.gameboard').hide()
  $('.switch-signin').toggle()
  $('.active').siblings().slideToggle()
  $('.active').removeClass('active')
  $('#changePw-form input').val('')
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
    $('#changePw-form').removeClass('shake')
  }, 800)
}

const signUpFailure = () => {
  $('#signup-form').addClass('shake')
  setTimeout(function () {
    $('#signup-form').removeClass('shake')
  }, 800)
}

const logInFailure = () => {
  $('#login-form').addClass('shake')
  setTimeout(function () {
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
