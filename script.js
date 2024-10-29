const li = ['ok','https://www.youtube.com/watch?v=RTrvSLEukqw&t=0s']
var img = new Image();
img.src = "photos/start.png";
img.onload = function(){
  var height = img.height;
  var width = img.width;
  console.log(height);
  console.log(width);
}
function showit(id) {
  var p = document.getElementById(id);
  p.classList.toggle("show");
}
function opend(linkn){
  window.open(li[linkn],'_blank');
}
const funs=['69420','42069','69','420'];
function s(g){
  if (event.key=='Enter'){
    if (g.value=='333600'){
      showit('b1');
    }
    if (funs.indexOf(g.value) != -1){
      alert('funny');
    }
  }
}
// https://www.youtube.com/watch?v=RTrvSLEukqw&t=0s
// link to bloops
