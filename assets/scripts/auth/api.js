'use strict'

const config = require('../config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const logIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
//
// const signOut = function () {
//   console.log(config)
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/' + config.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + config.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  logIn
  // signOut
}
