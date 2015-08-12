var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "www.facebook.com",
  contentScript: 'document.getElementById("stream_pagelet").removeChild(document.getElementById("topnews_main_stream_408239535924329"));'
});