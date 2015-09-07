var fs = require('fs')
  , stdin = process.stdin
  , stdout = process.stdout;


fs.readdir('.', function(err, files) {
  if (err) {
    return console.error(err);
  }

  if (!files.length) {
    return console.log('please change directory to see the content');
  }

  console.log('Choose file or directory to see the content');

  function readUserInput() {
    stdout.write('your choice is: ');
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', onDataHandler);
  }

  function onDataHandler(data) {
    var filename = files[Number(data)];
    if (!filename) {
      stdout.write('your choice is: ');
    } else {

      stdin.pause();
      if (stats[Number(data)].isDirectory()) {
        fs.readdir(__dirname + '/' + filename, function(err, files) {
          files.forEach(function(name) {
            console.log('         - ' + name);
          })
        });
      } else {
        fs.readFile(__dirname + '/' + filename, 'utf8', function(err, content) {
          console.log(content.replace(/(.*)/g, '   ** $1'));
        });
      }
    }
  }

  var stats = [];
  function file(i) {

    var filename = files[i];

    fs.stat(__dirname + '/' + filename, function(err, stat) {
      if (err) {
        return console.error(err);
      }

      stats[i] = stat;

      if (stat.isDirectory()) {
        console.log(i + '.' + filename);
      } else {
        console.log(i + '-' + filename);
      }

      i++;


      if (i === files.length) {
        //edge case
        readUserInput();
      } else {
        //base case
        file(i);
      }
    })
  }

  file(0);
});

