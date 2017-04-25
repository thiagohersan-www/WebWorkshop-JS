function getRandomColor() {
  return '#'+Math.random().toString(16).substr(-6);
}

function changeBackground(c) {
  var newColor = c || getRandomColor();
  document.body.style.backgroundColor = newColor;
}
