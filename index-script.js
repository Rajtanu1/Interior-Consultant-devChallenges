let barsIcon = document.querySelector(".bars-icon");
let xmarkIcon = document.querySelector(".xmark-icon");
let navbarLinksContainer = document.querySelector(".navbar__links-container");


//custom functions
function changeIconVisibility(icon) {
  let isIconVisible;
   icon.classList.contains("visible") ? isIconVisible = true : isIconVisible = false;
   isIconVisible ?  icon.style.transform = "rotateY(90deg)" : icon.style.transform = "rotateY(0deg)";

   if(icon.classList.contains("visible")) {
     icon.classList.remove("visible");
     icon.classList.add("invisible");
   } else {
     icon.classList.remove("invisible");
     icon.classList.add("visible");
   }
};

function changeNavbarLinksContainerVisiblity() {
  let isInsideViewport;
  navbarLinksContainer.offsetLeft > 0 ? isInsideViewport = false : isInsideViewport = true; //offset property shows the offset value of a positioned element
  
  if(isInsideViewport) {
    navbarLinksContainer.style.left = "100vw";
  } else {
    navbarLinksContainer.style.left = "-5vw";
  }
};


barsIcon.addEventListener("click", function(event) {
  let clickedElement = event.target;

  changeIconVisibility(barsIcon);
  changeIconVisibility(xmarkIcon);
  changeNavbarLinksContainerVisiblity();
});

xmarkIcon.addEventListener("click", function(event) {
  let clickedElement = event.target;

  changeIconVisibility(xmarkIcon);
  changeIconVisibility(barsIcon);
  changeNavbarLinksContainerVisiblity();
});