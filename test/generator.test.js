const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe('Generation of files', function(){
  it('Files generated successfully', function () {
    // The object returned acts like a promise, so return it to wait until the process is done
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ coffee: false })   // Mock the prompt answers
      .withLocalConfig({ lang: 'en' }) // Mock the local config
      .then(function() {
        // assert something about the generator
        assert.file([
          'public',
          'app.js', 
          'LICENSE.md', 
          'package.json', 
          'README.md'
        ]);
      });
  });
});