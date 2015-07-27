// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  hash = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  backdrop(),
  hash()
]);

require('prism');
require('prism/components/prism-coffeescript');
require('prism/components/prism-haml');
