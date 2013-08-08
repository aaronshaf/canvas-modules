server = require './server'
fs = require 'fs'

if !fs.existsSync './config.json'
  console.log 'config.json not found. See config.example.json'
  process.exit()

settings = JSON.parse(fs.readFileSync('./config.json'))

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  bundle = 'context_modules2'

  proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    # api: grunt.file.readJSON('config.json').api

    clean: [
      'compiled/'
      'libpeerconnection.log'
    ]
    open:
      server:
        path: 'http://localhost:8000'

    coffee:
      compile:
        options:
          join: false
          sourceMap: true
        expand: true
        src: ['**/*.coffee']
        cwd: 'app/'
        dest: 'compiled/ember/' + bundle + '/'
        ext: '.js'

    sass:
      dist:
        files:
          'compiled/context_modules2.css': 'stylesheets/context_modules2.scss'
        options:
          sourceMap: true

    ember_handlebars:
      options:
        amd: true
        processName: (filename) ->
          # filename.replace /^.*\/|\.[^.]*$/g, ''
          filename = filename.replace 'app/templates/', ''
          filename = filename.replace '.handlebars', ''
          filename.replace '.hbs', ''

      compile:
        files:
          'compiled/templates.js': [
            'app/templates/**/*.hbs'
          ]
          
    watch:
      server:
        files: [
          'node_modules/canvas-mock-api/*.js',
          'node_modules/canvas-mock-api/**/*.js'
        ]
        tasks: ['server']

      scripts:
        files: [
          'app/**/*.coffee',
          'vendor/**/*.js',
          '**/*.png'
        ]
        tasks: ['coffee']
        options:
          spawn: false
          interrupt: true
          livereload: true

      templates:
        files: ['app/**/*.hbs']
        tasks: ['ember_handlebars']
        options:
          spawn: false
          interrupt: true
          livereload: true

      sass:
        files: ['stylesheets/*.scss']
        tasks: ['sass']
        options:
          spawn: false
          interrupt: true
          livereload: true
  
  server(grunt);
          

  grunt.registerTask 'default', [
    'clean',
    'coffee',
    'ember_handlebars',
    'sass',
    'server',
    'open:server',
    'watch'
  ]