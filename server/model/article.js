const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sanitizeJson = require('mongoose-sanitize-json');


var articleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
    },
    author: {
        type: String
    }
},
{ timestamps: true });

articleSchema = articleSchema.plugin(sanitizeJson);
module.exports = mongoose.model('Article', articleSchema);
