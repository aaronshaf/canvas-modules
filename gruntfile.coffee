server = require './server'
fs = require 'fs'
settings = JSON.parse(fs.readFileSync('./config.json'))

module.exports = (grunt) ->
  bundle = 'context_modules2'

  proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    api:
      host: 'localhost'
      port: 3000
      access_token: settings?.access_token

    clean: ['compiled/']

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
        files: ['stylesheets/application.scss']
        tasks: ['sass']
        options:
          spawn: false
          interrupt: true
          livereload: true
  
  server(grunt);
          
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-ember-handlebars'
  grunt.loadNpmTasks 'grunt-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-notify'
  grunt.loadNpmTasks 'grunt-testem'

  grunt.registerTask 'default', [
    'clean',
    'coffee',
    'ember_handlebars',
    'sass',
    'server',
    'watch'
  ]