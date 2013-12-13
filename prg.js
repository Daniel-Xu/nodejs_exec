//var fs = require('fs');

//fs.createReadStream(process.argv[2]).pipe(process.stdout);

//var through = require("through");

//var tr = through(write, end);

//tr.write("hello daniel");
//tr.end();

//var write = function(buf){
  //this.queue(buf.toString().toUpperCase());
  //this.queue(buf);
//};

//var end = function(){
  //this.queue(null);
//};

//process.stdin.pipe(tr).pipe(process.stdout);

var split = require("split");
var through = require('through');
var tr = through(write, end);

var n = 0;
function write (line){
  n++;
  if(n%2 === 0) {
    this.queue(line.toString().toUpperCase());
  }else {
    this.queue(line.toString());
  }
}

//var a = funciotn(){
// a is a variable, but if you want to use it before, it will report wrong, but declare funciton, it works.
//}
function end () { this.queue(null);}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
