const express = require("express");
const router = express.Router();
const passport = require('passport');
const Board = require('../../models/Board');
const Theme = require('../../models/Theme')
const Game = require('../../models/Game')
const validateBoardInput = require('../../validation/board');
const hasWon = require('../../validation/has_won')




// taken from https://stackoverflow.com/a/2450976/10846883
function shuffle(array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
   
    return array;
  }

const generateBoard = (themeID) => {
    let squares; 
    return Theme
        .findById(themeID)
        .then(theme => {
            let possibleItems = shuffle(theme.themeItems)
            squares = possibleItems.slice(0,9)
            squares = squares.map((item, index) => {
                return {
                    text: item.text,
                    position: index
                }
            })
            
            return squares;
        });
    
    }




// Requires user_id(Schema.Type.ObjectID), theme_id(Schema.Type.ObjectID), game_id(Schema.Type.ObjectID)
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // TODO- Comment in when board validations is working
        // const { isValid, errors } = validateBoardInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        generateBoard(req.body.theme_id)
            .then(squares => {
                const newBoard = new Board({
                    userID: req.body.user_id,
                    squares: squares
                });
                newBoard
                    .save()
                    .then(board => {
                        Game.findById(req.body.game_id)
                        .then(game => {
                            game.boards.push(board)
                            game.save()
                            .then(() => res.json(board))
                        })
                    })
            })
    }
);

// Requires id (Schema.Type.ObjectID, ref: "Board")
router.get('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Board
            .findById(req.body.id)
            .then(board => res.json(board))
            .catch(err => res.status(400).json(err))
    }
)


// Requires id (Schema.Type.ObjectID, ref: "Board"), position
router.post('/square',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        Board
            .findById(req.body.id)
            .then(board => {
                board.squares[req.body.position].checked = !(board.squares[req.body.position].checked)
                
                board
                    .save()
                    .then(board => {
                        
                        return res.json({
                            board: board,
                            won: hasWon(board.squares)
                        });
                    });
                    
            })
            .catch(err => res.status(400).json(err))
    }
);



module.exports = router;