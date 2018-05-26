const express = require('express');
const {save, retrieve} = require('../database/index.js');
const request = require('request'); //for helper function
let config = null;
try{config = require('../config.js')}
catch(err) {config = null} //for helper function
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()); //req.body will be empty if we don't use bodyParser!

//ROUTE TO RETRIEVE MOVIES FROM DB
app.get('/retrieveMovies', function(req, res) {
  retrieve(function(docs) { // get all the movies
    res.send(docs); // send them back to client
  });
});

//use the request module to request movies from The Movie Database API
let getMoviesByGenre = (genreNum, cb) => {
  let options = {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.token || config.TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreNum}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.token || config.TOKEN}`
    }
  };

  request.get(options, function(err, data) {
    // console.log('what i get back is ', data.body); 
   cb(JSON.parse(data.body));
  });
}

//test helper function to see if actually getting movies from API
// getMoviesByGenre('27', function(whatever) {console.log('answer is', whatever.results)});

//ROUTE TO SEARCH AND DISPLAY SEARCH RESULTS
app.post('/searchMovies', function(req, res) {
  // console.log('what is reqbody for get', req.body.searchMovie);
  getMoviesByGenre(req.body.searchMovie.toString(), function(data) {
    res.send(data.results);
  });
});

//ROUTE TO SAVE MOVIES INTO DB
app.post('/saveMovie', function(req, res) {
  //need to call save method from DB
  console.log('saving this movie into DB:', req.body.item);
  save(req.body.item, (err, data) => {
    if (err) console.log('error saving movie to DB', err);
    else res.status(201).send('movie successfully saved to list');
  });
});


app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port: ', process.env.PORT || 3000);
});
