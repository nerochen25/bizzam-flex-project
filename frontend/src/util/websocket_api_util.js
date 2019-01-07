import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000')



function helloWorld (cb) {
    socket.on('respond', console.log('sending Hello World'));
    socket.emit('helloworld', "Pumpkin" );
}


export {
    helloWorld
}