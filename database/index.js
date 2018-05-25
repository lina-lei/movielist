const mongoose = require('mongoose');
const {MLAB_TOKEN} = require('../config.js');
// mongoose.connect('mongodb://localhost/movielist');
mongoose.connect(MLAB_TOKEN);

let movieSchema = mongoose.Schema({
  id: {type: Number, unique: true}, 
  title: String,
  year: Number,
  genre: String
});

let Movie = mongoose.model('Movie', movieSchema);

//function to save movies to DB

//function to retrieve movies from DB

module.exports.save = save;
module.exports.retrieve = retrieve;