'use strict'

// use require with a reference to bundle the file and use it in this file
const auth = require('./auth/events')
const config = require('./config.js')
const store = require('./store.js')
// use require without a reference to ensure a file is bundled
// require('./example')

let gameBoard = ['', '', '', ' ', '', '', '', '', '']
let currentPlayer = 'x'
let gameOver = false

const updateMove = function (index, value, over) {
  // console.log ('store is', store)
  console.log('store.user is', store.user)
  console.log('store.game is', store.game)
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

const newGameSuccess = function (response) {
  store.game = response.game
}

const newGameFailure = function (error) {
  console.log(error)
}

const addBoardToScreen = function (arrayOfBoard) {
  arrayOfBoard.forEach(function (cellValue, cellIndex) {
    $('#' + cellIndex).text(cellValue)
  })
}

$(() => {
  auth.addHandlers()
  // add click event to board using class `square`
  $('.square').on('click', function (event) {
    // console.log('I was clicked')

    // - when click event happens, get the ID of the element that was clicked
    const id = $(event.target).attr('id')

    // if the square is not empty
    if ($(event.target).text() !== '') {
      $('#message').text('Spot taken, try again.')
    // if the game is over
    } else if (gameOver === true) {
      $('#message').text('Game is over, start a new game.')
    // if the square is empty
    } else {
      // - use the ID to insert an “X” into an array using the ID as the index
      gameBoard[id] = currentPlayer
      // - add “X” to the board on the screen
      addBoardToScreen(gameBoard)

      // check for winner top horizontal
      if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
        $('#message').text('Player ' + gameBoard[0] + ' wins!')
        gameOver = true
      //  check for winner middle horizontal
      } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== '') {
        $('#message').text('Player ' + gameBoard[3] + ' wins!')
        gameOver = true
      //  check for winner bottom horizontal
      } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== '') {
        $('#message').text('Player ' + gameBoard[6] + ' wins!')
        gameOver = true
        //  check for winner left vertical
      } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== '') {
        $('#message').text('Player ' + gameBoard[0] + ' wins!')
        gameOver = true
        //  check for winner middle vertical
      } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== '') {
        $('#message').text('Player ' + gameBoard[1] + ' wins!')
        gameOver = true
        //  check for winner right vertical
      } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== '') {
        $('#message').text('Player ' + gameBoard[2] + ' wins!')
        gameOver = true
        //  check for winner top left to bottom right
      } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== '') {
        $('#message').text('Player ' + gameBoard[0] + ' wins!')
        gameOver = true
        //  check for winner top right to bottom left
      } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== '') {
        $('#message').text('Player ' + gameBoard[2] + ' wins!')
        gameOver = true
      // no winner
      } else {
        // rotate turn to x and o
        if (currentPlayer === 'x') {
          currentPlayer = 'o'
        } else {
          currentPlayer = 'x'
        }
      }
    }
    // API call to update the game
    // updateMove should be passed index of cell clicked, value that was placed
    // in the cell and whether the game is over or not
    updateMove($(event.target).attr(id), currentPlayer, true)
  })
  $('#new-game').on('click', function (event) {
    // API call to create a game

    console.log('new game clicked')
    $('#game-board').removeClass('hidden')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    currentPlayer = 'x'
    gameOver = false
    addBoardToScreen(gameBoard)
    $('#message').text('New game started!')
    return $.ajax({
      method: 'POST',
      url: config.apiUrl + '/games',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
      .then(newGameSuccess)
      .catch(newGameFailure)
  })
})
