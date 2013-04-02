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

      var sourceBranch      = $('span.commit-ref:first').text().trim();
      var destinationBranch = $('span.commit-ref:last').text().trim();

      var linkTo =
        link.link_to
        .split("${SOURCE_BRANCH}").join(sourceBranch)
        .split("${DESTINATION_BRANCH}").join(destinationBranch);

      $tabs.append(
        '<li><a href="' + linkTo + '" target="_brank">' + link.link_text + '</li>'
      );
    }
  }
);
