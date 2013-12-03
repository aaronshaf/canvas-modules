define ['ember', 'jquery', 'underscore'], (Ember, $, {throttle}) ->

  # prime candidate for a shared view, next time we do something like this

  $window = $ window

  ModuleView = Ember.View.extend
    templateName: 'module'

    register: (->
      @constructor.register this if @get 'controller.itemLinks.next'
    ).observes('controller.itemLinks.next')

    unregister: (->
      @constructor.unregister this unless @get 'controller.itemLinks.next'
    ).observes('controller.itemLinks.next')

  ModuleView.reopenClass

    views: []

    register: (view) ->
      @views.addObject view
      if @views.length is 1
        $window.on 'scroll.moduleView', throttle(@checkViews.bind(this), 100)
      @checkViews()

    unregister: (view) ->
      @views.removeObject(view)
      if @views.length is 0
        $window.off 'scroll.moduleView'

    checkViews: ->
      for view in @views
        continue if view.get('controller.isLoading')
        {bottom} = view.get('element').getBoundingClientRect()
        if bottom <= window.innerHeight + 500
          view.get('controller').send('loadNextItems')
      null

