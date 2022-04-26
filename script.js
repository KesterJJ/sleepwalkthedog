const logoBox = document.getElementById("logoBox");
const heading = document.getElementById("heading");
const logoImage = document.getElementById("logoImage");
const allElements = document.getElementsByTagName("*");
const nav = document.getElementById("nav");
const btns = document.querySelectorAll("button");
const container = document.getElementById("container");
const blank = document.querySelector("#blank");
const images = document.getElementById("images");
const h2 = document.querySelector("h2");
const socials = document.getElementById("socials");
const sections = document.querySelectorAll("section");
const section1 = document.getElementById("section1");
aboutSection = document.getElementById("about-section");
const bg1 = document.getElementById("bg1");

let currentNo;

window.onload = () => {
  for (let elem of allElements) {
    elem.style.opacity = "1";
  }
  socials.style.opacity = "0.5";
}




const options = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px"
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    if (entry.target == section1) {
      logoBox.style.width = "100%";
      logoBox.style.marginTop = `${(blank.offsetHeight - logoBox.offsetHeight) / 3}px`
      logoBox.style.pointerEvents = "none";
      heading.style.fontSize = "7.5vmax";
      heading.style.textShadow = "rgba(150, 150, 150, 0.5) 10px 10px 7px";
      logoImage.style.width = "20vmax";
      logoImage.style.height = "20vmax";
      logoImage.style.boxShadow = "rgba(150, 150, 150, 0.5) 10px 10px 7px";
    }
    if (entry.target == aboutSection) {
      logoBox.style.width = "20%";
      logoBox.style.marginTop = "0px";
      heading.style.fontSize = "7vmin";
      heading.style.textShadow = "rgba(80, 80, 80, 0.5) 5px 5px 3px";
      logoBox.style.pointerEvents = "all";
      logoImage.style.width = "40vmin";
      logoImage.style.height = "20vmin";
      logoImage.style.boxShadow = "rgba(80, 80, 80, 0.5) 5px 5px 3px";
      nav.style.width = "595px";
    } if (entry.target == sections[2]) {
      nav.style.width = "85px"
    }


    if (h2.innerHTML == "Gallery") {
      let pic = entry.target;
      let picNo;
      if (pic.id.length == 4) {
        picNo = parseInt(pic.id[3]);
        pic.src = `${imgURLs[picNo]}`;
      } else {
        picNo = parseInt(pic.id[3] + pic.id[4]);
        pic.src = `${imgURLs[picNo]}`;
      }
    }
  })
}, options);

sections.forEach(section => { observer.observe(section); });


fadeOut = () => {
  for (let elem of allElements) {
    if (elem.id == "html" || elem.id == "body" || elem.id == "container" || elem.id == "bg1" || elem.id == "gallery" || elem.id == "section1") {
      elem.style.opacity = "1";
    } else {
      elem.style.opacity = "0";
    }
  }
}

open = () => {
  container.scrollTop = "0";
  setTimeout(fadeOut, 500);
}

openGallery = () => {
  open();
  setTimeout(() => { window.location = "./gallery.html"; }
    , 2000);
}

openHome = () => {
  open();
  setTimeout(() => { window.location = "./index.html"; }
    , 2000);
}
openAbout = () => {
  open();
  setTimeout(() => { window.location = "./about.html"; }
    , 2000);
}
openContact = () => {
  open();
  setTimeout(() => { window.location = "./contact.html"; }
    , 2000);
}

openGigs = () => {
  open();
  setTimeout(() => { window.location = "./gigs.html"; }
    , 2000);
}

openMusic = () => {
  open();
  setTimeout(() => { window.location = "./music.html"; }
    , 2000);
}

openShop = () => {
  open();
  setTimeout(() => { window.location = "./shop.html"; }
    , 2000);
}

openNews = () => {
  open();
  setTimeout(() => { window.location = "./news.html"; }
    , 2000);
}






//GALLERY

//GALLERY VARIABLES
const galleryImages = document.querySelectorAll(".img");

let imgURLs = []
for (let i = 0; i < 16; i++) {
  imgURLs.push(`img/img\ (${i})-min.jpg`);
}

//GALLERY FUNCTIONS
if (h2.innerHTML == "Gallery") {
  galleryImages.forEach(img => { observer.observe(img); });
}

galleryImages.forEach(img => {
  let imgNo;
  if (img.id.length == 4) {
    imgNo = parseInt(img.id[3]);
  } else {
    imgNo = parseInt(img.id[3] + img.id[4]);
  }
  img.addEventListener("click", () => { maxPic(imgNo); });
  console.log(imgNo);

})

const backCover = document.createElement("div");
const slider = document.createElement("div");
const leftWing = document.createElement("div");
const leftButton = document.createElement("div");
const leftTop = document.createElement("div");
const leftBottom = document.createElement("div");

const sliderImages = [];
const viewer = document.createElement("div");

const rightWing = document.createElement("div");
const rightButton = document.createElement("div");
const rightTop = document.createElement("div");
const rightBottom = document.createElement("div");

