const scrollBtn = document.getElementById("backBtn");
const menuBtn = document.getElementById("menuBtn");
const menuDiv = document.getElementById("menuDiv");
const body =   document.getElementById("body");

const logo = document.getElementById("logo");

function scrollTop(){
    
  console.log("Scrolling");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

scrollBtn.addEventListener('click', () => {
  scrollTop();
});

menuBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  logo.classList.toggle("wideLogo");
  menuBtn.classList.toggle("rotate");
  menuDiv.classList.toggle("showMenu");
  body.classList.toggle("noFlow");
});