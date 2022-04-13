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

    
      if (entry.target.class = "img") {
        let pic = entry.target;
        if (pic.id.length == 4) {
          pic.src = `${imgURLs[parseInt(pic.id[3])]}`;
        } else {
          pic.src = `${imgURLs[parseInt(pic.id[3] + pic.id[4])]}`;
        }
        pic.addEventListener("click", () =>{ maxPic(pic.src);});
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
  setTimeout(() => { window.location = "/gallery.html"; }
    , 2000);
}

openHome = () => {
  open();
  setTimeout(() => { window.location = "/index.html"; }
    , 2000);
}
openAbout = () => {
  open();
  setTimeout(() => { window.location = "/about.html"; }
    , 2000);
}
openContact = () => {
  open();
  setTimeout(() => { window.location = "/contact.html"; }
    , 2000);
}

openGigs = () => {
  open();
  setTimeout(() => { window.location = "/gigs.html"; }
    , 2000);
}

openMusic = () => {
  open();
  setTimeout(() => { window.location = "/music.html"; }
    , 2000);
}

openShop = () => {
  open();
  setTimeout(() => { window.location = "/shop.html"; }
    , 2000);
}

openNews = () => {
  open();
  setTimeout(() => { window.location = "/news.html"; }
    , 2000);
}






//GALLERY

//GALLERY VARIABLES
const galleryImages = document.querySelectorAll("img");

let imgURLs = []
for (let i = 0; i < 17; i++) {
  imgURLs.push(`img/img\ (${i}).jpg`);
}

//GALLERY FUNCTIONS
if (h2.innerHTML == "Gallery") {
  galleryImages.forEach(img => { observer.observe(img); });
  }


createSlider = (width, height, pos) => {
  const backCover = document.createElement("div");
  const slider = document.createElement("div");
  const leftWing = document.createElement("div");
  const leftButton = document.createElement("div");
  const leftTop = document.createElement("div");
  const leftBottom = document.createElement("div");

  const viewer = document.createElement("div");
  const frame = document.createElement("div");
  const currentImage = document.createElement("img");

  const rightWing = document.createElement("div");
  const rightButton = document.createElement("div");
  const rightTop = document.createElement("div");
  const rightBottom = document.createElement("div");

  leftButton.appendChild(leftTop);
  leftButton.appendChild(leftBottom);
leftWing.appendChild(leftButton);
slider.appendChild(leftWing);

frame.appendChild(currentImage);
viewer.appendChild(frame);
slider.appendChild(viewer);

rightButton.appendChild(rightTop);
rightButton.appendChild(rightBottom);
rightWing.appendChild(rightButton);
slider.appendChild(rightWing);

slider.classList.add("slider");
slider.style.width = `${width}`;
slider.style.height = `${height}`;

backCover.appendChild(slider);
backCover.classList.add("backCover");
backCover.style.position = pos;
bg1.appendChild(backCover);
console.log(slider);
}



maxPic = (source) => {
  createSlider("80vw", "80vh", "fixed");

}