define ['ember'], (Ember) ->
  IcIconSettingsComponent = Ember.Component.extend
    tagName: 'ic-icon-settings'

    classNames: ['ic-icon']

    attributeBindings: 'style'

    'fillColor': (->
      @get('fill-color') ? '#010101'
    ).property('fill-color')
