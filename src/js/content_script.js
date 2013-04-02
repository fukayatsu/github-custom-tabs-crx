chrome.extension.sendMessage(
  {
    'action': 'pageStart'
  },
  function(response) {
    var $tabs = $('.pagehead ul.tabs');
    var label = 'google';
    var url = 'https://google.com';
    $tabs.append(
      '<li><a href="' + url + '" target="_brank">' + label + '</li>'
    );
  }
);
