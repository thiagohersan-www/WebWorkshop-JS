function choose(el) {
  var newSrc = el.getAttribute("src");
  document.getElementById("my-image").setAttribute("src", newSrc);
  beat(el);
}

function beat(el) {
  el.style.width = '300px';
  setTimeout(function(){el.style.width = '256px';}, 200);
}
