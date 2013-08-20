###
Consult:

https://gist.github.com/rpflorence/6274274
https://gist.github.com/rpflorence/6274302
https://gist.github.com/rpflorence/6274317
###

define [
  'Ember',
  'jquery',
  './module_item'
], (Ember,$,ModuleItem) ->
  Ember.Object.extend(Ember.Evented).reopenClass
    findAll: (course_id) ->
      records = Ember.ArrayProxy.create(content: [])
      url = '/api/v1/courses/' + course_id + '/modules'
      $.getJSON url, success = (results) ->
        records.addObjects results.map (result) ->
          module = Ember.Object.create(result)
          module.set 'expanded', true
          ModuleItem.findAll course_id, module
          module
      records
