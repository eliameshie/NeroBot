// Setting up DB Models 
const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	anime: String,
	funimation: String,
	crunchyroll: String,
	netflix: String,
	week: String,
});

module.exports = mongoose.model('Anime', AnimeSchema)