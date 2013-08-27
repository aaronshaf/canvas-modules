server = require './server'
fs = require 'fs'
path = require('path')

# if !fs.existsSync './config.json'
#   console.log 'config.json not found. See config.example.json'
#   process.exit()

if fs.existsSync 'dev/config.json'
  settingsJSON = fs.readFileSync 'dev/config.json', encoding: 'utf8'
  if settingsJSON.length
    settings = JSON.parse settingsJSON

if not settings
  defaultSettings = fs.readFileSync 'dev/config.example.json', encoding: 'utf8'
  console.log defaultSettings
  fs.writeFileSync 'dev/config.json', defaultSettings, encoding: 'utf8'
  settings = JSON.parse defaultSettings

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  bundle = 'context_modules2'

  proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    api: grunt.file.readJSON('dev/config.json').api

    clean: [
      'compiled/'
      'libpeerconnection.log'
    ]
          
    watch:
      # server:
      #   files: [
      #     'node_modules/canvas-mock-api/*.js',
      #     'node_modules/canvas-mock-api/**/*.js'
      #   ]
      #   tasks: ['server']

      scripts:
        files: [
          '*.coffee'
          '{,*/}*.coffee'
        ]
        tasks: ['coffee']
        options:
          spawn: false
          interrupt: true

      templates:
        files: [
          'templates/*.hbs'
          'templates/{,*/}*.hbs'
        ]
        tasks: ['ember_handlebars']
        options:
          spawn: false
          interrupt: true

      sass:
        files: ['stylesheets/*.scss']
        tasks: ['sass']
        options:
        #   spawn: false
          interrupt: true

      # livereload:
      #   options:
      #     livereload: true
      #   files: [
      #     'compiled/stylesheets/*.css',
      #     # 'compiled/*.js',
      #     # 'compiled/**/*.js',
      #     # 'vendor/**/*.js',
      #     # '**/*.png'
      #   ]
    concurrent:
      target1: [
        'coffee'
        'ember_handlebars'
        'sass'
      ]

    open:
      server:
        path: 'http://localhost:8000'

    coffee:
      all:
        options:
          join: false
          sourceMap: true
        expand: true
        src: [
          '*.coffee'
          '{,*/}*.coffee'
        ]
        dest: 'compiled/'
        ext: '.js'

    sass:
      dist:
        files:
          'compiled/stylesheets/context_modules2.css': 'stylesheets/context_modules2.scss'
        options:
          sourceMap: true

    ember_handlebars:
      options:
        amd: true
        processName: (filename) ->
          # filename.replace /^.*\/|\.[^.]*$/g, ''
          filename = filename.replace 'templates/', ''
          filename = filename.replace '.handlebars', ''
          filename.replace '.hbs', ''

      compile:
        files:
          'compiled/templates.js': [
            'templates/*.hbs',
            'templates/{,*/}*.hbs'
          ]

  server(grunt)

  grunt.event.on 'watch', (action,filepath) ->
    grunt.config ['coffee','all','src'], filepath

  grunt.registerTask 'default', [
    'clean',
    'concurrent:target1',
    'server',
    'open:server',
    'watch'
  ]
