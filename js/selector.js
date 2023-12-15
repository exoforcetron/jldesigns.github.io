function right(){
  var name = document.getElementById("name"),
      m = document.getElementById("one"),
      mi = document.getElementById("one_img"),
      k = document.getElementById("two"),
      ki = document.getElementById("two_img"),
      h = document.getElementById("four"),
      hi = document.getElementById("four_img"),
      ha = document.getElementById("three"),
      hai = document.getElementById("three_img");
  if (document.getElementById("whats").innerHTML==="Vocaloid"){
    if (name.innerHTML === "one"){
      m.style.display="none"
      mi.style.display="none"
      k.style.display="block";
      ki.style.display="block";
     name.innerHTML="two";
   } else if (name.innerHTML=== "two") {
     k.style.display="none";
     ki.style.display="none";
     ha.style.display="block";
     hai.style.display="block";
     name.innerHTML="three";
   } else if (name.innerHTML=== "three"){
     ha.style.display="none";
     hai.style.display="none";
     h.style.display="block";
     hi.style.display="block";
     name.innerHTML="four";
   } else if (name.innerHTML=== "four"){
     h.style.display="none";
     hi.style.display="none";
     document.getElementById("five").style.display="block";
     document.getElementById("five_img").style.display="block";
     name.innerHTML="five";
   }else if (name.innerHTML=== "five"){
     document.getElementById("five").style.display="none";
     document.getElementById("five_img").style.display="none";
     document.getElementById("six").style.display="block";
     document.getElementById("six_img").style.display="block";
     name.innerHTML="six";
   }else if (name.innerHTML=== "six"){
     document.getElementById("six").style.display="none";
     document.getElementById("six_img").style.display="none";
     m.style.display="block";
     mi.style.display="block";
     name.innerHTML="one";
   }
  }
  else if (document.getElementById("empty").innerHTML==="yes"){
    if (name.innerHTML === "one"){
     m.style.display="none";
     mi.style.display="none";
     k.style.display="block";
     ki.style.display="block";
     name.innerHTML="two";
   } else if (name.innerHTML==="two") {
     k.style.display="none";
     ki.style.display="none";
     ha.style.display="block";
     hai.style.display="block";
     name.innerHTML="three";
   } else if (name.innerHTML==="three"){
     ha.style.display="none";
     hai.style.display="none";
     h.style.display="block";
     hi.style.display="block";
     name.innerHTML="four";
   } else if (name.innerHTML==="four"){
     h.style.display="none";
     hi.style.display="none";
     m.style.display="block";
     mi.style.display="block";
     name.innerHTML="one";
   }
  }
}
function left(){
  var name = document.getElementById("name"),
      m = document.getElementById("one"),
      mi = document.getElementById("one_img"),
      k = document.getElementById("two"),
      ki = document.getElementById("two_img"),
      h = document.getElementById("four"),
      hi = document.getElementById("four_img"),
      ha = document.getElementById("three"),
      hai = document.getElementById("three_img");
  if (document.getElementById("whats").innerHTML==="Vocaloid"){
    if (name.innerHTML === "one"){
     m.style.display="none";
     mi.style.display="none";
     document.getElementById("six").style.display="block";
     document.getElementById("six_img").style.display="block";
     name.innerHTML="six";   
   } else if (name.innerHTML==="six") {
     document.getElementById("six").style.display="none";
     document.getElementById("six_img").style.display="none";
     document.getElementById("five").style.display="block";
     document.getElementById("five_img").style.display="block";
     name.innerHTML="five";
   }else if (name.innerHTML==="five") {
     document.getElementById("five").style.display="none";
     document.getElementById("five_img").style.display="none";
     h.style.display="block";
     hi.style.display="block";
     name.innerHTML="four";
   }  else if (name.innerHTML==="four"){
     h.style.display="none";
     hi.style.display="none";
     ha.style.display="block";
     hai.style.display="block";
     name.innerHTML="three";
   }else if (name.innerHTML==="three"){
     ha.style.display="none";
     hai.style.display="none";
     k.style.display="block";
     ki.style.display="block";
     name.innerHTML="two";
   }else if (name.innerHTML==="two"){
     k.style.display="none";
     ki.style.display="none";
     m.style.display="block";
     mi.style.display="block";
     name.innerHTML="one";
   }
  }
  else if(document.getElementById("empty").innerHTML==="yes"){
   if (name.innerHTML === "one"){
     m.style.display="none";
     mi.style.display="none";
     h.style.display="block";
     hi.style.display="block";
     name.innerHTML="four";   
   } else if (name.innerHTML==="four") {
     h.style.display="none";
     hi.style.display="none";
     ha.style.display="block";
     hai.style.display="block";
     name.innerHTML="three";
   } else if (name.innerHTML==="three"){
     ha.style.display="none";
     hai.style.display="none";
     k.style.display="block";
     ki.style.display="block";
     name.innerHTML="two";
   } else if (name.innerHTML==="two"){
     k.style.display="none";
     ki.style.display="none";
     m.style.display="block";
     mi.style.display="block";
     name.innerHTML="one";
   }
  }
}