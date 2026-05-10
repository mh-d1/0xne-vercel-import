

let count = 0;

const counter =
document.getElementById('counter');

const interval = setInterval(() => {

  count += 2;

  counter.textContent = count;

  if(count >= 2009){
    clearInterval(interval);
  }

}, 10);

// EXPLORE BUTTON
function showMessage(){
    

  alert('Welcome To my project website ✨');

}

// TOGGLE GLOW THEME
let active = false;

function changeTheme(){

  active = !active;

  if(active){

    document.body.style.background =
    'radial-gradient(circle at top,#2b2b2b 0%, #000000 55%)';

  } else {

    document.body.style.background =
    'radial-gradient(circle at top,#1a1a1a 0%, #050505 45%)';

  }

}

// HOME BUTTON
function goHome(){

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}



// GALLERY BUTTON
function openGallery(){

  document.getElementById('gallery')
  .scrollIntoView({
    behavior: 'smooth'
  });
}


  


// contact button
function projectAlert(){

  

}
const contactModal = document.getElementById("contactModal");

function openContact(){
  contactModal.style.display = "flex";
}

function closeContact(){
  contactModal.style.display = "none";
}

window.addEventListener("click", function(e){

  if(e.target === contactModal){
    closeContact();
  }

});
const bgMusic = document.getElementById("bgMusic");

function toggleMusic(){

  if(bgMusic.paused){

    bgMusic.play();

  } else {

    bgMusic.pause();

  }

}
