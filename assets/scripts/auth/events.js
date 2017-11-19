'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.signUp(data)
  .done(ui.signUpSuccess, data)
  .catch(ui.failure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.logIn(data)
  .done(ui.logInSuccess)
  .fail(ui.failure)
}

const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.changePw(data)
  .done(ui.changePwSuccess)
  .fail(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}

const authAddHandlers = () => {
  $('#signup-form').on('submit', onSignUp)
  $('#login-form').on('submit', onLogIn)
  $('#changePw-form').on('submit', onChangePw)
  $('#signOut').on('click', onSignOut)
}

module.exports = {
  authAddHandlers
}
