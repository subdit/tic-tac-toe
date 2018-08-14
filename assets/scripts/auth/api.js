'use strict'
const config = require('../config.js')
const store = require('../store.js')
const signUp = function (data) {
  console.log('api URL is', config.apiURL)
  return $.ajax({
    url: config.apiURL + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log('api URL is', config.apiURL)
  return $.ajax({
    url: config.apiURL + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  console.log('store in change password', store)
  return $.ajax({
    url: config.apiURL + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function (data) {
  console.log('api URL is', config.apiURL)
  return $.ajax({
    url: config.apiURL + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.Token
    }
  })
}
// const nextMove = function (data) {
// console.log('api URL is', config.apiURL)
//  return $.ajax({
//    url: config.apiURL + '/nextMove',
//    method: 'POST'
//  }
// })

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
//  nextMove

}
