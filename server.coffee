# process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

module.exports = (grunt) ->
  express = require 'express'
  request = require 'request'

  grunt.registerTask "server", "Data for Canvas development", (test) ->
    app = express()
    grunt.log.writeln "Starting express server."
    
    # Static resources
    app.use express.static(__dirname)
    if grunt.config("api.location") and grunt.config("api.access_token")
      handle = (req, res, next) ->
        options =
          method: req.method
          url: unescape grunt.config('api.location') + req.url
          headers:
            Authorization: "Bearer #{grunt.config("api.access_token")}"
            Host: req.headers.host
            Referer: req.headers.referer

        if req.body and req.method is 'POST'
          options.form = req.body

        request options, (error, response, body) ->
          return res.send 500, error if error
          res.type 'application/json'
          res.send body

      app.use express.bodyParser()
      app.get '/api/*', handle
      app.post '/api/*', handle
      app.delete '/api/*', handle
      app.put '/api/*', handle

    app.listen 8000
