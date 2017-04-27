document.onscroll = function() {
  var img01 = document.getElementById("container01");
  var img02 = document.getElementById("container02");
  var txt03 = document.getElementById("container03")
  var txt04 = document.getElementById("container04")

  if(getScrollTop() < 700) {
    scrollElement(img01, 300, 400, 1.1);
    scrollElement(txt03, 500, 400, 1.5);
  }

  if(getScrollTop() < 800) {
    scrollElement(img02, 500, 400, 1.2);
    scrollElement(txt04, 650, 400, 1.5);
  }
}

function scrollElement(mElement, minOffset, maxDistance, speed) {
  var myOffset = Math.max(0, getScrollTop() - minOffset);
  var myMargin = (0 - myOffset * speed);
  mElement.style.marginTop = Math.max(myMargin, -maxDistance) + "px";
}

function getScrollTop() {
  var doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);  
}
