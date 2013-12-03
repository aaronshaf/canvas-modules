define [
  'ember'
  'jquery'
], ({Controller, get, set}, $) ->
  ModulesController = Controller.extend
    url: '/api/v1/courses/#{ENV.course_id}/modules'

    actions:
      add: ->
        module = @pushObject Ember.Object.create({id:Math.random()})
        # module = Ember.Object.create({})
        $.ajax
          url: '/api/v1/courses/#{ENV.course_id}/modules'
          type: 'POST'
          dataType: 'json'
          data: 
            module:
              name: "TEST" # "Τεκνία μου, ταῦτα γράφω ὑμῖν ἵνα μὴ ἁμάρτητε".split(' ').sort(-> .5 - Math.random()).join(' ')
          success: (response) =>
            module.setProperties response
          error: =>
            false
            # @removeObject module
        false
