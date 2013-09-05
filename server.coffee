module.exports = (grunt) ->
  express = require("express")
  httpProxy = require("http-proxy")
  grunt.registerTask "server", "Data for Canvas development", (test) ->
    app = express()
    grunt.log.writeln "Starting express server."
    
    # Static resources
    app.use express.static(__dirname)
    if grunt.config("api.host") and grunt.config("api.port")
      proxy = new httpProxy.RoutingProxy()
      app.use (req, res) ->
        
        # req.headers['Authorization'] = 'Bearer ' + grunt.config('api.access_token');
        req.url = req.url + "?access_token=" + grunt.config("api.access_token")
        proxy.proxyRequest req, res,
          pathnameOnly: true
          host: grunt.config("api.host")
          port: grunt.config("api.port")

    else
      app.use express.bodyParser()
      canvasMockApi = require("canvas-mock-api")
      canvasMockApi app
    app.listen 8000
