chrome.extension.sendMessage(
  {
    'action': 'pageStart',
    'pageUrl': location.href
  },
  function(res) {
    var $tabs = $('.pagehead ul.tabs');
    var links = res.links;

    if ($tabs.find('li').length + links.length > 9) {
      $tabs.after('<ul class="tabs"></ul>');
      $tabs = $('.pagehead ul.tabs:last');
    }

    for (var i = 0; i < links.length; i++) {
      var link = links[i];

      var sourceBranch      = $('span.commit-ref:first').text().trim();
      var destinationBranch = $('span.commit-ref:last').text().trim();

      // for my environment
      var numbersMatch = destinationBranch.match(/([0-9]+)$/);
      var numbers = numbersMatch ? numbersMatch[1] : "";

      var linkTo =
        link.link_to
        .split("${SOURCE_BRANCH}").join(sourceBranch)
        .split("${DESTINATION_BRANCH}").join(destinationBranch)
        .split("${DESTINATION_BRANCH_LAST_NUMBERS}").join(numbers);

      $tabs.append(
        '<li highlight="dummy"><a href="' + linkTo + '" target="_brank">' + link.link_text + '</li>'
      );
    }
  }
);
