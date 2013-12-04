var route = function(path, handle){
  if (typeof handle[path] === 'function') {
    return handle[path]();
  } else {
    console.log("No path for "+ path); 
    return '404';
  }
}

exports.route = route;
