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

// HOME
function goHome(){
  window.scrollTo({top:0,behavior:"smooth"});
}

// GALLERY
function openGallery(){
  document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
}

// MODAL FEATURES (RESTORED)
function openModal(title,text){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modal-title").innerText=title;
  document.getElementById("modal-text").innerText=text;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// CONTACT
function openContact(){
  document.getElementById("contactModal").style.display="flex";
}

function closeContact(){
  document.getElementById("contactModal").style.display="none";
}
