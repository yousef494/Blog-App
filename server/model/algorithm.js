const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sanitizeJson = require('mongoose-sanitize-json');


var algorithmSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String
	},
    rating: {
        type: Number
	},
	refrences: [
		{
			type: String
		}
	]
},
{ timestamps: true });

algorithmSchema = algorithmSchema.plugin(sanitizeJson);
module.exports = mongoose.model('Algorithm', algorithmSchema);
