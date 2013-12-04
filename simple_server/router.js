var route = function(path, handle){
  if (typeof handle[path] === 'function') {
    handle[path]();
  } else {
    console.log("No path for "+ path); 
  }
}

exports.route = route;
