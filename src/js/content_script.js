chrome.extension.sendMessage(
  {
    'action': 'pageStart',
    'pageUrl': location.href
  },
  function(res) {
    var $tabs = $('.pagehead ul.tabs');
    var links = res.links;

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      $tabs.append(
        '<li><a href="' + link.link_to + '" target="_brank">' + link.text + '</li>'
      );
    }
  }
);