const crossBox = document.createElement("div");
const cross1 = document.createElement("div");
const cross2 = document.createElement("div");



assembleSlider = () => {
  leftButton.appendChild(leftTop);
  leftButton.appendChild(leftBottom);
  leftWing.appendChild(leftButton);

  rightButton.appendChild(rightTop);
  rightButton.appendChild(rightBottom);
  rightWing.appendChild(crossBox);
  rightWing.appendChild(rightButton);
  crossBox.appendChild(cross1);
  crossBox.appendChild(cross2);

  slider.appendChild(leftWing);
  slider.appendChild(viewer);
  slider.appendChild(rightWing);

  backCover.appendChild(slider);
  bg1.appendChild(backCover);
}


createCurrentImage = (frameWidth) => {
  console.log(currentNo);
  let frame = document.createElement("div");
  let image = document.createElement("img");
  image.src = imgURLs[currentNo];
  image.classList.add("sliderImage");
  frame.classList.add("frame");
  frame.appendChild(image);
  frame.style.width = frameWidth;
  viewer.appendChild(frame);
}

createPreviousImage = (frameWidth) => {
  let frame = document.createElement("div");
  let image = document.createElement("img");
  if (currentNo == 0) {
    image.src = imgURLs[15];
  } else {
    image.src = imgURLs[currentNo - 1];
  }
  image.classList.add("sliderImage");
  frame.classList.add("frame");
  frame.appendChild(image);
  frame.style.width = frameWidth;
  viewer.prepend(frame);
}

createNextImage = (frameWidth) => {
  let frame = document.createElement("div");
  let image = document.createElement("img");
  if (currentNo == 15) {
    image.src = imgURLs[0];
  } else {
    image.src = imgURLs[currentNo + 1];
  }
  
  image.classList.add("sliderImage");
  frame.classList.add("frame");
  frame.appendChild(image);
  frame.style.width = frameWidth;
  viewer.append(frame);
}



styleSlider = (width, height, pos, wingWidth, viewerWidth, frameWidth, imgNo) => {

  createPreviousImage(frameWidth);
  createCurrentImage(frameWidth);
  createNextImage(frameWidth);

  viewer.classList.add("viewer");
  viewer.style.width = viewerWidth;

  leftTop.classList.add("leftTop");
  leftTop.classList.add("arrowLine");
  leftBottom.classList.add("leftBottom");
  leftBottom.classList.add("arrowLine");
  rightTop.classList.add("rightTop");
  rightTop.classList.add("arrowLine");
  rightBottom.classList.add("rightBottom");
  rightBottom.classList.add("arrowLine");

  cross1.classList.add("cross1");
  cross2.classList.add("cross2");
  crossBox.classList.add("crossBox");


  leftButton.classList.add("sliderButton");
  rightButton.classList.add("sliderButton");

  leftWing.classList.add("wing");
  rightWing.classList.add("wing");

  rightWing.style.width = wingWidth;
  leftWing.style.width = wingWidth;

  slider.style.width = width;
  slider.style.height = height;

  slider.classList.add("slider");
  backCover.classList.add("backCover");
  backCover.style.position = pos;
}




createSlider = (width, height, pos, wingWidth, viewerWidth, frameWidth, imgNo) => {

  assembleSlider();
  styleSlider(width, height, pos, wingWidth, viewerWidth, frameWidth, imgNo);

  viewer.scrollLeft = viewer.offsetWidth;

  crossBox.addEventListener("click", closePic);


  leftButton.addEventListener("click", previous);
  rightButton.addEventListener("click", next);
}








previous = () => {
  if (currentNo == 0) {
    currentNo = 15;
  } else {
    currentNo--;
  }
  viewer.style.scrollBehavior = "smooth";
  viewer.scrollBy((viewer.offsetWidth * -1), 0);

  setTimeout(function () {
    createPreviousImage("100%");
    viewer.removeChild(viewer.lastChild);
    viewer.style.scrollBehavior = "auto";
    viewer.scrollLeft = viewer.offsetWidth;
  }, 500);
}

next = () => {
  if (currentNo == 15) {
    currentNo = 0;
  } else {
    currentNo++;
  }
  
  viewer.style.scrollBehavior = "smooth";
  viewer.scrollBy((viewer.offsetWidth), 0);

  setTimeout(function () {
    createNextImage("100%");
    viewer.removeChild(viewer.firstChild);
    viewer.style.scrollBehavior = "auto";
    viewer.scrollLeft = viewer.offsetWidth;
  }, 500);

}

closePic = () => {
  while (viewer.hasChildNodes()) {
    viewer.removeChild(viewer.firstChild);
  }
  crossBox.removeEventListener("click", closePic);

  leftButton.removeEventListener("click", previous);
  rightButton.removeEventListener("click", next);
  backCover.remove();

}






maxPic = (number) => {
  currentNo = number;
  console.log(currentNo);
  createSlider("80vw", "80vh", "fixed", "15%", "70%", "100%", 3);
}