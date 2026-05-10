// COUNTER
let count = 0;
const counter = document.getElementById("counter");

const interval = setInterval(() => {
  count += 7;

  if (count >= 2009) {
    count = 2009;
    clearInterval(interval);
  }

  counter.textContent = count;
}, 20);


// THEME
function toggleTheme() {
  document.body.classList.toggle("dark");
}


// NAVIGATION
function goHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function openGallery() {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
}


// CONTACT
const contactModal = document.getElementById("contactModal");

function openContact() {
  contactModal.style.display = "flex";
}

function closeContact() {
  contactModal.style.display = "none";
}


// MUSIC
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}


// MODAL INFO
function openModal(title, text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


// CLOSE MODAL CLICK OUTSIDE
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});


// INSTALL APP
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
  }
});


// SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}


// TOAST NOTIF
window.addEventListener("load", () => {
  const toast = document.getElementById("toast");

  setTimeout(() => {
    toast.classList.add("show");
  }, 800);

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
});
