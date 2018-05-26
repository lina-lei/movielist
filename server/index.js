const express = require('express');
const {save, retrieve} = require('../database/index.js');
const request = require('request'); //for helper function
const config = require('../config.js'); //for helper function

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

//ROUTE TO RETRIEVE MOVIES FROM DB
app.get('/retrieveMovies', function(req, res) {
  retrieve(function(docs) { // get all the movies
    res.send(docs); // send them back to client
  });
});

//use the request module to request movies from The Movie Database API
let getMoviesByGenre = (genreNum, cb) => {
  let options = {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${config.TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreNum}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, function(err, data) {
    cb(JSON.parse(data.body));
  });
}

//test helper function to see if actually getting movies from API
// getMoviesByGenre('27', function(whatever) {console.log('answer is', whatever.results)});

//ROUTE TO SEARCH AND DISPLAY SEARCH RESULTS
app.get('/searchMovies', function(req, res) {
  getMoviesByGenre('27', function(data) {
    res.send(data.results);
  });
});


//ROUTE TO SAVE MOVIES INTO DB
app.post('/saveMovies', function(req, res) {
  getMoviesByGenre('27', function(err, data) {
    if (err) console.log('error saving horror movies to DB:', err);
    console.log('HORROR DATA IS:', data);
  });
});


// for (let i = 0) {
//   save(movies[i])
// }

app.listen(3000, function() {
  console.log('listening on port: ', 3000);
});