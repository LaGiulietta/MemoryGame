function showStartButton() {
  document.getElementById("sb").style.visibility = "visible";
}
// adjust this as needed, 1 sec = 1000
setTimeout("showStartButton()", 4000); 
function showOptionsButton() {
  document.getElementById("help").style.visibility = "visible";
  document.getElementById("about").style.visibility = "visible";
}
// adjust this as needed, 1 sec = 1000
setTimeout("showOptionsButton()", 5500);
