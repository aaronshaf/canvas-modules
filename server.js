module.exports = function(grunt) {
  var express = require('express');
  var httpProxy = require('http-proxy');

  grunt.registerMultiTask('canvas-data-dev', 'Data for Canvas development', function() {
    var app = express();
    var options = this.options({
      method: 'mock-api'
    });

    grunt.log.writeln('Starting express server.');

    // Static resources
    app.use(express.static(__dirname));

    // Mock API
    app.get('/api/v1', function(req, res) { ///v1/courses/1/modules
      res.json('yay!');
    });

    // Proxy if configured for it
    var proxy = new httpProxy.HttpProxy({
      target: {
        host: 'localhost',
        port: 8000,
        context: '/api'
      }
    });

    app.listen(8000);
  });
};





// // Mock API
// // app.get('/api/v1', function(req, res) { ///v1/courses/1/modules
// //   res.json('yay!');
// // });

// app.listen(8000);