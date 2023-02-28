const express = require( 'express');
const app = express();

app.get('/', (req, res)=> { //route handler
    res. send( 'Hello World,this is the root route');
});

app.get('/osu', (req, res)=> {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>osu!</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>One Piece > Dragon ball</h1>
    </body>
    </html>`);
});
app.listen(3000);