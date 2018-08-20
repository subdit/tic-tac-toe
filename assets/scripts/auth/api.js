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
// const updateGame = function () {
//  event.preventDefault()
// make sure that the space is blank and the game isn't //  over
//  if (store.game.cells[this.id] === '' && store.game.over === false) {
// gater data for AJAX call
//    let data = {
//      'game': {
//         'cell': {
// turn the id of the div from a string to an  // integer
// 'index': parseInt(this.id),
// 'value': gamePlay.toggleXandO()
//         },
//         'over': winTie.isGameOver(this.id)

module.exports = {
  signUp,
  signIn,
  changePassWord,
  signOut
// resetGame

}
