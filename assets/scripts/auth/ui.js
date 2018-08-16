'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  console.log('i succeeded')
  $('#message').text('Successfully registered')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
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
  $('#sign-in input').val('')

  $('#change-password').removeClass('hidden')
  $('#game-board').removeClass('hidden')
  $('#buttons').removeClass('hidden')

  $('#message').text('Successfully Signed in')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
}

const signInFail = function () {
  $('#message').text('Sign In fail. Check that your password match')
  $('#message').removeClass()
  $('#message').addClass('fail')
}

const changePassWordSuccess = function (response) {
  store.user = response.user
  $('#message').text('Successfully Change-password')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#changePassWord input').val('')
}

const changePassWordFail = function () {
  $('#message').text('Change Password fail. Check that your password match')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#changePassWord input').val('')
}
const signOutSuccess = function (response) {
  $('#sign-in').removeClass('hidden')

  $('#change-password').addClass('hidden')
  $('#game-board').addClass('hidden')
  $('#buttons').addClass('hidden')

  $('#message').text('Successfully Sign-out')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out input').val('')
}

const signOutFail = function (response) {
  $('#message').text('Sign Out fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-out input').val('')
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
