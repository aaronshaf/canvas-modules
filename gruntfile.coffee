module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig
    watch:
      build:
        files: ['app/**/*.{js,hbs}']
        tasks: ['public']

    emberTemplates:
      compile:
        options:
          amd: true
          templateBasePath: 'app/templates/'
        files:
          'public/js/templates.js': ['app/templates/{,*/}*.hbs','app/templates/{,*/}{,*/}*.hbs']

    coffee:
      compile:
        expand: true
        options:
          join: true
        # cwd: 'public/js'
        src: ['app/**/*.coffee','shared/**/*.coffee']
        dest: 'public/js/'
        ext: '.js'

    coffeelint:
      app: ['app/**/*.coffee']
      options:
        max_line_length:
          level: 'ignore'
        no_trailing_whitespace:
          level: 'ignore'

    # concat:
    #   public:
    #     src: ['app/**/*.js']
    #     dest: 'public/js/main.js'

    clean:
      public: ['public/js/app/']

  grunt.registerTask 'build', ['clean', 'emberTemplates', 'coffee']
  grunt.registerTask 'default', ['build', 'watch']
  grunt.registerTask 'lint', ['coffeelint']