//1
//console.log("HELLO WORLD");

//2
//var result = 0;
//for (var i=2; i < process.argv.length; i++) {
  //result += Number(process.argv[i]);
//};
//console.log(result);

//3

//var fs = require("fs");
//var buf = fs.readFileSync(process.argv[2]);

//var len = buf.toString().split("\n").length -1;
//console.log(len);


//4

//var fs = require("fs");

//fs.readFile(process.argv[2], 'utf-8', function(err, data){
  //if(err)
    //throw err;
  //else
    //console.log(data.split('\n').length-1);
//})


//5

//var fs = require("fs");
//var pattern = new RegExp('\\.' + process.argv[3]+'$');

//fs.readdir(process.argv[2], function(err, list){
    //if(!err) {
        //list.forEach(function(name){
            //if(pattern.test(name)) 
                //console.log(name);
        //})
    //}
//})


//6

var readF = require("./print_file")

readF(process.argv[2], process.argv[3], function(err, list){
    if(err)
        return console.err("some thing wrong", err);

    list.forEach(function(file){
        console.log(file);
    })


})
