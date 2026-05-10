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
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}

// NAV ACTION
function goHome(){
  window.scrollTo({top:0,behavior:"smooth"});
}

function openGallery(){
  document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
}

// MODAL
function openContact(){
  document.getElementById("contactModal").style.display="flex";
}

function closeContact(){
  document.getElementById("contactModal").style.display="none";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}
