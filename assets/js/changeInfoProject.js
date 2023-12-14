function tacoworm() {
//  document.getElementById("SectionHero").children.style.backgroundImage = "none";
  document.getElementById("title").innerHTML = "TACOWORM IN JAPAN";
  document.getElementById("Project-1").href="TacowormInJapan.html";
  document.getElementById("descriptionText").innerHTML = "A point and click game where the player tries to find Tacoworm hiding in Japanese food.";
  document.getElementById("BackgroundImage").style.background = "linear-gradient(rgba(255,255,255,0.2) 0%, white 100%), url('assets/img/TacowormProto2.png') center / contain no-repeat";

  hideVid();
//    "url('assets/img/TacowormProto2.png')"
}
function prosthetic() {
  document.getElementById("title").innerHTML = "CARDBOARD PROSTHETIC MOBILE";
  document.getElementById("descriptionText").innerHTML = "Mobile instructions for  Cardboard Prosthetic Arm.";
  document.getElementById("BackgroundImage").style.background = "linear-gradient(rgba(255,255,255,0.2) 0%, white 100%), url('assets/img/UIProsthetic.png') center / contain no-repeat";
  document.getElementById("Project-1").href="prosthetic.html";
  hideVid();
}

function hideVid() {
  document.getElementById("vidHero").style.display = "none";
  document.getElementById("RokiVid").style.display = "none";
  document.getElementById("sekai").style.display = "none";
  document.getElementById("VMF").style.display = "none";
  document.getElementById("vidOverlay").style.display = "none";
  document.getElementById("MatVid").style.display = "none";
  document.getElementById("MatVid").pause();
  document.getElementById("RokiVid").pause();
}

//get reference from Github
function matryshoka() {
  document.getElementById("title").innerHTML = "COLLAGE EFFECT Motion graphic";
  document.getElementById("descriptionText").innerHTML = "Collage animation using images.";
//  document.getElementById("BackgroundImage").style.background = "linear-gradient(rgba(255,255,255,0.2) 0%, white 100%), url('assets/img/Matryshoka.png') center / contain no-repeat";
  document.getElementById("BackgroundImage").style.backgroundImage="none";
  document.getElementById("vidHero").style.display = "block";
  document.getElementById("matVid").style.display = "block";
  document.getElementById("matVid").play();
  document.getElementById("vidOverlay").style.display = "block";
  
  document.getElementById("sekai").style.display = "none";
  document.getElementById("VMF").style.display = "none";
  document.getElementById("RokiVid").style.display = "none";
  document.getElementById("RokiVid").pause();
  document.getElementById("Project-1").href="Matryoshka.html";
}
function roki() {
  document.getElementById("title").innerHTML = "Roki Motion graphic";
  document.getElementById("descriptionText").innerHTML = "Using 3D layers in After Effects.";
//  document.getElementById("BackgroundImage").style.background = "linear-gradient(rgba(255,255,255,0.2) 0%, white 100%), url('assets/img/Matryshoka.png') center / contain no-repeat";
  
  document.getElementById("BackgroundImage").style.backgroundImage = "none";
  document.getElementById("vidHero").style.display = "block";
  document.getElementById("RokiVid").style.display = "block";
  document.getElementById("RokiVid").play();
  document.getElementById("vidOverlay").style.display = "block";
  
  document.getElementById("VMF").style.display = "none";
  document.getElementById("sekai").style.display = "none";
  document.getElementById("matVid").style.display = "none";
  document.getElementById("matVid").pause();
  document.getElementById("Project-1").href="Roki.html";
}
function sekai() {
  document.getElementById("title").innerHTML = "project sekai website";
  document.getElementById("descriptionText").innerHTML = "A fan site of Project Sekai for a exercise";
//  document.getElementById("BackgroundImage").style.background = "linear-gradient(rgba(255,255,255,0.2) 0%, white 100%), url('assets/img/Matryshoka.png') center / contain no-repeat";
  document.getElementById("BackgroundImage").style.backgroundImage = "none";
  document.getElementById("vidHero").style.display = "block";
  document.getElementById("vidOverlay").style.display = "block";
  document.getElementById("sekai").style.display = "block";

  document.getElementById("RokiVid").style.display = "none";
  document.getElementById("RokiVid").pause();
  document.getElementById("matVid").pause();
  document.getElementById("VMF").style.display = "none";
  document.getElementById("matVid").style.display = "none";
  document.getElementById("Project-1").href="projectSekai.html";
}
function vmf() {
  document.getElementById("title").innerHTML = "VMF Website";
  document.getElementById("descriptionText").innerHTML = "Website for VMF";
  document.getElementById("BackgroundImage").style.backgroundImage="none";
  //hideVid
  document.getElementById("vidHero").style.display = "block";
  document.getElementById("vidOverlay").style.display = "block";
  document.getElementById("VMF").style.display = "block";
  //document.getElementById("VMF").pause();
  
  document.getElementById("RokiVid").style.display = "none";
  document.getElementById("sekai").style.display = "none";
  document.getElementById("matVid").style.display = "none";
  document.getElementById("matVid").pause();
  document.getElementById("RokiVid").pause();
  document.getElementById("Project-1").href="VMF.html";
}