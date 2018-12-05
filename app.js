var fs =require("fs");

var userInput=parocess.argv[2];

if(userInput === "read"){
    console.log("Reading from a file");
    fs.readFile("myFile.txt", "utf8", function(err,data){
        if(err){
            return console.log(err)
        }
    });

}else if(userInput === "write"){
    console.log("Writing to a file");
    fs.writeFile("myFile.txt", userText, function(err){
        if(err){
            return console.log(err);
        }
    });
}else if(userInput === "append"){
    console.log("Appending to a file");
    fs.appendFile("myFile.txt", userText, function(err){
        if(err){
            return console.log(err);
        }
    });

};
