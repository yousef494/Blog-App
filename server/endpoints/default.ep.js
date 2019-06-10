/**
 * This acts as the controller
 */
var express = require('express');
let models = require('../model');

module.exports = function(app, urlPrefix){

    let default_ep = express.Router();
    app.use(urlPrefix, default_ep);

    //map endpoint to a model
    default_ep.use('/', function(req, res) {
        let articles = models.blog.getArticles();
        res.end(JSON.stringify({'/': 'This is the default url'}));
    });

};