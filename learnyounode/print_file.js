
var fs = require("fs");
var pathlib = require("path")

//module is used to get the file 
module.exports = function(path, extention, callback){
    fs.readdir(path, function(err, list){
        if(err)
            return callback(err);

        //filter has the callback function to test
        list = list.filter(function(file){
            return pathlib.extname(file) === '.' + extention;
         
        })
        callback(null, list);
    })
}
