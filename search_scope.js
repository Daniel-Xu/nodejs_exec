// when it gets into anonymouse function, it will search for definition of x
// As js is function scoped language, so it will find definition in if block,
// then it will block the definition outside of function.
// However, when it executs x === 20, x is not defined yet. so x is undefined.
// and undefined will be returned.

// result should be undefined
var x = 20;

(function() {
  if (x === 20) {
    var x = 30;
  }
  return x;
} ());

// ----------------------------------------------------


// For this one, the result wll be different
// result should be 30
var x = 20;

(function(x) {
  if (x === 20) {
    var x = 30;
  }
  return x;
} (x));


