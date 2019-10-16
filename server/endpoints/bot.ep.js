/**
 * This acts as the controller
 */
var express = require('express');
let models = require('../model');

module.exports = function(app){

    const router = express.Router()
    app.post('/bot', (req, res ) => {
        let u_text = req.body['text'];
        next = (bot_resp) =>{
            res.send(bot_resp);
            res.end();
        }
        let bot_resp = models.bot.response(u_text, next);
    });

};