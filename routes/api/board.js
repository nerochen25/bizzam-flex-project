const express = require("express");
const router = express.Router();
const passport = require('passport');
const Board = require('../../models/board')
const validateBoardInput = require('../../validation/board')


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // const { isValid, errors } = validateBoardInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        const newBoard = new Board({
            // needs the userid of the person currently holding the board, default 0?
            // userID: 

        })

        newBoard
            .save()
            .then(board => res.json(board))
    }
)





module.exports = router;