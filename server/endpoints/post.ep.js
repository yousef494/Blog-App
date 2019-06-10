/**
 * This acts as the controller
 */
var express = require('express');
const restify = require('express-restify-mongoose')
let models = require('../model');

module.exports = function(app){

    const router = express.Router()
    restify.serve(router, models.post);
    app.use(router);

};