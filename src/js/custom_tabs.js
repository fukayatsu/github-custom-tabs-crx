var customTab = {
  getLinksForUrl: function(url) {
    try {
      var links = [];
      var settings = JSON.parse(localStorage['setting']);
      for (var key in settings) {
        var setting = settings[key];

        if (url.match(new RegExp(setting.page_on))) {
          if (!setting.link_text) { setting['link_text'] = key; }
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