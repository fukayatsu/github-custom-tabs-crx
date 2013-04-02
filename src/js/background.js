chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({"url": chrome.extension.getURL("options.html")});
});

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action === "pageStart") {
    var links = customTab.getLinksForUrl(msg.pageUrl);
    sendResponse({links: links});
  }
});
