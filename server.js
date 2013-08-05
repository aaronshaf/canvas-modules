module.exports = function(grunt) {
  var express = require('express');
  var httpProxy = require('http-proxy');

  grunt.registerTask('server', 'Data for Canvas development', function(test) {
    var app = express();
    
    grunt.log.writeln('Starting express server.');

    // Static resources
    app.use(express.static(__dirname));

    if(grunt.config('api.host') || grunt.config('api.port')) {
      var proxy = new httpProxy.RoutingProxy();
      app.use(function(req, res) {
        // req.headers['Authorization'] = 'Bearer ' + grunt.config('api.access_token');
        req.url = req.url + '?access_token=' + grunt.config('api.access_token');
        proxy.proxyRequest(req, res, {
          pathnameOnly: true,
          host: grunt.config('api.host') || 'localhost',
          port: grunt.config('api.port') || 3000
        });
      });
    } else {
      app.use(express.bodyParser());
      var canvasMockApi = require('canvas-mock-api');
      canvasMockApi(app);
    }

    app.listen(8000);
  });
};