// node mod imports needed:
var axios = require("axios");
var fs = require("fs");
var dot = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var cTable = require("console.table");
console.log(keys)

var spotify = new Spotify(keys.spotify);
var songName = process.argv.slice(3).join("+");
// functions: Make it so liri.js can take in one of the following commands:

//    * `concert-this`
if (process.argv[2] === "concert-this") {
    console.log(songName);
    var queryUrl = "https://rest.bandsintown.com/artists/" + songName + "/events?app_id=codingbootcamp";
    console.log(queryUrl);
    axios.get(queryUrl)
        .then(function (response) {
            var data = response.data;
            var i;
            for (i = 0; i < data.length; i++) {
                console.log("Venue name " + data[i].venue.name);
                console.log("Venue location " + data[i].venue.city);
                console.log("Date of Event " + moment(data[i].datetime).format("MM/DD/YYYY"));
                console.log("------------------------------------");
            }
            // console.log(data)
        })
        .catch(function (err) {
            console.log(err)
        })


} else if (process.argv[2] == "spotify-this-song") {

    // var songName = process.argv.slice(3).join(" ");

    if (songName == undefined) {
        songName = "The sign by Ace of Base";
    }


    spotify.search({ type: "track", query: songName, limit: 10 }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        var tableArray = [];

        for (var i = 0; i < data.tracks.items.length; i++) {
            var result = {
                artist: data.tracks.items[i].album.artists[0].name,
                album_name: data.tracks.items[i].album.name,
                song_name: data.tracks.items[i].name,
                preview_url: data.tracks.items[i].preview_url
            }
            tableArray.push(result);
        }


        var table = cTable.getTable(tableArray);

        console.log(table);


    });
    //    * `movie-this`
} else if (process.argv[2] == 'movie-this') {
    var movieName = process.argv.slice(3).join(" ");

    if (movieName == undefined) {
        movieName = "Mr. Nobody";
    }
    request('http://www.omdbapi.com/?i=tt3896198&apikey=d37eb3c3' + process.argv[3], function (error, response, body) {

        var result = JSON.parse(body);
        console.log("Title :" + result.Title);
        console.log("Year :" + result.Released);
        console.log("IMDB Rating :" + result.imdbRating);
        console.log("Rotten Tomatoes :" + result.Ratings[1].Value);
        console.log("Country :" + result.Country);
        console.log("Language :" + result.Language);
        console.log("Movie Plot :" + result.Plot);
        console.log("Actors :" + result.Actors);

    });
    //    * `do-what-it-says'

    // fs.readFile("random.txt", "utf8", function(error, data){

    // })
    // } else if (process.argv[2] == "do-what-it-says") {
    //     console.log("do what it says")
    // 
}