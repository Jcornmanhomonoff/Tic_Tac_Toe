'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// automatically sign in on successful sign up
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.signUp(data)
  .then(ui.signUpSuccess)
  .then(() => api.logIn(data))
  .then(ui.logInSuccess)
  .catch(ui.signUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.logIn(data)
  .done(ui.logInSuccess)
  .fail(ui.logInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.changePw(data)
  .done(ui.changePwSuccess)
  .fail(ui.changePwFailure)
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

// **STYLING** //
// Add class active to highlight open li & close all others
$('.sidebar-nav li:not(:first-child) a').on('click', function () {
  const currentAtag = $(this)
  if ((currentAtag.text() !== 'New Game') && (currentAtag.text() !== 'Sign Out')) {
    if (currentAtag.hasClass('active')) {
      currentAtag.toggleClass('active')
      currentAtag.siblings().slideToggle()
    } else {
      $('.active').siblings().slideToggle()
      $('.active').removeClass('active')
      currentAtag.toggleClass('active')
      currentAtag.siblings().slideToggle()
    }
    // console.log(currentAtag.hasClass('active'))
  }
})

module.exports = {
  authAddHandlers
}
