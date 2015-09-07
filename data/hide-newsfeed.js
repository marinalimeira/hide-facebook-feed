window.addEventListener("load", function() {
  var stream = document.getElementById("stream_pagelet");
  var topnews_regex = new RegExp(/^topnews_main_stream/);
  if (stream) {
    for (let el of stream.childNodes) {
      if (topnews_regex.test(el.id))
        stream.removeChild(el);
    }
  }
});