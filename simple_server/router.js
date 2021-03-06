var route = function(path, handle, response, request){
  if (typeof handle[path] === 'function') {
    handle[path](response, request);
  } else {
    console.log("No path for "+ path); 
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
