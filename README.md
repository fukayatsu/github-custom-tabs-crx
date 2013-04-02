github-custom-tabs
==================

Add custom tabs on github


# screen shots

![](https://raw.github.com/fukayatsu/github-custom-tabs-crx/master/screen_shots/Screen%20Shot%202013-04-02%20at%2023.09.49.png)

---

![](https://raw.github.com/fukayatsu/github-custom-tabs-crx/master/screen_shots/Screen%20Shot%202013-04-02%20at%2023.10.18.png)

# setting(yaml)

```
Emoji:
  page_on: https://github.com
  link_text: ♥ Emoji
  link_to: http://www.emoji-cheat-sheet.com/

google-pull-request-branch-name:
  page_on: https://github.com/.*/.*/pull/[0-9]+
  link_text: ★ google
  link_to:  https://www.google.co.jp/search?q=${SOURCE_BRANCH}
```

`${SOURCE_BRANCH}` and `${DESTINATION_BRANCH}` are available in `link_to` on github pull-request page.