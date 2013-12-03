define ->

  regex = /<(http.*?)>; rel="([a-z]*)",/g

  parseLinkHeader = (jqXhr) ->
    header = jqXhr.getResponseHeader 'Link'
    links = {}
    while link = regex.exec header
      links[link[2]] = link[1]
    links

