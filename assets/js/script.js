<script>
function initComparisons() {
  var x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    var slider, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = (w / 2) + "px";

    /* create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");

    /* insert slider */
    img.parentElement.insertBefore(slider, img);

    /* position slider */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

    /* execute function when slider is dragged */
    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("mousemove", slideMove);

    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);
    window.addEventListener("touchmove", slideMove);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
    }

    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e);
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }

    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

window.onload = initComparisons;
</script>
