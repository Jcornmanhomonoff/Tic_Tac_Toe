'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  store.user = data.user
  $('#signup-form').hide()
  $('#login-form').show()
  $('.switch-signin').hide()
}

const logInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)
  $('#login-form').hide()
  $('.gameboard').show()
  $('#menu-toggle').show()
  $('.switch-signup').hide()
}

const changePwSuccess = () => {
  console.log('Change password success')
}
//
// const signOutSuccess = () => {
//   console.log('successful sign out')
//   $('#login-form').show()
//   $('#signup-form').hide()
//   $('#gameboard').hide()
// }
//
const failure = () => {
  console.log('nope')
}
//
module.exports = {
  signUpSuccess,
  logInSuccess,
  changePwSuccess,
  // signOutSuccess,
  failure
}
