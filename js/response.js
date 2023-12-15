//Jessi Langager
//hover, click for nav

// connects side sub-nav and hamburger icon
//targets anything below the id.

function my(){
  if (document.getElementById("highlight").innerHTML === "about"){        
      document.getElementById("about").style.color="#FF679D";
    }
    else if (document.getElementById("highlight").innerHTML === "songs"){        
      document.getElementById("songs").style.color="#FF679D";
    }else if (document.getElementById("highlight").innerHTML === "char"){
      document.getElementById("char").style.color="#FF679D";
      document.getElementById("colorize").style.fill="#FF679D";
    }else if (document.getElementById("highlight").innerHTML === "game"){
      document.getElementById("game").style.color="#FF679D";
    }
  document.getElementById("nav-lists").addEventListener("click", clickedSomething);
  document.getElementById("nav-lists").addEventListener("mouseover", hover);
  document.getElementById("nav-lists").addEventListener("mouseout", gone);
  document.getElementById("ham").addEventListener("click", click);
  document.getElementById("sub_nav_top").style.opacity="0";//this fixed error for some reason...
  document.getElementById("main").addEventListener("click", clicked);
  document.getElementById("main").addEventListener("mouseover", hov);
//  document.getElementById("main").addEventListener("mouseout", off);
}  


