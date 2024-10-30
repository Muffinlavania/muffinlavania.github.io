const li = ['https://thatsit.muffinlavania.repl.co/','https://www.youtube.com/watch?v=RTrvSLEukqw&t=0s','https://www.youtube.com/watch?v=u9IlBxEYfQo','https://www.youtube.com/watch?v=LQpSQfpuHq0','https://www.youtube.com/watch?v=Of1z-I93DuA'];
const funs=['69420','42069','69','420'];
const elements = document.querySelectorAll(".doit");
console.log(elements);
let x=0,y=0;

window.addEventListener("mousemove", (eve) => {
  
  x = eve.clientX-window.innerWidth/2;

  elements.forEach((thing) => {
    let sped = thing.dataset.speedx;
    let Z = window.getComputedStyle(thing).getPropertyValue('z-index');
    if (Z==3)
      thing.style.transform = `translate(calc(-50% + ${-1*x*sped}px),-50%)`;
    else
      thing.style.transform = `translateX(${-1*x*sped}px)`;
  });
});


function showit(id) {
  var p = document.querySelectorAll(id);
  p.forEach((thing) => {
    thing.classList.toggle("show");
  });
}
function opend(linkn){
  if (linkn!=99){ window.open(li[linkn],'_blank'); }
  else { window.open("https://www.youtube.com/watch?v=L6cg4ZZE_Zg"); }
}

function s(event,g){
  if (event.key=='Enter'){
    if (g.value=='333600'){showit('.blop1');}
    if (g.value=='946835'){showit('.blop2');}
    if (g.value=='102823'){showit('.blop3');}
    if (g.value=='020923'){showit('.blop4');}
    if (funs.indexOf(g.value) != -1){ alert('funny');}
  }
}

// https://www.youtube.com/watch?v=RTrvSLEukqw&t=0s
// link to bloops