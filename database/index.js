const mongoose = require('mongoose');
let config = null;
try{config = require('../config.js')}
catch(err) {config = null}
// mongoose.connect('mongodb://localhost/movielist');
mongoose.connect(process.env.mlabtoken || config.MLAB_TOKEN);

const movieSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  title: String,
  release_date: Date,
  genre: Array
});

const Movie = mongoose.model('Movie', movieSchema);


//FUNCTION TO RETRIEVE MOVIES FROM DB
let retrieve = function(cb) {
  Movie.find({}, function(err, docs) {
    console.log('Retrieving from DB:', docs);
    cb(docs);
  });
}

//FUNCTION TO SAVE MOVIES INTO DB
let save = function(options, cb) {
  // console.log(options)
  // Movie.create(options, (err, newMovie) => {
  //   if (err) {
  //     console.log('error in save controller: ', err)
  //   } else {
  //     cb(newMovie)
  //   }
  // })

  let optionsTransformed = {
    id: options.id, 
    title: options.title, 
    release_date: options.release_date,
    genre: options.genre_ids
  };
  let newMovie = new Movie(optionsTransformed);
  newMovie.save((err) => {
    if (err) {
      console.log('error saving to DB', err)
    }
  })
}

// save({id: 12, title: 'howlss moving castle', year: 2000, genre: 'anime15'}, (newMovie) => {
//   console.log(newMovie)
// })

// let test = new Movie({ 
//   title: 'Spirited Away',
//   year: 2004,
//   genre: 'anime'
// });

//function to save movies to DB
// test.save(function(err, docs) {
//   if(err) console.log(err);
//   console.log(docs);
// });

module.exports.save = save;
module.exports.retrieve = retrieve;