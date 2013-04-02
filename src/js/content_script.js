chrome.extension.sendMessage({'action': 'pageStart'}, function(response) {
  console.log(response);
});
