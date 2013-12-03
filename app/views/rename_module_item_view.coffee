define [
  'ember'
  'jquery'
], (Ember, $) ->

  $window = $ window
  RenameModuleItem = Ember.View.extend
    classNames: ['title','rename']

    didInsertElement: (->
      @$('input[type="text"]').focus()
    )
    
    keyDown: (e) ->
      enterKey = 13
      escapeKey = 27

      if e.which is enterKey
        @get('controller').send('saveRename')

      if e.which is escapeKey
        @get('controller').send('cancelRename')
