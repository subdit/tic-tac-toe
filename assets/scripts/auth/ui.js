'use strict'
const store = require('../store.js')

const signUpSuccess = function () {
  $('#message').text('Successfully registered')
  $('#message').removeClass()
  $('#message').addclass('success')
  $('#sign-up input')
}
const signUpFail = function () {
  $('#message').text('Sign up fail. Check that your password match')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input')
}
const signInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Successfully registered')
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
