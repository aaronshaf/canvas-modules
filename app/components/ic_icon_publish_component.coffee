define ['ember'], (Ember) ->
  IcIconPublishComponent = Ember.Component.extend
    tagName: 'ic-icon-publish'

    classNames: ['ic-icon']

    attributeBindings: 'style'

    'fillColor': (->
      @get('fill-color') ? '#010101'
    ).property('fill-color')
