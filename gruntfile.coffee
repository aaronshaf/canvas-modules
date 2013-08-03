module.exports = (grunt) ->
  proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    connect:
      options:
        host: 'localhost'
        middleware: (connect) -> [
          connect.static(__dirname), #static resources
          proxySnippet # proxy
        ]
      proxies: [
        context: '/api'
        host: 'localhost'
        port: 3000
      ]

    clean: ['compiled/']
    coffee:
      compile:
        options:
          join: false
          sourceMap: true
        expand: true
        src: ['**/*.coffee']
        cwd: 'app/'
        dest: 'compiled/ember/modules/'
        ext: '.js'

    sass:
      dist:
        files:
          'compiled/application.css': 'stylesheets/application.scss'
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
          'compiled/ember/modules/templates.js': [
            'app/templates/**/*.hbs'
          ]
    watch:
      scripts:
        files: ['app/**/*.coffee','vendor/**/*.js']
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
          
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-ember-handlebars'
  grunt.loadNpmTasks 'grunt-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-notify'
  grunt.loadNpmTasks 'grunt-connect-proxy'
  grunt.loadNpmTasks 'grunt-testem'

  grunt.registerTask 'default', [
    'clean',
    'coffee',
    'ember_handlebars',
    'sass',
    'configureProxies',
    'connect',
    'watch'
  ]