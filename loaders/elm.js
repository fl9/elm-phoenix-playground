var path = require('path');
var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').execSync;

module.exports = function(source) {
  this.cacheable();
  exec(`elm-make --output=elm.js ${this.resourcePath}`, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

  return fs.readFileSync('elm.js', { encoding: 'utf8' }) + '\n module.exports = Elm;';
};
