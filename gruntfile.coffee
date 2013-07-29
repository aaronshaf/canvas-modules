module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    connect:
      server: {}

    clean: ["compiled/"]
    coffee:
      compile:
        options:
          join: false
          sourceMap: true
        expand: true
        src: ["**/*.coffee"]
        cwd: "app/"
        dest: "compiled/ember/modules/"
        ext: ".js"

    sass:
      dist:
        files:
          "compiled/application.css": "stylesheets/application.scss"
        options:
          sourceMap: true

    ember_handlebars:
      options:
        amd: true
      compile:
        files:
          "compiled/ember/modules/templates.js": ["app/templates/*.hbs"]

    watch:
      scripts:
        files: ["app/**/*.coffee"]
        tasks: ["coffee"]
        options:
          spawn: false
          interrupt: true
          livereload: true

      sass:
        files: ["stylesheets/application.scss"]
        tasks: ["sass"]
        options:
          spawn: false
          interrupt: true
          livereload: true

  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-ember-handlebars"
  grunt.loadNpmTasks "grunt-sass"
  grunt.loadNpmTasks "grunt-contrib-qunit"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-notify"

  grunt.registerTask "default", ["clean", "coffee", "ember_handlebars", "sass", "connect", "watch"]