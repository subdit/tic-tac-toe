'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassWord = function (data) {
  console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// const nextMove = function (data) {
// console.log('api URL is', config.apiUrl)
//  return $.ajax({
//    url: config.apiUrl + '/nextMove',
//    method: 'POST'
//  }
// })

module.exports = {
  signUp,
  signIn,
  changePassWord,
  signOut
//  nextMove

}
