var promise = new Promise(function(resolve) {
  resolve(require('../../elm/Test.elm'))
});

promise.then(function(Elm) {
  var elmDiv = document.getElementById('elm-main')
    , elmApp = Elm.embed(Elm.Test, elmDiv);
});
