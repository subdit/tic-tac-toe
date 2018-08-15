'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  console.log('i succeeded')
  $('#message').text('Successfully registered')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input')
}
const signUpFail = function () {
  console.log('i failed')
  $('#message').text('Sign up fail. Check that your password match')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input')
}
const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')

  $('#change-password').removeClass('hidden')
  $('#game-board').removeClass('hidden')
  $('#buttons').removeClass('hidden')

  $('#message').text('Successfully Signed in')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input')
}

const signInFail = function () {
  $('#message').text('Sign In fail. Check that your password match')
  $('#message').removeClass()
  $('#message').addClass('fail')
}

const changePassWordSuccess = function (response) {
  $('#message').text('Successfully Change-password')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input')
}

const changePassWordFail = function () {
  $('#message').text('Change Password fail. Check that your password match')
  $('#message').removeClass()
  $('#message').addClass('fail')
}
const signOutSuccess = function (response) {
  store.user =

  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')

  $('#change-password').addClass('hidden')
  $('#game-board').addClass('hidden')
  $('#buttons').addClass('hidden')

  $('#message').text('Successfully Sign-out')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out input')
}

const signOutFail = function (response) {
  $('#message').text('Sign Out fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-out input')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePassWordSuccess,
  changePassWordFail,
  signOutSuccess,
  signOutFail
}
