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
const newGame = function () {
  console.log()
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/game',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateMove = function (index, value, over) {
  // console.log ('store is', store)
  console.log('store.user is', store.user)
  console.log('store.game is', store.game)

  gameData.game = store.game
  console.log('gameData.game is', gameData.game)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassWord,
  signOut,
  newGame,
  updateMove,
  gameData

}
