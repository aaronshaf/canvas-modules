define [
  'ember'
  '../../shared/xhr/parse_link_header'
  'underscore'
], (Ember, parseLinkHeader, {throttle}) ->

  $window = $ window

  IcPaginatedRecordsComponent = Ember.Component.extend

    registerWithConstructor: (->
      @constructor.register this if @get 'meta.next'
    ).observes('meta.next')

    unregisterFromConstructor: (->
      @constructor.unregister this unless @get 'meta.next'
    ).observes('meta.next')

    setData: (->
      @set 'data', Ember.ArrayProxy.create({content: []})
      @set 'meta', Ember.Object.create()
    ).on('init')

    loadRecords: ((href) ->
      @set 'is-loading', true
      Ember.$.getJSON(href || @get('href'), @ajaxCallback.bind(this))
    ).on('didInsertElement')

    loadNextRecords: ->
      @loadRecords @get('meta.next')

    ajaxCallback: (res, status, xhr) ->
      @get('data').pushObjects(@normalize(res, status, xhr))
      @set('meta', @extractMeta(res, status, xhr))
      @set 'is-loading', false

    normalize: (res) ->
      key = @get('data-key')
      if key then res[key] else res

    extractMeta: (res, status, xhr) ->
      parseLinkHeader xhr

  IcPaginatedRecordsComponent.reopenClass

    views: []

    register: (view) ->
      @views.addObject view
      if @views.length is 1
        $window.on 'scroll.ic-lazily-paginated-records', throttle(@checkViews.bind(this), 100)
      Ember.run.scheduleOnce 'afterRender', this, 'checkViews'

    unregister: (view) ->
      @views.removeObject(view)
      if @views.length is 0
        $window.off 'scroll.ic-lazily-paginated-records'

    checkViews: ->
      for view in @views
        continue if view.get('is-loading')
        {bottom} = view.get('element').getBoundingClientRect()
        if bottom <= window.innerHeight
          view.loadNextRecords()
      null


