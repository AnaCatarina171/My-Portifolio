$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tagScroll");
  
    var tag1 = $(".tagScroll1");

    if ($(tag1).position().top < pageBottom) {
        $(tag1).addClass("visible");
      } else {
        $(tag1).removeClass("visible");
      }

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });
  