function hideMenu() {
  document.getElementById('menu').style.left = '-150px';
}
function showMenu() {
  document.getElementById('menu').style.left = '0';
}

function changeImage(imgNumber) {
  var nSrc = 'imgs/img'+imgNumber+'.jpg';
  document.getElementById('myImage').setAttribute('src', nSrc);
  hideMenu();
}
