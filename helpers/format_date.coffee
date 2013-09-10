define [
  'ember'
], (Ember) ->
  Ember.Handlebars.registerBoundHelper 'formatDate', (rawDate) ->
    months = [
        'Jan'
        'Feb'
        'March'
        'April'
        'May'
        'June'
        'July'
        'Aug.'
        'Sep.'
        'Oct.'
        'Nov.'
        'Dec.'
      ]

    date = new Date(rawDate)

    day = date.getDay()
    month = months[date.getMonth()]
    year = date.getFullYear()

    new Ember.Handlebars.SafeString "#{month} #{day}, #{year}"
