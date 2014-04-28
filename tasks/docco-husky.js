// grunt-docco-husky
// https://github.com/DavidSouther/grunt-docco-husky
//
// Copyright (c) 2012 Vy HOANG
// Licensed under the MIT license.

module.exports = function(grunt) {

  var docco = require('docco-husky');

  // ### TASKS
  grunt.registerMultiTask('docco-husky', 'Docco-husky processor.', function() {
    var name = this.data.name ? this.data.name : grunt.config.get('pkg.name');
    var output = this.data && this.data.options && this.data.options.output;
    // ither set the destination in the files block, or (prefferred) in { options: output }
    var options = this.filesSrc;
    if(output) {
        options.unshift('-output', output);
    }
    options.unshift('-name', '"' + name + '"');
    docco.document(options, this.async());
  });
};
