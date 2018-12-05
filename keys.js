
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
// add code required to import th keys.js file and store it in a variable
var spotify = new Spotify(keys.spotify);



// var fs =require("fs");
// var axior=require("axios");
// var userInput=process.argv[2];
// var userText=process.argv[3];

// // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=72bcce12

// var queryUrl= 'http://www.omdbapi.com/?t=${userText}&y=&plot=short&apikey=trilogy';
//       console.log(queryUrl);
//       console.log("The movie's rating is: " + response.data.imdbRating);
  
// if(userInput === "read"){
//     console.log("Reading from a file");
//     fs.readFile("myFile.txt", "utf8", function(err,data){
//         if(err){
//             return console.log(err)
//         }
//     });

// }else if(userInput === "write"){
//     console.log("Writing to a file");
//     fs.writeFile("myFile.txt", userText, function(err){
//         if(err){
//             return console.log(err);
//         }
//     });
// }else if(userInput === "append"){
//     console.log("Appending to a file");
//     fs.appendFile("myFile.txt", userText, function(err){
//         if(err){
//             return console.log(err);
//         }
//     });

// }else if(userInput === "movie-this"){
//     axios.get(queryUrl).then(function(response){
//         console.log(respose.data);
//     } 
//     }
// );

//    });
