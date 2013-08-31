define([
  'jquery'
], function($) {
  var $ = jQuery.noConflict(true);

  var _parseJSON = $.parseJSON;
  $.parseJSON = function() {
    if (arguments[0]) {
      try {
        var newData = arguments[0].replace(/^while\(1\);/, '');
        arguments[0] = newData;
      } catch (err) {
        // data was not a string or something, just pass along to the real parseJSON
        // and let it handle errors.
      }
    }
    return _parseJSON.apply($, arguments);
  };
  $.ajaxSettings.converters["text json"] = $.parseJSON;

  return $;
});