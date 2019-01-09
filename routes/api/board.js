const express = require("express");
const router = express.Router();
const passport = require('passport');
const Board = require('../../models/Board');
const Theme = require('../../models/Theme');
const Game = require('../../models/Game');
const User = require('../../models/User');
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

// Requires   pin (string)  user_id
router.post('/', 
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {

        let gameRequest = await Game.find({pin: req.body.pin})
        let game = gameRequest[0]

        let theme = await Theme.findById(game.theme)
        let game_creator = await User.findById(game.creatorID)
        

        let valData = {
            user_id: req.body.user_id,
            game_id: game._id,
            theme_id: theme.id
        }

        const { isValid, errors } = await validateBoardInput(valData);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        let squares = await generateBoard(theme.id)

        let newBoard = new Board({
            userID: req.body.user_id,
            squares: squares,
            gameID: game._id,
            gameDescription: {
                creator: game_creator.username,
                theme: theme.name
            }
        })

        await newBoard.save()
        game.boards.push(newBoard)

        await game.save()
        
        return res.json(newBoard)
    }
)



// Requires id (Schema.Type.ObjectID, ref: "Board")
router.get('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        if(req.body.id) {
            Board
                .findById(req.body.id)
                .then(board => {
                    let response = {}
                    response[board.id] = board
                    return res.json(response)
                })
                .catch(err => res.status(400).json(err));
        } else {
            Board
                .find({})
                .then(boards => {
                    return res.json(boards.reduce((response, board) =>{
                        response[board.id] = board
                        return response
                    },
                    {})
                    )
                })
                .catch(err => res.status(400).json(err));
        }
        
    }
);



router.post('/square', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
       return new Promise(async (resolve, reject) => {
           let board
           try{
                board = await Board.findById(req.body.id)
                board.squares[req.body.position].checked = !(board.squares[req.body.position].checked);
                game = await Game.findById(board.gameID)

                if ((game.winnerID) && game.winnerID !== board.userID) {
                    board.gameOn = false
                } else if (hasWon(board.squares)) {
                    board.won = true
                    game.winnerID = board.userID

                    await game.save()

                }
                await board.save()

                resolve(res.json(board))
           } catch(err) {

               resolve(res.status(400).json(err))
           }
       })
    }
)





// Requires id (Schema.Type.ObjectID, ref: "User")
router.get('/user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        Board
            .find({userID: req.query.id})
            .then(boards => {
                return res.json(boards.reduce((response, board) =>{
                    response[board.id] = board
                    return response
                },
                {})
                )
            })
    }
)

module.exports = router;

