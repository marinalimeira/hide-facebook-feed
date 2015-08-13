var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: "./hide-newsfeed.js"
});
