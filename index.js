const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//importing the routers
const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promotionsRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//mounting the routes
app.use('/dishes', dishRouter);
app.use('/promotions', promotionsRouter)

var fullPath = path.resolve(__dirname + 'public')
app.use(express.static(fullPath));


app.use((req,res,next) => {
    
    console.log(req.ip);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
}); 


const server = http.createServer(app);


server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});