import Masonry from "masonry-layout";

document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelector(".gallery");
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".gallery-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
  });

  msnry.imagesLoaded().progress(function () {
    msnry.masonry("layout");
  });
});
import Flickity from "flickity";

var flkty = new Flickity(".main-carousel", {
  // options
  cellAlign: "left",
  contain: true,
});
