var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  attachTo: ["top"],
  include: "*.facebook.com",
  contentScriptFile: "./hide-newsfeed.js"
});
