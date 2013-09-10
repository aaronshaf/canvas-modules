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
      app.get '/api/*' ,(req, res, next) ->
        # To do: support non-get request methods

        request
          url: unescape grunt.config("api.location") + req.url
          headers:
            Authorization: "Bearer #{grunt.config("api.access_token")}"
        , (error, response, body) ->
          return res.send 500, error if error
          res.type 'application/json'
          res.send body

    app.listen 8000
