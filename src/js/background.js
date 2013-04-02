chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({"url": chrome.extension.getURL("options.html")});
});

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log(msg);
  sendResponse({data: 'foobar'});
});
