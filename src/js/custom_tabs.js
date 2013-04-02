var customTab = {
  getLinksForUrl: function(url) {
    try {
      var links = [];
      var settings = JSON.parse(localStorage['setting']);
      for (var key in settings) {
        var setting = settings[key];

        if (url.match(setting.page_at)) {
          if (!setting.text) { setting['text'] = key; }
          links.push(setting);
        }
      }
      return links;
    } catch(e) {
      console.log(e);
      // setting not found
      return [];
    }
  }
};