//hover for side sub-nav
function hover(event){
//  console.log(event.target.id);
  if ((event.target.id)==="aboutS") {
    document.getElementById("aboutS").style.color="#FF679D";
    document.getElementById("songS").style.color="#707070";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";
    document.getElementById("gameS").style.color="#707070";
    document.getElementById("close").style.color="#707070";
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070"; 
  }else if ((event.target.id)==="songS"){
    document.getElementById("songS").style.color="#FF679D";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";
    document.getElementById("gameS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("close").style.color="#707070"; 
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070";
  }else if ((event.target.id)==="charS"){
    document.getElementById("charS").style.color="#FF679D";
    document.getElementById("cR").style.fill="#FF679D";
    document.getElementById("songS").style.color="#707070";
    document.getElementById("gameS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("close").style.color="#707070"; 
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("back_arrow").style.fill="#707070";
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070";
  }else if ((event.target.id)==="gameS"){
    document.getElementById("gameS").style.color="#FF679D";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";    
    document.getElementById("songS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("close").style.color="#707070"; 
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070";
  }
  else if ((event.target.id)==="close"){
    document.getElementById("close").style.color="#FF679D";
    document.getElementById("gameS").style.color="#707070";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";    
    document.getElementById("songS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070";
  }else if ((event.target.id)==="go_back"){
    document.getElementById("close").style.color="#707070";
    document.getElementById("gameS").style.color="#707070";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";    
    document.getElementById("songS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("go_back").style.color="#FF679D"; 
    document.getElementById("back_arrow").style.fill="#FF679D"; 
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070";
  }else if ((event.target.id)==="moremore"){
    
    document.getElementById("close").style.color="#707070";
    document.getElementById("gameS").style.color="#707070";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";    
    document.getElementById("songS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("moremore").style.color="#FF679D"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
    document.getElementById("wond").style.fill="#707070";
  }else if ((event.target.id)==="wond"){
    document.getElementById("close").style.color="#707070";
    document.getElementById("gameS").style.color="#707070";
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";    
    document.getElementById("songS").style.color="#707070"; 
    document.getElementById("aboutS").style.color="#707070"; 
    document.getElementById("wond").style.color="#FF679D"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
    document.getElementById("moremore").style.fill="#707070"; 
    document.getElementById("go_back").style.fill="#707070";
  }
}
//hover off side sub-nav
function gone(event){
//  console.log(event.target.id);
  if ((event.target.id)==="aboutS") {
    document.getElementById("aboutS").style.color="#707070";
  }else if ((event.target.id)==="songS"){
    document.getElementById("songS").style.color="#707070";
  }else if ((event.target.id)==="charS"){
    document.getElementById("charS").style.color="#707070";
    document.getElementById("cR").style.fill="#707070";
  }else if ((event.target.id)==="gameS"){
    document.getElementById("gameS").style.color="#707070";
  }else if ((event.target.id)==="close"){
    document.getElementById("close").style.color="#707070";
  }else if ((event.target.id)==="moremore"){
    document.getElementById("moremore").style.color="#707070";
  }else if ((event.target.id)==="wond"){
    document.getElementById("wond").style.color="#707070";
  }else if ((event.target.id)==="go_back"){
    document.getElementById("go_back").style.color="#707070"; 
    document.getElementById("back_arrow").style.fill="#707070"; 
  }
}
//click on anything in side sub-nav
function clickedSomething(event){
//  console.log(event.target.id);
  if ((event.target.id)==="charS") {
//    console.log("about");
    document.getElementById("show_back").style.display="block";
    document.getElementById("aboutS").innerHTML ="VIRTUAL SINGER";
    document.getElementById("aboutS").href = "virtual-singer.html";
    document.getElementById("songS").innerHTML ="Leo/need";
    document.getElementById("songS").href = "leo-need.html";
    document.getElementById("gameS").innerHTML ="25-ji, Night Code de.";
    document.getElementById("gameS").href = "25-ji-night-code-de.html";
    document.getElementById("charS").classList.add("hidden");
    document.getElementById("no").style.display="block";
    document.getElementById("noo").style.display="block";
  
    
    document.getElementById("right_arrow").style.opacity="0";
  }else if ((event.target.id)==="go_back") {
    document.getElementById("show_back").style.display="none";
    document.getElementById("aboutS").innerHTML ="ABOUT";
    document.getElementById("aboutS").href = "about.html";
    document.getElementById("songS").innerHTML ="SONGS";
    document.getElementById("songS").href = "songs.html";
    document.getElementById("right_arrow").style.opacity="1";
    document.getElementById("gameS").innerHTML ="GAMEPLAY";
    document.getElementById("gameS").href = "gameplay.html";
    document.getElementById("charS").classList.remove("hidden");
    document.getElementById("no").style.display="none";
    document.getElementById("noo").style.display="none";
  }else if ((event.target.id)==="close") {
    document.getElementById("sub_nav").style.display="none";
    document.getElementById("back").style.display="none";
    document.getElementById("nothing").classList.remove("hideall");
  }
}
//click on hamburger to show side sub-nav
function click(event){
//  if ((event.target.id)==="close") {
//    
//  }
//  console.log(event.target.classList);
  document.getElementById("sub_nav").style.display="block";
  document.getElementById("back").style.display="block";
  document.getElementById("nothing").classList.add("hideall");
}

//sub nav
function clicked(event){
  var sub_nav = document.getElementById("sub_nav_top"),
    downC = document.getElementById("downC"),
    color = document.getElementById("colorize");
//  sub_nav.style.opacity="0";
 // var currentEventTarget = event.currentTarget;
//  console.log(event.currentEventTarget);
  console.log(event.target.id);//debug
  //console.log(event.target.className);//debug
  if (document.getElementById("highlight").innerHTML === "about" || document.getElementById("highlight").innerHTML === "songs" || document.getElementById("highlight").innerHTML === "char"||document.getElementById("highlight").innerHTML === "game"){
    if (document.getElementById("highlight").innerHTML === "about"){        
      document.getElementById("about").style.color="#FF679D";
    }
    else if (document.getElementById("highlight").innerHTML === "songs"){        
      document.getElementById("songs").style.color="#FF679D";
    }else if (document.getElementById("highlight").innerHTML === "char"){
      document.getElementById("char").style.color="#FF679D";
      document.getElementById("colorize").style.fill="#FF679D";
    }else if (document.getElementById("highlight").innerHTML === "game"){
      document.getElementById("game").style.color="#FF679D";
    }
//    if ((event.target.id)==="char" || (event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
//    //  console.log("clickd on <a>");//debug
//      if (sub_nav.style.opacity === "0"){
//     //   console.log("object hidden");//debug
//        color.style.fill = "#FF679D";
//        downC.style.transform="rotate(180deg)";
//        sub_nav.style.opacity="1";
//      }else if (sub_nav.style.opacity === "1"){
//     //   console.log("object showing");//debug
//        sub_nav.style.opacity="0";
//        downC.style.transform="rotate(360deg)";
//      }else{
//    //    console.log("error");//something is broken 
//      }
//    }else if ((event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
//   //   console.log("clicked on triangle");
//    }else {
//    //  console.log("nothing clicked");//something is broken 
//    } //about section
  }
  if ((event.target.id)==="char" || (event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
    console.log("clickd on <a>");//debug  
    if (sub_nav.style.opacity === "0"){
      console.log("object hidden");//debug
      color.style.fill = "#FF679D";
      downC.style.transform="rotate(180deg)";
      sub_nav.style.opacity="1";
    }else if (sub_nav.style.opacity === "1"){
      console.log("object showing");//debug
      sub_nav.style.opacity="0";
      downC.style.transform="rotate(360deg)";
    }else{
      console.log("error");//something is broken 
    }
  }else if ((event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
    console.log("clicked on triangle");
  }else {
    console.log("nothing clicked");//something is broken 
  }
}
//hover over character on main nav
function hov(event){
//  console.log(event.target.id);
   var downC = document.getElementById("downC"),
       sub_nav = document.getElementById("sub_nav_top"),
       path = document.getElementById("path"),
       pathT = document.getElementById("pathT"),
       pathO = document.getElementById("pathO"),
       color = document.getElementById("colorize");
  if ((event.target.id)==="char") {
    color.style.fill = "#FF679D";
    downC.style.transform="rotate(180deg)";
    if (sub_nav.style.opacity === "0") {
      sub_nav.style.opacity="1";
    }   
  }else if ((event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
    color.style.fill = "#FF679D";
    downC.style.transform="rotate(180deg)";
    if (sub_nav.style.opacity === "0") {
      sub_nav.style.opacity="1";
    }
    if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night") {
      sub_nav.style.opacity="1";
    }
  } else if((event.target.id)==="about" || (event.target.id)==="songs" || (event.target.id)==="game"){
    sub_nav.style.opacity ="0";
    color.style.fill="#707070";
    downC.style.transform="rotate(360deg)";
  }
}

//simpler version of the bottom script
function leave(){
  var downC = document.getElementById("downC"),
      sub_nav = document.getElementById("sub_nav_top"),
      color = document.getElementById("colorize");
  sub_nav.style.opacity="0";
  color.style.fill="#707070";
  downC.style.transform="rotate(360deg)";
}

//this is way to complicated and doesn't work :(
//hover off of character on main nav   
//function off(event){
//  var downC = document.getElementById("downC"),
//       sub_nav = document.getElementById("sub_nav_top"),
//       color = document.getElementById("colorize");
//  console.log(event.target.id);
//  if (document.getElementById("colorV").innerHTML === "true"){
//    if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){//1
//      console.log("one");
//      if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){//2
//        console.log("two");
//        if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){//3
//          console.log("three");
//         if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){//4
//           console.log("four");
//           if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){//5
//             console.log("five");
//             if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){
//               console.log("six");
//               if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){
//                 console.log("seven");
//               }
//             }
//           }
//         }
//        }
//      }
//      console.log("hoved out");
//      sub_nav.style.opacity="0";
//      color.style.fill="#707070";
//      downC.style.transform="rotate(360deg)";
//    } else if ((event.target.id)=="char"){
//      if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "virtual" || (event.target.id)=== "leo" ||(event.target.id)=== "more" ||(event.target.id)=== "vivid" || (event.target.id)=== "wonderlands" ||(event.target.id)=== "night"){
//        //do nothing
//    }
//  }
//}
//}