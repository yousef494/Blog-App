/**
 * This acts as the controller
 */
var express = require('express');
let models = require('../model');

module.exports = function(app, urlPrefix){

    let blog_ep = express.Router();
    app.use(urlPrefix, blog_ep);

    //map endpoint to a model
    blog_ep.get('/', function(req, res) {
        let articles = models.blog.getArticles();
        res.end(JSON.stringify(articles));
    });

    blog_ep.post('/', function(req, res) {
        models.blog.addArticle(req.body);
        let articles = models.blog.getArticles();
        res.status(201).send(JSON.stringify(req.body));
    });

    blog_ep.delete('/:id', function(req, res) {
        let result = models.blog.deleteArticle(req.params.id);
        let articles = models.blog.getArticles();
        res.status(result?201:302).send({"message": "Removed successfully!"});
    });

};