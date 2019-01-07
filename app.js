const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const themes= require('./routes/api/theme');
const games = require('./routes/api/game');
const boards = require('./routes/api/board')
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const io = require('socket.io')();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
  }

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    
    app.use(passport.initialize());
    require('./config/passport')(passport);

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


app.use("/api/users", users);
app.use("/api/themes", themes);
app.use("/api/games", games);
app.use("/api/boards", boards);

const port = process.env.PORT || 5000;

//New WebSocket Code
const ioPort = 8000
  io.on('connection', (client) => {
    client.on('helloworld', (message) =>{
      console.log(`client is receiving message ${message}`)
      respondToMessage (() => {
        client.emit ('respond', message());

      }, message)
    })
  })
  io.listen(ioPort, () => console.log(`Websocket is listening on port ${ioPort}`));
//End of WebSocket Code

app.listen(port, () => console.log(`Server is running on port ${port}`));

