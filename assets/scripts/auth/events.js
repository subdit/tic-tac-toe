'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('submitted the form')
  console.log('event.tarket:', event.target)
  const data = getFormFields(event.target)
  console.log('data from the form:', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('submitted the form')
  console.log('event.target:', event.target)
  const data = getFormFields(event.target)
  console.lg('data from the form:', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}
const onChangePassWord = function (event) {
  event.preventDefault()
  console.log('submit the form')
  console.log('event.target:', event.target)
  const data = getFormFields(event.target)
  console.log('data from the form:', data)

  api.changePassWord(data)
    .then(ui.changePassWordSuccess)
    .catch(ui.changePassWordFail)
}
const onSignOut = function (event) {
  console.log('event.target:', event.target)
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}
// const onClick = function (event) {
//  event.preventDefault()
//  console.log('click')
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassWord)
  $('#sign-out').on('click', onSignOut)
//  $('#nextMove').on('square', nextMove(this))
}

module.exports = {
  addHandlers // same as addHandlers: addHandlers

}
