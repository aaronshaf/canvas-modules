requirejs.config({
  paths: {
    'ember': '../../vendor/ember/index',
    'underscore': '../../vendor/lodash/index',
    'jquery': '../../vendor/jquery/jquery',
    'i18n': '../tmp/i18n',
    // 'handlebars': 'vendor/handlebars/handlebars-1.0.0',
  },
  // map: {
  //   '*': {
  //     'Handlebars': 'handlebars',
  //     'Ember': 'ember',
  //     'jquery': 'vendor/instructure/jquery.instructure-1.1'
  //   },
  //   'vendor/instructure/jquery.instructure-1.1': {
  //     'jquery': 'vendor/jquery/jquery-1.10.2.js'
  //   }
  // },
  shim: {
    'ember': {
      // deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    // 'underscore': {
    //   exports: '_'
    // }
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});