/**
 * This file establishes the app.
 * Register endpoints.
 * 
 * 
 * Run:
 * npm run build
 */
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const endpoints = require('./server/endpoints');
const config = require('./server/app/config');

const app = express();
app.use(bodyParser.json()); // Send JSON responses
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
//app.use(methodOverride())

app.use(express.static(path.join(__dirname, 'dist/blog')));


mongoose.connect('mongodb://localhost:27017/blogdb', {
    useNewUrlParser: true
}).then(db => {

    //register endpoints
    endpoints.post(app);
    endpoints.algorithm(app);
    endpoints.default(app, config.urlPrefix);

    endpoints.bot(app);

    app.get('*', (req, res) => {
        res.sendFile(__dirname+'/dist/blog/index.html');
    });

    app.listen(config.server.port, config.server.host,function () {
        console.log(config.server.name, 'server is listening on port', config.server.port);
    });
    
    app.use(function (req, res) {
        res.status(404).send('Invalid endpoint!');
    });

}).catch(err => {
    console.log('err', err);
});

