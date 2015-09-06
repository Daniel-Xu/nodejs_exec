// http://www.mathsisfun.com/sets/functions-composition.html
function compose(f,g) {
  // Compose the two functions here!
  return function() {
    return f(g.apply(this, arguments));
  }
}
