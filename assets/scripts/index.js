'use strict'

// use require with a reference to bundle the file and use it in this file
const auth = require('./auth/events')
const PLAYER_TOKEN = 'X'

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  auth.addHandlers()
  // add click event to board using class `square`
  // $(document).ready function () {
  // const square = [
  //      ['','',''],
  //      ['','',''],
  //      ['','','']
  //      ];

  // function gameOver() {
  // check for game over
  // ***** check  horizontal ***** //
  //  for (let i = o; i , 3; i++){
  //      if (square[i][0]) !=== '' &&
  //        square[i][0] === square[i][1] &&
  //        square[i][0] === square[i][2]
  //        return square[i][0]
  // }
  // }
  // **** check vertical *** //
  //     for (let j = 0; j < 3; j++) {
  //       if (square[0][j]) !=== '' &&
  //          square[0][j] === square[1][j]&&
  //          square[0][j] === square[2][j]
  //          return square[0][j]
  //      }
  // }

  $('.square').on('click', function (event) {
    console.log('I was clicked')
    //  $this = $(this)
    $(this).html(PLAYER_TOKEN)
    const square = $this.id('id')
    const getId = function () {
      const i = $this.id('i')
      const j = $this.id('j')
      square[i][j] = PLAYER_TOKEN
      console.log(square)
      if (gameOver()) {
      } else {
      }
    }
    //  }
    // - when click event happens, get the ID of the element that was clicked
    // - use the ID to insert an “X” into an array using the ID as the index
    // - add “X” to the board on the scre
    // const getId = function () {
    //  return this.id
  })
})
