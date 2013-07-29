module.exports = function(grunt) {
  var coffeescripts = [
    'app/**/*.coffee'
    // 'config/*.coffee',
    // 'controllers/*.coffee',
    // 'models/*.coffee',
    // 'routes/*.coffee'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {}
    },
    clean: ['compiled/'],
    coffee: {
      compile: {
        options: {
          join: false,
          sourceMap: true
        },
        expand: true,
        src: ['**/*.coffee'],
        cwd: 'app/',
        dest: 'compiled/',
        ext: '.js'
      }
    },
    sass: {
      dist: {
        files: {
          'compiled/application.css': 'stylesheets/application.scss'
        },
        options: {
          sourceMap: true
        }
      }
    },
    watch: {
      scripts: {
        files: coffeescripts,
        tasks: ['coffee'],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        }
      },
      sass: {
        files: [
          'stylesheets/application.scss'
        ],
        tasks: ['sass'],
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean','coffee','sass','connect','watch']);
};