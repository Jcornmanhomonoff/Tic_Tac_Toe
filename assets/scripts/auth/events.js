'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#signup-form').on('submit', function (event) {
    const data = getFormFields(this)
    event.preventDefault()
    console.log(data)
    api.signUp(ui.success, ui.failure, data)
  })
}

module.exports = {
  addHandlers
}
