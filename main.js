function add(){
    var pr= document.getElementById("prokat");
    var on= document.getElementById("online");
    var on_a= document.getElementById("online_a");
    var pr_a= document.getElementById("prokat_a");
    var one=document.getElementById("one")
    var two=document.getElementById("two");
    two.style.display="block"
    one.style.display="none"
    one.style.transition="10s all linear";
    pr.style.backgroundColor="#032541";
    pr_a.style.color="#5BC4BB"
    on_a.style.color="#032541"
    on.style.backgroundColor="white";
}
function foo(){
    var pr= document.getElementById("prokat");
    var on= document.getElementById("online");
    var on_a= document.getElementById("online_a");
    var pr_a= document.getElementById("prokat_a");
    var two=document.getElementById("two");
    var one=document.getElementById("one")
    one.style.display="flex"
    two.style.display="none"
    on.style.backgroundColor="#032541";
    on_a.style.color="#5BC4BB"
    pr_a.style.color="#032541"
    pr.style.backgroundColor="white"; 
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

function del(){
  var box=document.getElementById("box");
  box.classList.add("box_info")
}
function add1(){
  var box=document.getElementById("box1");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add2(){
  var box=document.getElementById("box2");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add3(){
  var box=document.getElementById("box3");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add4(){
  var box=document.getElementById("box4");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add5(){
  var box=document.getElementById("box5");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add6(){
  var box=document.getElementById("box6");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add7(){
  var box=document.getElementById("box7");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add8(){
  var box=document.getElementById("box8");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}
function add9(){
  var box=document.getElementById("box9");
  box.style.display = (box.style.display == 'block') ? 'none' : 'block'
}

var arry=[];

// for(var v of arry){
//   if(arry.length >= 0){
//     console.log("bor")
//   }
//   else
//     console.log("yo'q")
  
// }
arry ?  console.log("bor") : 






