// COUNTER
let count = 0;
const counter = document.getElementById("counter");

setInterval(() => {
  if (count < 2009) {
    count += 7;
    counter.textContent = count;
  }
}, 20);


// NAV INDICATOR
const navBtns = document.querySelectorAll(".nav-btn");
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(el){
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    navBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    moveIndicator(btn);
  });
});

window.addEventListener("load", () => {
  const active = document.querySelector(".nav-btn.active");
  if(active) moveIndicator(active);
});


// NAVIGATION
function goHome(){
  document.querySelector(".hero").scrollIntoView({
    behavior:"smooth"
  });
}

function openGallery(){
  document.querySelector("#gallery").scrollIntoView({
    behavior:"smooth"
  });
}


// CONTACT
function openContact(){
  document.getElementById("contactModal").style.display = "flex";
}

function closeContact(){
  document.getElementById("contactModal").style.display = "none";
}


// THEME
function toggleTheme(){
  document.body.classList.toggle("dark");
}


// MUSIC
function toggleMusic(){
  const music = document.getElementById("bgMusic");

  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}


// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
});


// TOAST
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("toast").classList.add("show");
  }, 800);
});
// COUNTER
let count = 0;
setInterval(()=>{
  if(count < 2009){
    count += 7;
    document.getElementById("counter").innerText = count;
  }
},20);

// THEME
function toggleTheme(){
  document.body.classList.toggle("dark");
}

// MUSIC
function toggleMusic(){
  const m = document.getElementById("bgMusic");
  m.paused ? m.play() : m.pause();
}

// NAV
function goHome(){
  window.scrollTo({top:0,behavior:"smooth"});
}

function openGallery(){
  document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
}

function openContact(){
  document.getElementById("modal").style.display="flex";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// LOADER
window.onload = ()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },800);
}
