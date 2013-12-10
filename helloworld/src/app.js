#! /usr/bin/env node
//this example uses closure
//and privileged function
//so privileged function is just like
//private function when it relates to "this"


//function User( properties ) {
    //// Iterate through the properties of the object, and make sure
    //// that it's properly scoped (as discussed previously)
    //var that = this;
    //for ( var i in properties ) { (function(i){
        //// Create a new getter for the property
        //that[ "get" + i ] = function() {
            //return properties[i];
        //};
        //// Create a new setter for the property
        //that[ "set" + i ] = function(val) {
            //properties[i] = val;
        //};
//})(i); } }

//var user = new User({
//name: "Bob",
//age: 44 });

//var user2 = new User({
    //favor: "girl", 
    //hobi: "football"
//});
//console.log(user.getname());
//console.log(user.getage());

//console.log(user2.getfavor());
//console.log(user2.gethobi());


var argFile = process.argv.slice(2);
var targetFile  = argFile[0];

var exec = require('child_process').exec;
  
exec("ls -a | grep " + targetFile, function(error, stdout, stderr){
  console.log(stdout);
});



